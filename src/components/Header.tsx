
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl sticky top-0 z-50 border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-white">CaseCrate</span>
            <span className="text-xs text-amber-400 font-medium hidden sm:block">PREMIUM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/') ? 'text-amber-400' : 'text-blue-100 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/shop') ? 'text-amber-400' : 'text-blue-100 hover:text-white'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/order" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/order') ? 'text-amber-400' : 'text-blue-100 hover:text-white'
              }`}
            >
              Order
            </Link>
            <Link 
              to="/about" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/about') ? 'text-amber-400' : 'text-blue-100 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isActive('/contact') ? 'text-amber-400' : 'text-blue-100 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-blue-700/50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/') ? 'text-amber-400 bg-blue-800/50' : 'text-blue-100 hover:text-white hover:bg-blue-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/shop') ? 'text-amber-400 bg-blue-800/50' : 'text-blue-100 hover:text-white hover:bg-blue-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/order" 
                className={`px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/order') ? 'text-amber-400 bg-blue-800/50' : 'text-blue-100 hover:text-white hover:bg-blue-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Order
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/about') ? 'text-amber-400 bg-blue-800/50' : 'text-blue-100 hover:text-white hover:bg-blue-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  isActive('/contact') ? 'text-amber-400 bg-blue-800/50' : 'text-blue-100 hover:text-white hover:bg-blue-800/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
