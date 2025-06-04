
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, Crown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="text-white" size={20} />
              </div>
              <div>
                <span className="text-2xl font-bold">CaseCrate</span>
                <span className="text-amber-400 text-sm font-medium ml-2">PREMIUM</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Premium iPhone cases crafted for discerning customers who value style, protection, and exclusivity. Experience luxury in every detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={24} />
              </a>
              <a href="mailto:hello@casecrate.com" className="text-blue-200 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/shop" className="block text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Shop</Link>
              <Link to="/order" className="block text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Bulk Orders</Link>
              <Link to="/about" className="block text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">About Us</Link>
              <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300">
                <Mail size={18} className="text-amber-400" />
                <span>hello@casecrate.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300">
                <Phone size={18} className="text-amber-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-300">
                <MapPin size={18} className="text-amber-400" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; 2024 CaseCrate Premium. All rights reserved. | Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
