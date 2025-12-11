import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Support from './pages/Support';
import { products } from './data/mockData';
import { Product, CartItem } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Show toast notification
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    alert('Processing checkout... (Demo)');
    setCart([]);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            featuredProducts={products} 
            onViewDetails={handleViewDetails}
            onAddToCart={addToCart}
            onNavigate={handleNavigate}
          />
        );
      case 'catalog':
        return (
          <Catalog 
            products={products} 
            onViewDetails={handleViewDetails}
            onAddToCart={addToCart}
          />
        );
      case 'product-details':
        return selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setCurrentPage('catalog')}
            onAddToCart={addToCart}
          />
        ) : <Catalog products={products} onViewDetails={handleViewDetails} onAddToCart={addToCart} />;
      case 'cart':
        return (
          <Cart 
            items={cart} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        );
      case 'support':
        return <Support />;
      default:
        return <Home featuredProducts={products} onViewDetails={handleViewDetails} onAddToCart={addToCart} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gaming-bg text-gaming-text font-sans">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => handleNavigate('cart')}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
