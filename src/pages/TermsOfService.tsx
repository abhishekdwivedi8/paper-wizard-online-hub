
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="space-y-6 text-gray-600">
              <p>Last updated: April 22, 2025</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">1. Service Overview</h2>
                <p>ResearchPro provides research and writing assistance services to students and professionals. By using our services, you agree to these terms and conditions.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">2. User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services for reference and learning purposes only</li>
                  <li>Maintain confidentiality of your account information</li>
                  <li>Comply with all applicable academic integrity policies</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">3. Payment Terms</h2>
                <p>All payments are processed securely. Prices are subject to change. Refunds are available according to our refund policy.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
