import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, ShieldCheck, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gaming-card border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">NEXUS<span className="text-gaming-accent">MARKET</span></h3>
            <p className="text-gaming-muted text-sm leading-relaxed">
              The premier destination for digital gaming assets. Secure, fast, and reliable service for gamers worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gaming-muted">
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Catalog</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Sell with Us</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gaming-muted">
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gaming-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gaming-muted hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gaming-muted hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gaming-muted hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gaming-muted hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
            <div className="flex items-center text-gaming-muted text-sm">
              <Mail className="h-4 w-4 mr-2" />
              support@nexusmarket.com
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gaming-muted text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2025 Nexus Market. All rights reserved. Not affiliated with any game developers.
          </p>
          <div className="flex items-center space-x-4 text-gaming-muted">
            <div className="flex items-center text-xs">
              <ShieldCheck className="h-4 w-4 mr-1 text-green-500" />
              SSL Secure
            </div>
            <div className="flex items-center text-xs">
              <CreditCard className="h-4 w-4 mr-1" />
              Verified Payments
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
