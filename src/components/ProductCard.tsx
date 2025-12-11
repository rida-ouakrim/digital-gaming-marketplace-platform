import React from 'react';
import { Star, Zap, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-gaming-card rounded-xl overflow-hidden border border-gray-800 hover:border-gaming-accent transition-all duration-300 group shadow-lg hover:shadow-gaming-accent/10 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-gray-700">
          {product.type}
        </div>
        {product.instantDelivery && (
          <div className="absolute top-2 left-2 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center">
            <Zap className="h-3 w-3 mr-1 fill-current" />
            Instant
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm text-gaming-muted ml-1">{product.rating} ({product.reviews})</span>
        </div>
        
        <h3 
          className="text-lg font-bold text-white mb-2 line-clamp-2 cursor-pointer hover:text-gaming-accent transition-colors"
          onClick={() => onViewDetails(product)}
        >
          {product.title}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-gaming-accent hover:bg-gaming-accentHover text-white p-2 rounded-lg transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
