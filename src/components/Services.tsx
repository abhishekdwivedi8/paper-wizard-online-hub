
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookOpen, FileText, Search } from "lucide-react";

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
          {/* Custom Research Papers (collapsible/accordion style) */}
          <Accordion type="single" collapsible className="fade-in" style={{ animationDelay: `0s` }}>
            <AccordionItem value="custom-research-papers">
              <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="w-full px-0 py-0 border-none bg-transparent text-left flex-col items-center">
                  <CardHeader className="text-center pt-8 w-full">
                    <div className="mx-auto mb-4"><FileText className="h-12 w-12 text-primary" /></div>
                    <CardTitle className="text-2xl">Custom Research Papers</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full text-center">
                    <CardDescription className="text-base">
                      Original, well-researched papers tailored to your specific requirements and academic standards.
                    </CardDescription>
                  </CardContent>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-6 text-gray-700 text-left">
                    <p className="mb-2">
                      <span className="font-semibold text-primary">In-Depth Knowledge:</span> Our team of experts dives deep into your chosen topic, delivering research papers with thorough analysis, credible sources, and original insights.
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold text-primary">Tailored to You:</span> We work closely with you to understand your requirements, ensuring every paper is unique and meets your academic or professional goals.
                    </p>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Custom research design and methodology</li>
                      <li>Comprehensive literature reviews</li>
                      <li>Data analysis & interpretation</li>
                      <li>Full referencing & compliance with formatting standards</li>
                    </ul>
                    <p>
                      Whether you need undergraduate, postgraduate, or doctoral-level work, we deliver unmatched quality and academic integrity—on time, every time.
                    </p>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>

          {/* In-depth Literature Reviews (collapsible/accordion style) */}
          <Accordion type="single" collapsible className="fade-in" style={{ animationDelay: `0.1s` }}>
            <AccordionItem value="literature-reviews">
              <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="w-full px-0 py-0 border-none bg-transparent text-left flex-col items-center">
                  <CardHeader className="text-center pt-8 w-full">
                    <div className="mx-auto mb-4"><Search className="h-12 w-12 text-primary" /></div>
                    <CardTitle className="text-2xl">In-depth Literature Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full text-center">
                    <CardDescription className="text-base">
                      Comprehensive analysis of existing research, identifying gaps and trends in your field of study.
                    </CardDescription>
                  </CardContent>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-6 text-gray-700 text-left">
                    <p className="mb-2">
                      <span className="font-semibold text-primary">Comprehensive Coverage:</span> Our literature reviews critically evaluate existing research, synthesizing diverse sources to provide you with a thorough understanding of your subject.
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold text-primary">Critical Analysis:</span> We not only summarize available literature but also identify gaps, contradictions, and trends in the current body of knowledge.
                    </p>
                    <ul className="list-disc pl-6 mb-2">
                      <li>Identification of research gaps for new insights</li>
                      <li>Analysis of methodologies and theoretical frameworks</li>
                      <li>Annotated bibliographies upon request</li>
                      <li>Structured synthesis tailored to your goals</li>
                    </ul>
                    <p>
                      Let us lay the foundation for your research project with a high-impact literature review that demonstrates depth, rigor, and clarity.
                    </p>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>

          {/* Academic & Professional Writing (static card) */}
          <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 fade-in" style={{ animationDelay: `0.2s` }}>
            <CardHeader className="text-center pt-8">
              <div className="mx-auto mb-4"><BookOpen className="h-12 w-12 text-primary" /></div>
              <CardTitle className="text-2xl">Academic & Professional Writing</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                High-quality writing for theses, dissertations, journal articles, and professional documents.
              </CardDescription>
            </CardContent>
          </Card>
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

