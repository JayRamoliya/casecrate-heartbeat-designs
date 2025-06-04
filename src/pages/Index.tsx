
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Shield, Truck, Palette, Star } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Premium iPhone Cases for Every Style
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Discover our collection of high-quality cases designed to protect your iPhone while expressing your unique style. Perfect for individuals and bulk orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/shop" 
                  className="btn-secondary text-center"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/order" 
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 text-center"
                >
                  Bulk Orders
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1601593346740-925612772716?w=600&h=600&fit=crop"
                  alt="Premium iPhone Case"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Handpicked selection of our most popular iPhone cases, loved by thousands of customers worldwide.
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
              className="btn-primary inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose CaseCrate?</h2>
            <p className="text-xl text-gray-600">
              We're committed to delivering the best protection and style for your iPhone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Shield className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Durable Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Military-grade protection tested to withstand drops up to 10 feet.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Palette className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Designs</h3>
              <p className="text-gray-600 leading-relaxed">
                Wide variety of colors, materials, and custom printing options available.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Truck className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Bulk Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Complimentary shipping on bulk orders over 50 units.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Star className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3">5-Star Rated</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by thousands with consistently excellent reviews.
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
