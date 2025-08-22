import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { KPICards } from "@/components/dashboard/KPICards";
import { ChartsSection } from "@/components/dashboard/ChartsSection";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex">
        <DashboardSidebar />
        
        <main className="flex-1 p-6 space-y-6 bg-gradient-subtle min-h-[calc(100vh-var(--header-height))]">
          <KPICards />
          <ChartsSection />
          <TransactionTable />
          <DashboardFooter />
        </main>
      </div>
    </div>
  );
};

export default Index;
