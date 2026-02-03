import { useState, useEffect } from "react";
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
import { projectId, publicAnonKey } from "../../../utils/supabase/info";
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
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRegistrations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-1e3b0733/registrations`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch registrations");
      }

      const data = await response.json();
      setRegistrations(data.registrations || []);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      toast.error("Failed to load registrations");
    } finally {
      setIsLoading(false);
    }
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
