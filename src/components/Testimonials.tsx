import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The research paper I received was exceptional. It was thoroughly researched, well-structured, and delivered ahead of schedule. My professor was impressed with the quality of work.",
    author: "Gaurav Deshmukh",
    title: "PhD Student",
  },
  {
    quote: "As a busy professional pursuing my MBA, I needed help with research for my capstone project. The team delivered an outstanding paper that helped me secure an A grade.",
    author: "Subrahmanyam Aiyar",
    title: "Business Professional",
  },
  {
    quote: "I've used ResearchPro for multiple papers throughout my graduate studies. Their consistency and attention to detail have been impressive. I highly recommend their services.",
    author: "Rishabh Pandey",
    title: "Graduate Student",
  },
  {
    quote: "The literature review they prepared for my dissertation was comprehensive and saved me countless hours of research. Worth every penny!",
    author: "Rebecca S.",
    title: "Doctoral Candidate",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students and professionals who have experienced our research and writing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-8">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in">
          <p className="text-2xl font-medium text-gray-800 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have improved their academic and professional success with our research services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
