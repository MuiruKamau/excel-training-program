import { Button } from "@/app/components/ui/button";
// @ts-ignore
import { MapPin, Coffee } from "lucide-react";

interface HeroProps {
  onViewProgrammes: () => void;
}

export function Hero({ onViewProgrammes }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Professional Excel Training
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Real Estate Financial Modelling & IFRS Reporting
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A hands-on Excel training programme focused on real estate financial
          modelling and the preparation of IFRS-compliant financial statements.
          Designed to equip you with practical, industry-relevant modelling
          skills used by real estate developers, investment firms, and REIT
          managers.
        </p>

        {/* Location & Logistics - Centered Grid */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8 inline-block text-left max-w-2xl w-full">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Delta Corner, Westlands</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Coffee className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Refreshments</h3>
                <p className="text-gray-600">
                  Light refreshments included; lunch break provided
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button
            onClick={onViewProgrammes}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            View Programme Options Below
          </Button>
        </div>
      </div>
    </section>
  );
}
