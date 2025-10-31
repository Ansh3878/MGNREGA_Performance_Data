import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: "hi" | "en";
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="lg"
      className="fixed top-4 right-4 z-50 gap-2 bg-card shadow-lg hover:shadow-xl transition-all"
    >
      <Languages className="h-5 w-5" />
      <span className="font-semibold">{language === "hi" ? "English" : "हिंदी"}</span>
    </Button>
  );
};
