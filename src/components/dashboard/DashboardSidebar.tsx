import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Settings, BarChart3, FileText } from "lucide-react";

const models = [
  "Random Forest",
  "Extra Trees", 
  "XGBoost",
  "SVC",
  "Logistic Regression",
  "KNN",
  "Decision Tree"
];

const metrics = [
  { id: "accuracy", label: "Accuracy" },
  { id: "precision", label: "Precision" },
  { id: "recall", label: "Recall" },
  { id: "f1", label: "F1 Score" },
  { id: "roc", label: "ROC Curve" }
];

export function DashboardSidebar() {
  const [selectedModel, setSelectedModel] = useState("Random Forest");
  const [threshold, setThreshold] = useState([0.5]);
  const [selectedMetrics, setSelectedMetrics] = useState(["accuracy", "precision", "recall", "f1"]);

  const handleMetricChange = (metricId: string, checked: boolean) => {
    if (checked) {
      setSelectedMetrics([...selectedMetrics, metricId]);
    } else {
      setSelectedMetrics(selectedMetrics.filter(id => id !== metricId));
    }
  };

  return (
    <aside className="w-sidebar bg-card border-r border-border shadow-card h-[calc(100vh-var(--header-height))] overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Model Selection */}
        <Card className="p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Settings className="h-4 w-4 text-primary" />
            <Label className="text-sm font-semibold">Model Selection</Label>
          </div>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {models.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>

        {/* Data Upload */}
        <Card className="p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Upload className="h-4 w-4 text-primary" />
            <Label className="text-sm font-semibold">Data Upload</Label>
          </div>
          <Button variant="outline" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            Upload CSV File
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Upload transaction data (.csv format)
          </p>
        </Card>

        {/* Threshold Adjustment */}
        <Card className="p-4 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-4 w-4 text-primary" />
            <Label className="text-sm font-semibold">Fraud Probability Cutoff</Label>
          </div>
          <div className="space-y-3">
            <Slider
              value={threshold}
              onValueChange={setThreshold}
              max={1}
              min={0}
              step={0.01}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0.0</span>
              <span className="font-medium text-foreground">{threshold[0].toFixed(2)}</span>
              <span>1.0</span>
            </div>
          </div>
        </Card>

        {/* Metrics to Display */}
        <Card className="p-4 shadow-card">
          <Label className="text-sm font-semibold mb-3 block">Metrics to Display</Label>
          <div className="space-y-3">
            {metrics.map((metric) => (
              <div key={metric.id} className="flex items-center space-x-2">
                <Checkbox
                  id={metric.id}
                  checked={selectedMetrics.includes(metric.id)}
                  onCheckedChange={(checked) => handleMetricChange(metric.id, !!checked)}
                />
                <Label htmlFor={metric.id} className="text-sm">
                  {metric.label}
                </Label>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </aside>
  );
}