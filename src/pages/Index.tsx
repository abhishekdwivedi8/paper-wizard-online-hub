
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { WhatsAppBadge } from "@/components/WhatsAppBadge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppBadge />
    </div>
  );
};

export default Index;
