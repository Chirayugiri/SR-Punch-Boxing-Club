import Navbar from "@/components/Navbar";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const EventsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-20"> {/* Offset for Fixed Navbar */}
        <UpcomingEventsSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default EventsPage;
