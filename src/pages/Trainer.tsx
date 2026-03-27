import Navbar from "@/components/Navbar";
import TrainerSection from "@/components/TrainerSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TrainerPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20"> {/* Offset for Fixed Navbar */}
        <TrainerSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TrainerPage;
