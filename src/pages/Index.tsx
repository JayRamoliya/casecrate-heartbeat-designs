
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Shield, Truck, Palette, Star, Crown, Award } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative luxury-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="text-amber-400" size={24} />
                <span className="text-amber-400 font-bold text-sm">PREMIUM COLLECTION</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                Luxury iPhone Cases for the Elite
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                Experience unparalleled protection and sophistication with our handcrafted premium cases. Designed for those who demand excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/shop" 
                  className="btn-secondary text-center px-6 py-3"
                >
                  Explore Collection
                </Link>
                <Link 
                  to="/order" 
                  className="border-2 border-amber-400 text-amber-400 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 hover:text-blue-900 transition-all duration-300 text-center transform hover:scale-105"
                >
                  Premium Orders
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1601593346740-925612772716?w=600&h=600&fit=crop"
                  alt="Premium iPhone Case"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ Best Seller
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="text-amber-500" size={28} />
              <span className="text-amber-500 font-bold text-sm">FEATURED COLLECTION</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold luxury-text mb-4">Premium Products</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meticulously crafted cases that combine cutting-edge protection with timeless elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/shop" 
              className="btn-primary inline-block px-8 py-3"
            >
              View Premium Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 premium-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Why Choose CaseCrate Premium?</h2>
            <p className="text-lg text-blue-800 max-w-3xl mx-auto">
              We deliver uncompromising quality and luxury in every product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Military Protection</h3>
              <p className="text-blue-700 leading-relaxed text-sm">
                Premium-grade protection tested to withstand extreme conditions and impacts.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Bespoke Designs</h3>
              <p className="text-blue-700 leading-relaxed text-sm">
                Exclusive materials and custom craftsmanship for discerning customers.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Truck className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Premium Delivery</h3>
              <p className="text-blue-700 leading-relaxed text-sm">
                White-glove delivery service and complimentary premium packaging.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Crown className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Elite Status</h3>
              <p className="text-blue-700 leading-relaxed text-sm">
                Join thousands of premium customers who trust CaseCrate for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
