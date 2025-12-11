import React from 'react';
import { ShoppingCart, Search, Menu, X, Gamepad2 } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ cartCount, onCartClick, onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'support', label: 'Support' },
  ];

  return (
    <nav className="bg-gaming-bg/95 backdrop-blur-sm border-b border-gaming-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <Gamepad2 className="h-8 w-8 text-gaming-accent group-hover:text-gaming-accentHover transition-colors" />
            <span className="ml-2 text-xl font-bold tracking-wider text-white">NEXUS<span className="text-gaming-accent">MARKET</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    currentPage === item.id
                      ? 'text-gaming-accent'
                      : 'text-gaming-muted hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gaming-card text-sm text-white rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-gaming-accent w-64 border border-transparent focus:border-transparent transition-all"
              />
              <Search className="h-4 w-4 text-gaming-muted absolute left-3 top-2" />
            </div>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gaming-muted hover:text-white transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-gaming-accent rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="bg-gaming-accent hover:bg-gaming-accentHover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gaming-muted hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gaming-card border-b border-gaming-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-gaming-muted hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              className="text-gaming-muted hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
