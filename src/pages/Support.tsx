import React from 'react';
import { Mail, MessageSquare, FileQuestion, ChevronDown } from 'lucide-react';

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">How can we help you?</h1>
        <p className="text-gaming-muted text-lg max-w-2xl mx-auto">
          Our support team is available 24/7 to assist you with any issues related to your orders, account, or general inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gaming-card p-8 rounded-xl border border-gray-800 text-center hover:border-gaming-accent transition-colors">
          <div className="bg-gaming-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion className="h-8 w-8 text-gaming-accent" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">FAQ</h3>
          <p className="text-gaming-muted mb-4">Find answers to common questions.</p>
          <button className="text-gaming-accent font-medium hover:underline">View FAQ</button>
        </div>

        <div className="bg-gaming-card p-8 rounded-xl border border-gray-800 text-center hover:border-gaming-accent transition-colors">
          <div className="bg-gaming-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
          <p className="text-gaming-muted mb-4">Chat with our support team in real-time.</p>
          <button className="text-gaming-accent font-medium hover:underline">Start Chat</button>
        </div>

        <div className="bg-gaming-card p-8 rounded-xl border border-gray-800 text-center hover:border-gaming-accent transition-colors">
          <div className="bg-gaming-bg w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
          <p className="text-gaming-muted mb-4">Send us a detailed message.</p>
          <button className="text-gaming-accent font-medium hover:underline">Send Email</button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            "How long does delivery take?",
            "Is it safe to buy accounts here?",
            "What payment methods do you accept?",
            "Can I get a refund?"
          ].map((question, i) => (
            <div key={i} className="bg-gaming-card rounded-lg border border-gray-800 overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors">
                <span className="font-medium text-white">{question}</span>
                <ChevronDown className="h-5 w-5 text-gaming-muted" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
