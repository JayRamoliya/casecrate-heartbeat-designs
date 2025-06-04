
import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, Product } from '../data/products';
import { Filter, Crown } from 'lucide-react';

const Shop = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique filter options
  const models = [...new Set(products.map(p => p.model))].sort();
  const colors = [...new Set(products.map(p => p.color))].sort();
  const materials = [...new Set(products.map(p => p.material))].sort();

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return (
        (selectedModel === '' || product.model === selectedModel) &&
        (selectedColor === '' || product.color === selectedColor) &&
        (selectedMaterial === '' || product.material === selectedMaterial)
      );
    });
  }, [selectedModel, selectedColor, selectedMaterial]);

  const clearFilters = () => {
    setSelectedModel('');
    setSelectedColor('');
    setSelectedMaterial('');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Crown className="text-amber-500" size={36} />
            <span className="text-amber-500 font-bold text-xl">PREMIUM COLLECTION</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold luxury-text mb-6">Shop Premium Cases</h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">Discover our complete collection of luxury iPhone cases crafted for excellence</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="premium-card p-8">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="text-xl font-bold text-blue-900">Premium Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-3 text-blue-700 hover:text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Filter size={24} />
                </button>
              </div>
              
              <div className={`space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <h3 className="text-xl font-bold text-blue-900 hidden lg:block">Premium Filters</h3>
                
                {/* iPhone Model Filter */}
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-4">
                    iPhone Model
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-blue-900 font-medium"
                  >
                    <option value="">All Models</option>
                    {models.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>

                {/* Color Filter */}
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-4">
                    Color
                  </label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-blue-900 font-medium"
                  >
                    <option value="">All Colors</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                {/* Material Filter */}
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-4">
                    Material
                  </label>
                  <select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-blue-900 font-medium"
                  >
                    <option value="">All Materials</option>
                    {materials.map(material => (
                      <option key={material} value={material}>{material}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                {(selectedModel || selectedColor || selectedMaterial) && (
                  <button
                    onClick={clearFilters}
                    className="w-full btn-secondary"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-8 flex justify-between items-center">
              <p className="text-slate-600 text-xl font-medium">
                Showing {filteredProducts.length} of {products.length} premium products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 premium-card">
                <Crown className="text-amber-500 mx-auto mb-6" size={64} />
                <p className="text-slate-600 text-2xl mb-6 font-medium">No premium products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
