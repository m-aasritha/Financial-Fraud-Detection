import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, Code } from "lucide-react";

export function DashboardFooter() {
  const modelVersion = "v2.1.3";
  const trainingDate = "January 10, 2024";

  return (
    <footer className="mt-8 p-6 bg-card border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Model Version: <span className="font-mono font-medium">{modelVersion}</span></span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Training Date: <span className="font-medium">{trainingDate}</span></span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <Badge variant="outline" className="border-warning text-warning">
            Prototype — For demonstration purposes only
          </Badge>
        </div>
      </div>
    </footer>
  );
}