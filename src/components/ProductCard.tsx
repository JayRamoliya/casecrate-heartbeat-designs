
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  model: string;
  color: string;
  material: string;
}

interface ProductCardProps {
  product: Product;
  showOrderButton?: boolean;
}

const ProductCard = ({ product, showOrderButton = true }: ProductCardProps) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Load likes from localStorage
    const savedLikes = localStorage.getItem(`likes_${product.id}`);
    const userLiked = localStorage.getItem(`user_liked_${product.id}`);
    
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
    if (userLiked === 'true') {
      setIsLiked(true);
    }
  }, [product.id]);

  const handleLike = () => {
    if (!isLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setIsLiked(true);
      localStorage.setItem(`likes_${product.id}`, newLikes.toString());
      localStorage.setItem(`user_liked_${product.id}`, 'true');
    }
  };

  return (
    <div className="premium-card overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            PREMIUM
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-slate-800 hover:text-blue-700 transition-colors text-lg luxury-text">
              {product.name}
            </h3>
          </Link>
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 ${
              isLiked 
                ? 'text-red-500 bg-red-50 scale-110 shadow-md' 
                : 'text-slate-400 hover:text-red-500 hover:bg-red-50 hover:scale-110 hover:shadow-md'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-sm font-medium">{likes}</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-current" />
          ))}
          <span className="text-sm text-slate-600 ml-2">4.9 Rating</span>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 font-medium">
          Compatible with {product.model}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-bold text-blue-800">
            ₹{(product.price * 83).toLocaleString('en-IN')}
          </p>
          <span className="text-sm text-slate-500 line-through">
            ₹{(product.price * 83 * 1.3).toLocaleString('en-IN')}
          </span>
        </div>
        
        {showOrderButton && (
          <Link 
            to={`/order?product=${product.id}`}
            className="w-full btn-primary text-center block"
          >
            Order Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
