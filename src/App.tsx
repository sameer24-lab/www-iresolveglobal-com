import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import RevenueEngine from "./pages/RevenueEngine.tsx";
import OffshoreTeam from "./pages/OffshoreTeam.tsx";
import DemandGeneration from "./pages/DemandGeneration.tsx";
import BusinessOperations from "./pages/BusinessOperations.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import Careers from "./pages/Careers.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions/revenue-engine" element={<RevenueEngine />} />
          <Route path="/solutions/offshore-team" element={<OffshoreTeam />} />
          <Route path="/solutions/demand-generation" element={<DemandGeneration />} />
          <Route path="/solutions/business-operations" element={<BusinessOperations />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
