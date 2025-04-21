
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, FileText, Search } from "lucide-react";

const services = [
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Custom Research Papers",
    description:
      "Original, well-researched papers tailored to your specific requirements and academic standards.",
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "In-depth Literature Reviews",
    description:
      "Comprehensive analysis of existing research, identifying gaps and trends in your field of study.",
  },
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Academic & Professional Writing",
    description:
      "High-quality writing for theses, dissertations, journal articles, and professional documents.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive research and writing solutions to help you
            succeed academically and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg fade-in">
            <h3 className="text-2xl font-semibold mb-4">For Students</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Term papers and essays on any subject</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Thesis and dissertation assistance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Research methodology guidance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Citation and formatting help</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-4">For Professionals</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Industry research and white papers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Journal article preparation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Grant proposal writing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>Technical documentation and reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
