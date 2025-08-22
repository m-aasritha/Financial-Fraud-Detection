import { Shield, Clock } from "lucide-react";

export function DashboardHeader() {
  const lastUpdate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="h-header bg-card border-b border-border shadow-card">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-elevated">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Financial Fraud Detection Prototype
            </h1>
            <p className="text-sm text-muted-foreground">
              Machine Learning models for identifying fraudulent transactions
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: {lastUpdate}</span>
        </div>
      </div>
    </header>
  );
}