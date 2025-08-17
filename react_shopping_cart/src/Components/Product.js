import React from 'react';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const Product = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-5 border border-gray-200">
      <p className="text-xl font-bold text-gray-800 mb-4">{product.name}</p>
      <div className="flex justify-between items-center">
        <span className="text-5xl">{product.image}</span>
        <div className="flex items-center gap-3 text-2xl text-gray-700">
          <CiSquareMinus className="cursor-pointer hover:text-red-500 transition-colors" />
          <span className="font-semibold text-lg">{product.number}</span>
          <CiSquarePlus className="cursor-pointer hover:text-green-500 transition-colors" />
        </div>
        <span className="text-xl font-medium text-gray-900">{product.price}</span>
      </div>
    </div>
  )
}

export default Product;