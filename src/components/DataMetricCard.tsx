import { Card } from "@/components/ui/card";
import { AudioButton } from "./AudioButton";
import { Info, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DataMetricCardProps {
  icon: React.ReactNode;
  titleHi: string;
  titleEn: string;
  value: string;
  change?: number;
  infoHi: string;
  infoEn: string;
  language: "hi" | "en";
  variant?: "default" | "success" | "destructive";
}

export const DataMetricCard = ({
  icon,
  titleHi,
  titleEn,
  value,
  change,
  infoHi,
  infoEn,
  language,
  variant = "default",
}: DataMetricCardProps) => {
  const title = language === "hi" ? titleHi : titleEn;
  const info = language === "hi" ? infoHi : infoEn;
  
  const cardClass = variant === "success" 
    ? "border-l-4 border-l-success bg-success/5" 
    : variant === "destructive" 
    ? "border-l-4 border-l-destructive bg-destructive/5"
    : "border-l-4 border-l-primary";

  const getTrendIcon = () => {
    if (!change) return null;
    if (change > 0) return <TrendingUp className="h-4 w-4 text-success" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <Card className={`p-6 ${cardClass}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                  <Info className="h-5 w-5 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-base p-4">
                <p>{info}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AudioButton text={`${title}. ${value}. ${info}`} language={language} />
        </div>
      </div>
      <h3 className="text-lg font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-baseline gap-3">
        <p className="text-4xl font-bold text-foreground">{value}</p>
        {change !== undefined && (
          <div className="flex items-center gap-1 text-sm font-medium">
            {getTrendIcon()}
            <span className={change > 0 ? "text-success" : change < 0 ? "text-destructive" : "text-muted-foreground"}>
              {change > 0 ? "+" : ""}{change}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};
