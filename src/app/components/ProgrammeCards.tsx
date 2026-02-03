import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Check, Calendar, Clock } from "lucide-react";

interface ProgrammeCardsProps {
  onSelectProgramme: (programme: string) => void;
}

const programmes = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "Financial Modelling Foundations",
    description:
      "Build a clean, structured financial model from scratch and calculate basic investment returns (IRR, NPV and Yield) using professional modelling standards.",
    priceBase: "20,000",
    priceWithCert: "25,000",
    schedule: "1st Saturday of the month",
    duration: "7 Hours (Full Day)",
    time: "09:00 – 13:00, 14:00 – 17:00",
    color: "blue",
    highlights: [
      "Build complete investment model",
      "Professional modelling standards",
      "Calculate IRR, NPV and Yield",
      "Ideal for beginners",
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "IFRS Financial Modelling",
    description:
      "Produce fully linked, IFRS-compliant financial statements (Income Statement, Cash Flow Statement and Balance Sheet) for an operating investment or real estate project.",
    priceBase: "40,000",
    priceWithCert: "50,000",
    schedule: "2nd Saturday of the Month",
    duration: "8 Hours (Full Day)",
    time: "08:30 – 13:00, 14:00 – 17:30",
    color: "indigo",
    highlights: [
      "IFRS-compliant statements",
      "Fully linked financial model",
      "Advanced Excel formulas",
      "Professional reporting",
    ],
  },
  {
    id: "expert",
    title: "Expert",
    subtitle: "Fund, Valuation, Debt & Tax Modelling",
    description:
      "Build a deal-ready asset or fund financial model incorporating valuation, tax and investor return analysis suitable for investment committee, transaction and capital-raising decisions.",
    priceBase: "80,000",
    priceWithCert: "100,000",
    schedule: "3rd and 4th Saturday of the Month",
    duration: "7 Hours (Full Day each)",
    time: "09:00 – 13:00, 14:00 – 17:00",
    color: "purple",
    highlights: [
      "Fund-level modelling",
      "Valuation & tax analysis",
      "Investor-grade reporting",
      "Deal-ready models",
    ],
  },
];

export function ProgrammeCards({ onSelectProgramme }: ProgrammeCardsProps) {
  return (
    <section id="programmes" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Programme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the training tier that matches your experience level and
            career goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <Card
              key={programme.id}
              className={`border-2 hover:shadow-xl transition-shadow ${
                programme.id === "intermediate"
                  ? "border-indigo-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <CardHeader>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                    programme.id === "beginner"
                      ? "bg-blue-100 text-blue-700"
                      : programme.id === "intermediate"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {programme.title}
                </div>
                <CardTitle className="text-2xl">{programme.subtitle}</CardTitle>
                <CardDescription className="text-base mt-3">
                  {programme.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-gray-600">
                      TRAINING AMOUNT:
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      KES {programme.priceBase}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-600">
                      With Certification:
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      KES {programme.priceWithCert}
                    </span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Schedule
                      </p>
                      <p className="text-sm text-gray-600">
                        {programme.schedule}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {programme.duration}
                      </p>
                      <p className="text-sm text-gray-600">{programme.time}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {programme.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => onSelectProgramme(programme.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
