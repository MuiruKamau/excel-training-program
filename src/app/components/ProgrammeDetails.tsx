import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { ArrowLeft, Users, Target, BookOpen, Code, Award } from "lucide-react";
import { RegistrationForm } from "./RegistrationForm";

interface ProgrammeDetailsProps {
  programme: string;
  onBack: () => void;
}

const programmeData = {
  beginner: {
    title: "Beginner – Financial Modelling Foundations",
    objective:
      "Build a clean, structured financial model from scratch and calculate basic investment returns (IRR, NPV and Yield) using professional modelling standards applied in real estate and investment analysis.",
    whoFor: [
      "Students and recent graduates",
      "Analysts with limited modelling experience",
      "Professionals who use Excel but lack modelling discipline",
    ],
    build:
      "Build a complete investment model for a residential/commercial project in Nairobi",
    modellingTopics: [
      "Real Estate Fundamentals",
      "Core rules and principles of financial modelling",
      "Structuring and setting up a financial model",
      "Dedicated assumptions page with clearly documented sources and rationale",
    ],
    excelSkills: [
      "Professional formatting and navigation",
      "Cell referencing and formula discipline",
      "Logical functions (IF, AND, OR)",
      "Core mathematical functions (SUM, AVERAGE, MIN, MAX)",
      "Date and time modelling basics",
      "Growth and escalation calculations",
      "Introduction to IRR and NPV",
      "Error awareness and sense-checking",
    ],
    financialStatements: [
      "Simple investment cashflow model for a residential/commercial project in Nairobi",
      "Modelling rental income and operating expenses",
      "Annual cashflow projections",
      "Introduction to investment analysis",
    ],
    deliverables: [
      "Fully structured simple investment model",
      "Clearly defined inputs and assumptions",
      "Annual cashflows with IRR, NPV and Yield calculated",
      "Model formatted to professional best-practice standards",
    ],
  },
  intermediate: {
    title: "Intermediate – IFRS Financial Modelling",
    objective:
      "Produce fully linked, IFRS-compliant financial statements (Income Statement, Cash Flow Statement and Balance Sheet) for an operating investment or real estate project.",
    whoFor: [
      "Analysts with 1–5 years' experience",
      "Accountants moving into modelling roles",
      "Professionals producing management or lender reports",
    ],
    build:
      "Build a fully linked IFRS financial model with all financial statements and debt covenants",
    modellingTopics: [
      "Real Estate Fundamentals",
      "Modular model design separating operating, financing and financial statement components",
      "Alignment of monthly and annual timelines across all schedules",
      "Consistent application of end-of-month date conventions",
      "Balance sheet integrity checks and balancing logic",
      "Cash flow reconciliation and cash movement controls",
      "Model validation checks and internal consistency reviews",
    ],
    excelSkills: [
      "SUMIFS, COUNTIFS, for dynamic aggregation of revenues, costs and balances",
      "EOMONTH and advanced date logic for accurate time-based modelling",
      "XLOOKUP / INDEX-MATCH for flexible and scalable data retrieval across modules",
      "IFERROR applied responsibly for controlled error handling",
      "Structured formula writing for multi-period financial models",
      "Managing dependencies across linked schedules and statements",
    ],
    financialStatements: [
      "Income Statement modelling in line with IFRS principles",
      "Balance Sheet modelling, including retained earnings and equity movements",
      "Cash Flow Statement modelling across operating, investing and financing activities",
      "Bank covenant calculations and compliance monitoring",
    ],
    deliverables: [
      "Fully linked, IFRS-compliant financial model",
      "Integrated Income Statement, Balance Sheet and Cash Flow Statement",
      "Robust, auditable model suitable for professional review",
    ],
  },
  expert: {
    title: "Expert – Fund, Valuation, Debt & Tax Modelling",
    objective:
      "Build a deal-ready asset or fund financial model incorporating valuation, tax and investor return analysis suitable for investment committee, transaction and capital-raising decisions.",
    whoFor: [
      "Senior analysts, investment managers",
      "Fund, REIT, development and private capital professionals",
      "Anyone building or reviewing deal-level models",
    ],
    build:
      "Build a fund-level model incorporating development, valuation, debt, tax and investor reporting",
    modellingTopics: [
      "Portfolio-level and multi-asset model structuring",
      "Scenario and sensitivity frameworks (base, downside and upside cases)",
      "Multi-currency model architecture, including FX assumption frameworks",
      "Integration of asset-level models into consolidated fund-level outputs",
      "Scalable model structures suitable for funds, REITs and institutional portfolios",
    ],
    excelSkills: [
      "Advanced lookup logic across complex, multi-module models",
      "LET function for improved formula clarity, efficiency and performance",
      "Advanced filtering for portfolio, investor and lender reporting",
      "Data tables for sensitivity and comparative analysis",
      "Scenario switches and assumption toggles for controlled analysis",
      "AI-assisted prompting for formula review, debugging and optimisation",
      "Performance-efficient Excel modelling for large, complex workbooks",
    ],
    financialStatements: [
      "Development cashflow modelling from acquisition through stabilisation, including construction drawdowns and S-curve phasing",
      "Lease-level income modelling, including escalations, expiries, reversions and reversionary income analysis",
      "Asset valuation using Discounted Cash Flow (DCF) methodologies",
      "Direct capitalisation and exit yield–based valuation analysis",
      "Consolidation of asset level accounts into fund level accounts",
      "Investors return modelling",
      "Equity contribution and distribution modelling, including cash waterfall mechanics",
      "Tax calculations embedded within operating and investment cashflows",
      "Assessment of tax impacts on asset value and investor returns",
      "Capital structure modelling across development and stabilised phases, including senior, mezzanine and shareholder debt, interest profiles, repayment structures and covenant compliance",
    ],
    deliverables: [
      "Full asset-level or fund-level financial model",
      "Integrated development, operating, debt, valuation and tax modules",
      "Robust valuation model (DCF and capitalisation-based)",
      "Investor-grade and lender-grade reporting outputs",
    ],
  },
};

export function ProgrammeDetails({ programme, onBack }: ProgrammeDetailsProps) {
  const data = programmeData[programme as keyof typeof programmeData];

  if (!data) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl w-full mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programmes
        </Button>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Target className="w-6 h-6" />
                Programme Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.objective}
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex w-full justify-start overflow-x-auto md:grid md:grid-cols-5 h-auto md:h-10 p-1 gap-1">
              <TabsTrigger value="overview" className="flex-shrink-0">
                Overview
              </TabsTrigger>
              <TabsTrigger value="topics" className="flex-shrink-0">
                Topics
              </TabsTrigger>
              <TabsTrigger value="excel" className="flex-shrink-0">
                Excel Skills
              </TabsTrigger>
              <TabsTrigger value="statements" className="flex-shrink-0">
                Content
              </TabsTrigger>
              <TabsTrigger value="deliverables" className="flex-shrink-0">
                Deliverables
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Who This Is For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.whoFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    What You Will Build
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {data.build}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics">
              <Card>
                <CardHeader>
                  <CardTitle>Key Modelling Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.modellingTopics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="excel">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Excel Skills Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.excelSkills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="statements">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Statements & Key Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.financialStatements.map((statement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2" />
                        <span className="text-gray-700">{statement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deliverables">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Final Deliverables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {data.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2" />
                        <span className="text-gray-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Registration Form */}
        <RegistrationForm selectedProgramme={programme} />
      </div>
    </section>
  );
}
