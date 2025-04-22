
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="space-y-6 text-gray-600">
              <p>Last updated: April 22, 2025</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Academic details (institution, course, subject area)</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment information</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our research services</li>
                  <li>Process your payments</li>
                  <li>Communicate with you about your orders</li>
                  <li>Send you updates and marketing communications (with your consent)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">3. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
