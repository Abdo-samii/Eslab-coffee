import React from 'react';

const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center">
      <img src={image} alt={title} className="w-1/3 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <p className="mt-2 text-red-700 font-bold">{price}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 bg-red-700 text-white py-2 px-4 rounded-full w-full">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
