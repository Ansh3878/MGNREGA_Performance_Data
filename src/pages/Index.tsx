import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { DistrictSelector } from "./DistrictSelector";
import { DistrictDashboard } from "./DistrictDashboard";
import { AudioButton } from "@/components/AudioButton";

const Index = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const toggleLanguage = () => {
    setLanguage(prev => prev === "hi" ? "en" : "hi");
  };

  const handleSelectDistrict = (districtId: string) => {
    setSelectedDistrict(districtId);
  };

  const handleBack = () => {
    setSelectedDistrict(null);
  };

  return (
    <div className="min-h-screen">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      
      {!selectedDistrict ? (
        <>
          <header className="bg-primary text-primary-foreground py-8 px-4 shadow-lg">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {language === "hi" ? "हमारी आवाज़, हमारे अधिकार" : "Our Voice, Our Rights"}
                </h1>
                <AudioButton 
                  text={language === "hi" ? "हमारी आवाज़, हमारे अधिकार" : "Our Voice, Our Rights"} 
                  language={language}
                />
              </div>
              <p className="text-lg sm:text-xl opacity-95">
                {language === "hi" 
                  ? "मनरेगा प्रदर्शन डेटा - सरल और समझने योग्य" 
                  : "MGNREGA Performance Data - Simple and Understandable"}
              </p>
            </div>
          </header>
          
          <DistrictSelector 
            language={language} 
            onSelectDistrict={handleSelectDistrict}
          />
        </>
      ) : (
        <DistrictDashboard
          districtId={selectedDistrict}
          language={language}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default Index;
