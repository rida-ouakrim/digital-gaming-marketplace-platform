import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface CatalogProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ products, onViewDetails, onAddToCart }: CatalogProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Type
    if (selectedType !== 'All') {
      result = result.filter(p => p.type === selectedType);
    }

    // Filter by Price
    if (priceRange === 'under-50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50-100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over-100') {
      result = result.filter(p => p.price > 100);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    // Default 'popular' uses original order or could use reviews count

    return result;
  }, [products, selectedType, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Marketplace Catalog</h1>
          <p className="text-gaming-muted">Browse thousands of digital items and services.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gaming-card p-6 rounded-xl border border-gray-800">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-gaming-accent mr-2" />
              <h3 className="font-bold text-white">Filters</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Category</h4>
              <div className="space-y-2">
                {['All', 'Account', 'Currency', 'Item', 'Service'].map((type) => (
                  <label key={type} className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="type" 
                      checked={selectedType === type}
                      onChange={() => setSelectedType(type)}
                      className="form-radio text-gaming-accent focus:ring-gaming-accent bg-gray-700 border-gray-600"
                    />
                    <span className={`ml-2 text-sm ${selectedType === type ? 'text-white' : 'text-gaming-muted group-hover:text-gray-300'}`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Price Range</h4>
              <div className="space-y-2">
                {[
                  { id: 'all', label: 'All Prices' },
                  { id: 'under-50', label: 'Under $50' },
                  { id: '50-100', label: '$50 - $100' },
                  { id: 'over-100', label: 'Over $100' },
                ].map((range) => (
                  <label key={range.id} className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="price" 
                      checked={priceRange === range.id}
                      onChange={() => setPriceRange(range.id)}
                      className="form-radio text-gaming-accent focus:ring-gaming-accent bg-gray-700 border-gray-600"
                    />
                    <span className={`ml-2 text-sm ${priceRange === range.id ? 'text-white' : 'text-gaming-muted group-hover:text-gray-300'}`}>
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {/* Sort Bar */}
          <div className="bg-gaming-card p-4 rounded-xl border border-gray-800 mb-6 flex justify-between items-center">
            <span className="text-sm text-gaming-muted">Showing {filteredProducts.length} results</span>
            <div className="flex items-center">
              <SlidersHorizontal className="h-4 w-4 text-gaming-muted mr-2" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gaming-bg text-white text-sm rounded-lg border-gray-700 focus:ring-gaming-accent focus:border-gaming-accent p-2"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewDetails={onViewDetails}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gaming-muted text-lg">No products found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedType('All');
                  setPriceRange('all');
                }}
                className="mt-4 text-gaming-accent hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
