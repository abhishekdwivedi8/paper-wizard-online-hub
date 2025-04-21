
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 fade-in mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Professional <span className="text-primary">Research Papers</span> For Every Need
            </h1>
            <p className="text-xl text-gray-600">
              Expert writing services for students, academics, and professionals. Quality research and impeccable papers delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#contact">Get Started</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://i.ibb.co/9nKg5GJ/education-logos-collage.png"
              alt="Collage of logos representing renowned educational institutions from India and worldwide across various fields of study"
              className="w-full h-auto rounded-lg shadow-xl hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

