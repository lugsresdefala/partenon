import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/home";
import InterventionsPage from "@/pages/interventions";
import GuidelinesPage from "@/pages/guidelines";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <QueryClientProvider client={queryClient}>
        <main className="relative flex min-h-screen flex-col">
          <Header />
          <Router>
            <Route path="/" component={Home} />
            <Route path="/interventions" component={InterventionsPage} />
            <Route path="/guidelines" component={GuidelinesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/:rest*" component={NotFound} />
          </Router>
          <Footer />
          <Toaster />
        </main>
      </QueryClientProvider>
    </div>
  );
}
