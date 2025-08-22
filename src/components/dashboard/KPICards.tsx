import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle, Activity } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  description?: string;
  priority?: "high" | "medium" | "low";
}

const KPICard = ({ title, value, change, changeType, icon, description, priority }: KPICardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-success";
      case "negative":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case "positive":
        return <TrendingUp className="h-3 w-3" />;
      case "negative":
        return <TrendingDown className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const getPriorityBadge = () => {
    if (!priority) return null;
    
    const variants = {
      high: "bg-danger text-white",
      medium: "bg-warning text-warning-foreground", 
      low: "bg-success-light text-success"
    };

    return (
      <Badge className={variants[priority]} variant="secondary">
        {priority === "high" && "Critical"}
        {priority === "medium" && "Important"}
        {priority === "low" && "Good"}
      </Badge>
    );
  };

  return (
    <Card className="shadow-card hover:shadow-elevated transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          {getPriorityBadge()}
          <div className="p-2 bg-gradient-subtle rounded-lg">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className={`flex items-center gap-1 text-xs ${getChangeColor()}`}>
          {getChangeIcon()}
          <span>{change}</span>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export function KPICards() {
  const kpis = [
    {
      title: "Model Accuracy",
      value: "94.2%",
      change: "+2.1% vs baseline",
      changeType: "positive" as const,
      icon: <Target className="h-4 w-4 text-primary" />,
      description: "Overall model performance",
      priority: "medium" as const
    },
    {
      title: "Precision (Fraud)",
      value: "87.8%",
      change: "+1.5% vs baseline",
      changeType: "positive" as const,
      icon: <CheckCircle className="h-4 w-4 text-success" />,
      description: "True fraud detection rate",
      priority: "low" as const
    },
    {
      title: "Recall (Fraud)",
      value: "91.3%",
      change: "-0.8% vs baseline",
      changeType: "negative" as const,
      icon: <AlertTriangle className="h-4 w-4 text-danger" />,
      description: "Fraud cases caught",
      priority: "high" as const
    },
    {
      title: "F1-Score",
      value: "89.5%",
      change: "+0.3% vs baseline",
      changeType: "positive" as const,
      icon: <Activity className="h-4 w-4 text-primary" />,
      description: "Balanced performance metric",
      priority: "medium" as const
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {kpis.map((kpi, index) => (
        <KPICard key={index} {...kpi} />
      ))}
    </div>
  );
}