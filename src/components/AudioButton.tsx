import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AudioButtonProps {
  text: string;
  language?: "hi" | "en";
}

export const AudioButton = ({ text, language = "hi" }: AudioButtonProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Button
      onClick={speak}
      variant="ghost"
      size="icon"
      className={`h-10 w-10 rounded-full ${isSpeaking ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
      aria-label={language === "hi" ? "सुनो" : "Listen"}
    >
      <Volume2 className="h-5 w-5" />
    </Button>
  );
};
