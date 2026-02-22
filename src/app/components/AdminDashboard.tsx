import { useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Loader2, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Registration {
  key: string;
  value: {
    fullName: string;
    email: string;
    phone: string;
    programme: string;
    message: string;
    timestamp: string;
  };
}

export function AdminDashboard() {
  const registrations: Registration[] = [];
  const isLoading = false;

  const fetchRegistrations = async () => {
    toast.info("Admin Dashboard data is now managed via Google Sheets.");
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const getProgrammeName = (id: string) => {
    const names: { [key: string]: string } = {
      beginner: "Beginner – Financial Modelling Foundations",
      intermediate: "Intermediate – IFRS Financial Modelling",
      expert: "Expert – Fund, Valuation, Debt & Tax Modelling",
    };
    return names[id] || id;
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl">
                  Registration Dashboard
                </CardTitle>
                <CardDescription>
                  View and manage all programme registrations
                </CardDescription>
              </div>
              <Button
                onClick={fetchRegistrations}
                variant="outline"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : registrations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No registrations yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Programme</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((registration) => (
                      <TableRow key={registration.key}>
                        <TableCell className="whitespace-nowrap">
                          {formatDate(registration.value.timestamp)}
                        </TableCell>
                        <TableCell className="font-medium">
                          {registration.value.fullName}
                        </TableCell>
                        <TableCell>{registration.value.email}</TableCell>
                        <TableCell>{registration.value.phone}</TableCell>
                        <TableCell className="max-w-xs">
                          <span className="text-sm">
                            {getProgrammeName(registration.value.programme)}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-md">
                          {registration.value.message || "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Total Registrations:</strong> {registrations.length}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
              <p>
                Trainer: Crispus Kamau, AssocRICS &middot; Delta Corner,
                Westlands, Nairobi, Kenya &middot; exelguru.com
              </p>
              <p className="mt-2">
                &copy; {new Date().getFullYear()} Excel Training Programme. All
                rights reserved.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
