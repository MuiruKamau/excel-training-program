import { Linkedin } from "lucide-react";
import trainerImage from "../../assets/crispus_profile.jpg";

export function TrainerProfile() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-50 rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Column */}
            <div className="flex-shrink-0 text-center md:text-left">
              <img
                src={trainerImage}
                alt="Crispus Kamau"
                className="w-48 h-48 rounded-full mx-auto md:mx-0 mb-6 object-cover shadow-lg border-4 border-white"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Crispus Kamau, AssocRICS
              </h2>
              <p className="text-blue-600 font-semibold mb-4">
                Programme Trainer
              </p>

              <a
                href="https://www.linkedin.com/in/crispus-macharia-kamau/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors justify-center md:justify-start"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Bio Column */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                About Your Trainer
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Crispus Kamau is a real estate investment, structuring, and
                  financial modelling specialist with experience supporting the
                  development and capital raising of institutional-grade REITs
                  and real estate funds across Africa. His work sits at the
                  intersection of investment strategy, governance, and advanced
                  Excel-based financial modelling, translating real assets into
                  investor-ready products.
                </p>
                <p>
                  Crispus has supported the capital raising and structuring of
                  REITs and real estate platforms totalling approximately USD
                  238 million. His modelling expertise covers development
                  feasibility, IFRS-compliant financial statements, valuation
                  (DCF and capitalisation), debt structuring, tax modelling, and
                  investor return analysis, and has been relied upon in
                  investment committee, lender, and capital-raising processes.
                </p>
                <p>
                  Crispus is an AssocRICS member, IFC EDGE Expert, CAIA
                  candidate, and a Property Studies graduate of the University
                  of Cape Town.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
