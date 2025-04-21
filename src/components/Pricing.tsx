
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    price: "$12",
    unit: "per page",
    description: "For standard research papers and essays",
    features: [
      "5-7 day delivery",
      "Basic research sources",
      "2 rounds of revisions",
      "Standard formatting",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$20",
    unit: "per page",
    description: "For in-depth academic papers",
    features: [
      "3-5 day delivery",
      "Advanced research sources",
      "Unlimited revisions",
      "Plagiarism report included",
      "Expert writers in your field",
    ],
    buttonText: "Most Popular",
    popular: true,
  },
  {
    name: "Professional",
    price: "$35",
    unit: "per page",
    description: "For complex professional documents",
    features: [
      "1-3 day delivery",
      "Premium research sources",
      "Unlimited revisions",
      "Plagiarism report included",
      "PhD level writers",
      "Dedicated account manager",
    ],
    buttonText: "Get Started",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pricing is based on the complexity and urgency of your project.
            All prices include thorough research and original writing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 transition-all duration-300 fade-in ${
                plan.popular
                  ? "border-primary shadow-lg relative"
                  : "hover:border-primary hover:shadow-lg"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.unit}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "" : "bg-white text-primary hover:bg-primary hover:text-white border-primary"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href="#contact">{plan.buttonText}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center fade-in">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Need a custom quote for a larger project? 
            <a href="#contact" className="text-primary font-medium hover:underline ml-1">
              Contact us
            </a> for a personalized proposal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
