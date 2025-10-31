import { DistrictCard } from "@/components/DistrictCard";
import { haryanaDistricts } from "@/data/districts";
import { AudioButton } from "@/components/AudioButton";

interface DistrictSelectorProps {
  language: "hi" | "en";
  onSelectDistrict: (districtId: string) => void;
}

export const DistrictSelector = ({ language, onSelectDistrict }: DistrictSelectorProps) => {
  const heading = language === "hi" ? "अपना ज़िला चुनें" : "Select Your District";
  const subtitle = language === "hi" 
    ? "हरियाणा में अपने ज़िले का चयन करें" 
    : "Choose your district in Haryana";

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{heading}</h1>
            <AudioButton text={heading} language={language} />
          </div>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {haryanaDistricts.map((district) => (
            <DistrictCard
              key={district.id}
              id={district.id}
              nameHi={district.nameHi}
              nameEn={district.nameEn}
              language={language}
              onClick={() => onSelectDistrict(district.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
