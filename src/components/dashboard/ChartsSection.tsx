import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Target, TrendingUp, PieChart } from "lucide-react";

// Mock data for demonstration
const confusionMatrixData = [
  ["True Neg", "False Pos"],
  ["8,542", "143"],
  ["False Neg", "True Pos"], 
  ["87", "1,228"]
];

const classDistribution = {
  legitimate: 8685,
  fraud: 1315,
  total: 10000
};

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Confusion Matrix */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Confusion Matrix
          </CardTitle>
          <Badge variant="outline">Random Forest</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 p-4 bg-gradient-subtle rounded-lg">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Predicted Legitimate</div>
              <div className="space-y-2">
                <div className="bg-success-light p-3 rounded border">
                  <div className="text-xs text-muted-foreground">True Negative</div>
                  <div className="text-lg font-bold text-success">8,542</div>
                </div>
                <div className="bg-danger-light p-3 rounded border">
                  <div className="text-xs text-muted-foreground">False Negative</div>
                  <div className="text-lg font-bold text-danger">87</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Predicted Fraud</div>
              <div className="space-y-2">
                <div className="bg-warning-light p-3 rounded border">
                  <div className="text-xs text-muted-foreground">False Positive</div>
                  <div className="text-lg font-bold text-warning">143</div>
                </div>
                <div className="bg-success-light p-3 rounded border">
                  <div className="text-xs text-muted-foreground">True Positive</div>
                  <div className="text-lg font-bold text-success">1,228</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ROC Curve */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            ROC Curve
          </CardTitle>
          <Badge className="bg-gradient-primary text-white">AUC: 0.947</Badge>
        </CardHeader>
        <CardContent>
          <div className="relative h-48 bg-gradient-subtle rounded-lg p-4 flex items-center justify-center border">
            <div className="text-center space-y-2">
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <div className="text-sm text-muted-foreground">ROC Curve Visualization</div>
              <div className="text-xs text-muted-foreground">AUC Score: 0.947 (Excellent Performance)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Precision-Recall Curve */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Precision-Recall Curve
          </CardTitle>
          <Badge variant="outline">AP: 0.892</Badge>
        </CardHeader>
        <CardContent>
          <div className="relative h-48 bg-gradient-subtle rounded-lg p-4 flex items-center justify-center border">
            <div className="text-center space-y-2">
              <Target className="h-12 w-12 text-success mx-auto" />
              <div className="text-sm text-muted-foreground">PR Curve Visualization</div>
              <div className="text-xs text-muted-foreground">Average Precision: 0.892</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Class Distribution */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Class Distribution
          </CardTitle>
          <Badge variant="outline">{classDistribution.total.toLocaleString()} Total</Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-success rounded-full"></div>
                <span className="font-medium">Legitimate Transactions</span>
              </div>
              <div className="text-right">
                <div className="font-bold">{classDistribution.legitimate.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">
                  {((classDistribution.legitimate / classDistribution.total) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-danger-light rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-danger rounded-full"></div>
                <span className="font-medium">Fraudulent Transactions</span>
              </div>
              <div className="text-right">
                <div className="font-bold">{classDistribution.fraud.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">
                  {((classDistribution.fraud / classDistribution.total) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}