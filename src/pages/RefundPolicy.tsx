
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
            <div className="space-y-6 text-gray-600">
              <p>Last updated: April 22, 2025</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">1. Refund Eligibility</h2>
                <p>We offer refunds under the following conditions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Missed deadlines by our team</li>
                  <li>Significant quality issues</li>
                  <li>Service cancellation before work begins</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">2. Refund Process</h2>
                <p>Refund requests must be submitted within 7 days of service delivery. We process approved refunds within 5-10 business days.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">3. Non-Refundable Cases</h2>
                <p>Refunds are not available for completed work that meets the specified requirements or when cancellation occurs after significant work has been completed.</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RefundPolicy;
