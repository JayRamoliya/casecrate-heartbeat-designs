
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-colors ${
              isLiked 
                ? 'text-red-500 bg-red-50' 
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span className="text-xs font-medium">{likes}</span>
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mb-2">
          Compatible with {product.model}
        </p>
        
        <p className="text-lg font-bold text-gray-900 mb-3">
          ${product.price}
        </p>
        
        {showOrderButton && (
          <Link 
            to={`/order?product=${product.id}`}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
          >
            Order Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
