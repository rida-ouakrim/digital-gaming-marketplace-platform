import React from 'react';
import { Star, ShieldCheck, Clock, ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetails({ product, onBack, onAddToCart }: ProductDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={onBack}
        className="flex items-center text-gaming-muted hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Catalog
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder thumbnails */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-gaming-accent opacity-60 hover:opacity-100 transition-all">
                <img 
                  src={product.image} 
                  alt={`Thumbnail ${i}`} 
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gaming-accent/20 text-gaming-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {product.type}
            </span>
            {product.instantDelivery && (
              <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center">
                <Clock className="h-3 w-3 mr-1" /> Instant Delivery
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>

          <div className="flex items-center mb-6 space-x-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-white font-bold ml-1">{product.rating}</span>
              <span className="text-gaming-muted ml-1">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gaming-muted">
              <ShieldCheck className="h-5 w-5 text-green-500 mr-1" />
              Verified Seller
            </div>
          </div>

          <div className="text-3xl font-bold text-white mb-8">
            ${product.price.toFixed(2)}
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="bg-gaming-card p-6 rounded-xl border border-gray-800 mb-8">
            <h3 className="font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-gaming-accent mr-3 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-gaming-accent hover:bg-gaming-accentHover text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-gaming-accent/20"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className="flex-1 bg-white text-gaming-bg hover:bg-gray-200 py-4 rounded-xl font-bold text-lg transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
