import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
          <span>{product.rating}</span>
          <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;