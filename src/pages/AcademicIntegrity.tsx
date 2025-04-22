
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AcademicIntegrity = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Academic Integrity Policy</h1>
            <div className="space-y-6 text-gray-600">
              <p>Last updated: April 22, 2025</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">1. Our Commitment</h2>
                <p>ResearchPro is committed to maintaining high standards of academic integrity. Our services are designed to assist in research and learning, not to encourage academic dishonesty.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">2. Proper Use of Services</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our materials as research and reference sources</li>
                  <li>Properly cite any materials used in your work</li>
                  <li>Never submit our work as your own</li>
                  <li>Follow your institution's academic integrity guidelines</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">3. Consequences</h2>
                <p>Violation of academic integrity policies may result in service termination and reporting to relevant academic institutions.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicIntegrity;
