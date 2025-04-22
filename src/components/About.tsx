
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Priya Sharma",
    role: "Research Director",
    bio: "Ph.D. in Literature with 15+ years of academic writing experience. Specializes in humanities and social sciences research.",
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Senior Writer",
    bio: "Former university professor with expertise in scientific research papers, technical writing, and methodology development.",
  },
  {
    name: "Sarah Williams",
    role: "Content Specialist",
    bio: "Master's in English with a background in academic publishing. Expert in formatting, citations, and academic style guides.",
  }
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A team of experienced academics and professional writers dedicated to providing high-quality research papers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1772"
              alt="Professional research team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-semibold">Our Story</h3>
            <p className="text-lg text-gray-700">
              Founded in 2021, ResearchPro was established by a group of academic professionals who recognized the need for quality research assistance in an increasingly demanding educational environment.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to help students and professionals achieve their academic and career goals by providing meticulously researched, well-written papers that meet the highest standards of quality and originality.
            </p>
            <p className="text-lg text-gray-700">
              With a team of over 20 writers holding advanced degrees across various disciplines, we've successfully completed more than 2,000 research papers for clients worldwide.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-10 fade-in">Meet Our Expert Team</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border text-center fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg fade-in">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Quality</h4>
              <p className="text-gray-700">Delivering thoroughly researched and well-written papers that exceed expectations.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Originality</h4>
              <p className="text-gray-700">Creating unique content with proper citations and zero plagiarism.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Timeliness</h4>
              <p className="text-gray-700">Meeting deadlines consistently to ensure client success.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Confidentiality</h4>
              <p className="text-gray-700">Maintaining strict privacy and security for all client information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
