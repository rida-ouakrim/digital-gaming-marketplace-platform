import React from 'react';
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export default function Cart({ items, onRemove, onUpdateQuantity, onCheckout }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = subtotal * 0.05; // 5% fee
  const total = subtotal + serviceFee;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gaming-card p-12 rounded-2xl border border-gray-800 inline-block max-w-md w-full">
          <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gaming-muted mb-8">Looks like you haven't added any epic loot yet.</p>
          <button 
            onClick={() => window.location.reload()} // Simple reload to go home in this SPA context, or handled by parent
            className="bg-gaming-accent hover:bg-gaming-accentHover text-white px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-gaming-card p-4 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-center gap-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-gaming-muted">{item.type}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gaming-bg rounded-lg border border-gray-700">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="px-3 py-1 text-gray-400 hover:text-white"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-2 text-white font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="px-3 py-1 text-gray-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
                
                <div className="text-right min-w-[80px]">
                  <div className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
                </div>

                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-400 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gaming-card p-6 rounded-xl border border-gray-800 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gaming-muted">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gaming-muted">
                <span>Service Fee (5%)</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full bg-gaming-accent hover:bg-gaming-accentHover text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center mb-4"
            >
              Checkout <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <div className="flex items-center justify-center text-xs text-gaming-muted">
              <ShieldCheck className="h-4 w-4 mr-1 text-green-500" />
              Secure 256-bit SSL Encrypted Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
