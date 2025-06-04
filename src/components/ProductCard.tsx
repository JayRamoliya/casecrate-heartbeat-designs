
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors text-lg">
              {product.name}
            </h3>
          </Link>
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-all duration-200 ${
              isLiked 
                ? 'text-red-500 bg-red-50 scale-110' 
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50 hover:scale-110'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-xs font-medium">{likes}</span>
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mb-3">
          Compatible with {product.model}
        </p>
        
        <p className="text-xl font-bold text-gray-900 mb-4">
          ₹{(product.price * 83).toLocaleString('en-IN')}
        </p>
        
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
