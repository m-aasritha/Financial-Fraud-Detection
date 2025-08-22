import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, AlertTriangle, CheckCircle, Eye } from "lucide-react";

// Mock transaction data
const mockTransactions = [
  {
    id: "TXN001",
    amount: 1250.00,
    time: "2024-01-15 14:32:15",
    probability: 0.93,
    prediction: "Fraud",
    actual: "Fraud"
  },
  {
    id: "TXN002", 
    amount: 45.99,
    time: "2024-01-15 14:28:42",
    probability: 0.12,
    prediction: "Legitimate",
    actual: "Legitimate"
  },
  {
    id: "TXN003",
    amount: 2890.50,
    time: "2024-01-15 14:25:18",
    probability: 0.87,
    prediction: "Fraud",
    actual: "Fraud"
  },
  {
    id: "TXN004",
    amount: 15.99,
    time: "2024-01-15 14:22:07",
    probability: 0.08,
    prediction: "Legitimate",
    actual: "Legitimate"
  },
  {
    id: "TXN005",
    amount: 523.75,
    time: "2024-01-15 14:18:33",
    probability: 0.75,
    prediction: "Fraud",
    actual: "Legitimate"
  },
  {
    id: "TXN006",
    amount: 99.99,
    time: "2024-01-15 14:15:21",
    probability: 0.23,
    prediction: "Legitimate",
    actual: "Legitimate"
  }
];

export function TransactionTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  
  const filteredTransactions = mockTransactions.filter(txn => {
    const matchesSearch = txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         txn.amount.toString().includes(searchTerm);
    
    const matchesFilter = filterBy === "all" || 
                         (filterBy === "fraud" && txn.prediction === "Fraud") ||
                         (filterBy === "legitimate" && txn.prediction === "Legitimate");
    
    return matchesSearch && matchesFilter;
  });

  const getPredictionBadge = (prediction: string, probability: number) => {
    if (prediction === "Fraud") {
      return (
        <Badge className="bg-gradient-danger text-white">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Fraud ({(probability * 100).toFixed(1)}%)
        </Badge>
      );
    }
    return (
      <Badge className="bg-gradient-success text-white">
        <CheckCircle className="h-3 w-3 mr-1" />
        Safe ({(probability * 100).toFixed(1)}%)
      </Badge>
    );
  };

  const getRowClassName = (prediction: string, actual: string) => {
    if (prediction === "Fraud") {
      return "bg-danger-light/30 border-l-4 border-l-danger";
    }
    if (prediction !== actual) {
      return "bg-warning-light/30 border-l-4 border-l-warning";
    }
    return "";
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Transaction Analysis
          </CardTitle>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-full sm:w-64"
              />
            </div>
            
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="fraud">Fraud Only</SelectItem>
                <SelectItem value="legitimate">Legitimate Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Transaction ID</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Time</TableHead>
                <TableHead className="font-semibold">Prediction</TableHead>
                <TableHead className="font-semibold">Actual</TableHead>
                <TableHead className="font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((txn) => (
                <TableRow 
                  key={txn.id} 
                  className={`hover:bg-muted/50 transition-colors ${getRowClassName(txn.prediction, txn.actual)}`}
                >
                  <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                  <TableCell className="font-semibold">
                    ${txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {txn.time}
                  </TableCell>
                  <TableCell>
                    {getPredictionBadge(txn.prediction, txn.probability)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={txn.actual === "Fraud" ? "destructive" : "secondary"}>
                      {txn.actual}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {filteredTransactions.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No transactions found matching your criteria</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}