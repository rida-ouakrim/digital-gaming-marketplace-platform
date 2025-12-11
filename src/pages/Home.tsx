import React from 'react';
import { Shield, Zap, Headset, ArrowRight, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  featuredProducts: Product[];
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string) => void;
}

export default function Home({ featuredProducts, onViewDetails, onAddToCart, onNavigate }: HomeProps) {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Gaming Setup" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-bg via-gaming-bg/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-bg via-gaming-bg/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Level Up Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gaming-accent to-purple-500">
                Digital Arsenal
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gaming-muted mb-8 leading-relaxed">
              The most secure marketplace for premium gaming accounts, rare items, and professional boosting services. Instant delivery guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-gaming-accent hover:bg-gaming-accentHover text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Browse Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-gaming-card hover:bg-gray-700 text-white border border-gray-700 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                Sell Your Items
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-gaming-muted">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100k+ Users</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Verified Sellers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gaming-card p-8 rounded-2xl border border-gray-800 hover:border-gaming-accent/50 transition-colors">
            <div className="bg-blue-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-gaming-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Secure Transactions</h3>
            <p className="text-gaming-muted">
              Every purchase is protected by our escrow system. Sellers only get paid when you confirm receipt.
            </p>
          </div>
          <div className="bg-gaming-card p-8 rounded-2xl border border-gray-800 hover:border-gaming-accent/50 transition-colors">
            <div className="bg-purple-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Delivery</h3>
            <p className="text-gaming-muted">
              Automated systems ensure you receive your accounts and keys seconds after payment.
            </p>
          </div>
          <div className="bg-gaming-card p-8 rounded-2xl border border-gray-800 hover:border-gaming-accent/50 transition-colors">
            <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Headset className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
            <p className="text-gaming-muted">
              Our dedicated team of gamers is always online to help you with any issues or questions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Trending Offers</h2>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-gaming-accent hover:text-gaming-accentHover font-medium flex items-center"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
