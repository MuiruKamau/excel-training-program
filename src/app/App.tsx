import { useState, useEffect } from "react";
import { Hero } from "@/app/components/Hero";
import { ProgrammeCards } from "@/app/components/ProgrammeCards";
import { ProgrammeDetails } from "@/app/components/ProgrammeDetails";
import { AdminDashboard } from "@/app/components/AdminDashboard";
import { TrainerProfile } from "@/app/components/TrainerProfile";
import { Toaster } from "@/app/components/ui/sonner";

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<string | null>(
    null,
  );
  const [showAdmin, setShowAdmin] = useState(false);

  // Check URL for admin parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true") {
      setShowAdmin(true);
    }
  }, []);

  const scrollToProgrammes = () => {
    const programmesSection = document.getElementById("programmes");
    if (programmesSection) {
      programmesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProgramme = (programme: string) => {
    setSelectedProgramme(programme);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToProgrammes = () => {
    setSelectedProgramme(null);
    setTimeout(() => scrollToProgrammes(), 100);
  };

  // If admin dashboard is requested, show only that
  if (showAdmin) {
    return (
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />

      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">
              Excel Training Programme
            </h1>
            <nav className="flex items-center gap-6">
              <button
                onClick={() => {
                  setSelectedProgramme(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={scrollToProgrammes}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Programmes
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {selectedProgramme ? (
          <ProgrammeDetails
            programme={selectedProgramme}
            onBack={handleBackToProgrammes}
          />
        ) : (
          <>
            <Hero onViewProgrammes={scrollToProgrammes} />
            <ProgrammeCards onSelectProgramme={handleSelectProgramme} />
            <TrainerProfile />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                Excel Training Programme
              </h3>
              <p className="text-gray-400">
                Real Estate Financial Modelling & IFRS Reporting
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Email: crispusmk@outlook.com</p>
              <p className="text-gray-400">Email: bella.kamau@outlook.com</p>
              <p className="text-gray-400">Phone: +254 796 868984</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Location</h3>
              <p className="text-gray-400">Delta Corner, Westlands</p>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Excel Training Programme. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
