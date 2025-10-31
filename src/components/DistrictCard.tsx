import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AudioButton } from "./AudioButton";

interface DistrictCardProps {
  id: string;
  nameHi: string;
  nameEn: string;
  language: "hi" | "en";
  onClick: () => void;
}

export const DistrictCard = ({ id, nameHi, nameEn, language, onClick }: DistrictCardProps) => {
  const displayName = language === "hi" ? nameHi : nameEn;
  
  return (
    <Card
      onClick={onClick}
      className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-card border-2 hover:border-primary group"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MapPin className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-center text-foreground">{displayName}</h3>
        <AudioButton text={displayName} language={language} />
      </div>
    </Card>
  );
};
