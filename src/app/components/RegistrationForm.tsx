import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";

interface RegistrationFormProps {
  selectedProgramme?: string;
}

export function RegistrationForm({ selectedProgramme }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    programme: selectedProgramme || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyMx1vcj1TUOexdeI33qAXpy_Z0WBkVqetPr1q1uOeiU-sMcpYbU2pCu9QtwihgYA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.programme
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // We use no-cors mode because Google Apps Script doesn't support CORS preflight
      // reliably for all clients. This means we convert the response to an opaque one.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Since we can't read the response in no-cors mode, we assume success
      // if the network request didn't throw an error.
      setSubmitted(true);
      toast.success(
        "Registration submitted successfully! We'll be in touch soon.",
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        programme: selectedProgramme || "",
        message: "",
      });
    } catch (error) {
      console.error("Registration submission error:", error);
      toast.error(
        "Failed to submit registration. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-700 mb-4">
              Your registration has been received. We'll contact you shortly
              with more information.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Registration
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Register Your Interest</CardTitle>
        <CardDescription>
          Fill out the form below to register for this programme or enquire
          about more information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254 700 000 000"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="programme">Programme *</Label>
              <Select
                value={formData.programme}
                onValueChange={(value) =>
                  setFormData({ ...formData, programme: value })
                }
                required
              >
                <SelectTrigger id="programme">
                  <SelectValue placeholder="Select a programme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">
                    Beginner – Financial Modelling Foundations
                  </SelectItem>
                  <SelectItem value="intermediate">
                    Intermediate – IFRS Financial Modelling
                  </SelectItem>
                  <SelectItem value="expert">
                    Expert – Fund, Valuation, Debt & Tax Modelling
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Additional Notes / Questions (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your background or any questions you have..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> By submitting this form, your information
              will be sent to our team. We will contact you with programme
              details and next steps.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
