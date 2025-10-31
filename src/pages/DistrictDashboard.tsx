import { Button } from "@/components/ui/button";
import { DataMetricCard } from "@/components/DataMetricCard";
import { AudioButton } from "@/components/AudioButton";
import { ArrowLeft, IndianRupee, Briefcase, Users, CheckCircle, Wallet } from "lucide-react";
import { getMockDistrictData } from "@/data/mockData";
import { haryanaDistricts } from "@/data/districts";

interface DistrictDashboardProps {
  districtId: string;
  language: "hi" | "en";
  onBack: () => void;
}

export const DistrictDashboard = ({ districtId, language, onBack }: DistrictDashboardProps) => {
  const district = haryanaDistricts.find(d => d.id === districtId);
  const data = getMockDistrictData(districtId);
  
  if (!district) return null;

  const districtName = language === "hi" ? district.nameHi : district.nameEn;
  const heading = language === "hi" 
    ? `${districtName} - मनरेगा डेटा` 
    : `${districtName} - MGNREGA Data`;
  const subtitle = language === "hi"
    ? "इस महीने का प्रदर्शन"
    : "This Month's Performance";

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="mb-8 gap-2"
        >
          <ArrowLeft className="h-5 w-5" />
          {language === "hi" ? "वापस जाएं" : "Go Back"}
        </Button>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{heading}</h1>
            <AudioButton text={heading} language={language} />
          </div>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DataMetricCard
            icon={<IndianRupee className="h-7 w-7 text-primary" />}
            titleHi="कुल खर्च"
            titleEn="Total Expenditure"
            value={data.totalSpent}
            change={data.totalSpentChange}
            infoHi="यह इस महीने आपके ज़िले में मनरेगा पर खर्च की गई कुल राशि है।"
            infoEn="This is the total amount spent on MGNREGA in your district this month."
            language={language}
            variant={data.totalSpentChange > 0 ? "success" : "default"}
          />

          <DataMetricCard
            icon={<Briefcase className="h-7 w-7 text-primary" />}
            titleHi="बनाए गए कार्य दिवस"
            titleEn="Work Days Created"
            value={data.workDaysCreated}
            change={data.workDaysChange}
            infoHi="यह इस महीने मनरेगा के तहत बनाए गए कुल काम के दिनों की संख्या है।"
            infoEn="This is the total number of work days created under MGNREGA this month."
            language={language}
            variant={data.workDaysChange > 0 ? "success" : "default"}
          />

          <DataMetricCard
            icon={<Users className="h-7 w-7 text-primary" />}
            titleHi="सक्रिय मजदूर"
            titleEn="Active Workers"
            value={data.activeWorkers}
            change={data.activeWorkersChange}
            infoHi="यह इस महीने काम कर रहे मजदूरों की कुल संख्या है।"
            infoEn="This is the total number of workers employed this month."
            language={language}
            variant={data.activeWorkersChange > 0 ? "success" : "default"}
          />

          <DataMetricCard
            icon={<CheckCircle className="h-7 w-7 text-primary" />}
            titleHi="पूर्ण परियोजनाएं"
            titleEn="Completed Projects"
            value={data.completedProjects}
            change={data.completedProjectsChange}
            infoHi="यह इस महीने पूरी की गई परियोजनाओं की संख्या है।"
            infoEn="This is the number of projects completed this month."
            language={language}
            variant={data.completedProjectsChange > 0 ? "success" : "default"}
          />

          <DataMetricCard
            icon={<Wallet className="h-7 w-7 text-primary" />}
            titleHi="औसत दैनिक मजदूरी"
            titleEn="Average Daily Wage"
            value={data.avgWage}
            change={data.avgWageChange}
            infoHi="यह मजदूरों को मिलने वाली औसत दैनिक मजदूरी है।"
            infoEn="This is the average daily wage paid to workers."
            language={language}
            variant={data.avgWageChange > 0 ? "success" : "default"}
          />
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-lg p-6 text-center">
          <p className="text-lg text-muted-foreground">
            {language === "hi" 
              ? "यह डेटा प्रदर्शन उद्देश्यों के लिए है। वास्तविक डेटा जल्द ही उपलब्ध होगा।" 
              : "This data is for demonstration purposes. Real data will be available soon."}
          </p>
        </div>
      </div>
    </div>
  );
};
