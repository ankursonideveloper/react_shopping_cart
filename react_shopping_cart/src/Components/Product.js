import React from 'react';
import { useReducer } from 'react';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const initialState = {
  name: 'Product 1',
  image: '📦',
  number: 2,
  price: 23
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increase':
      return { ...state, number: state.number + 1 };
    case 'Decrease':
      if (state.number === 0) {
        return state;
      }
      return { ...state, number: state.number - 1 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const Product = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'Increase' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'Decrease' });
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-5 border border-gray-200">
      <p className="text-xl font-bold text-gray-800 mb-4">{state.name}</p>
      <div className="flex justify-between items-center">
        <span className="text-5xl">{state.image}</span>
        <div className="flex items-center gap-3 text-2xl text-gray-700">
          <CiSquareMinus onClick={handleDecrease} className="cursor-pointer hover:text-red-500 transition-colors" />
          <span className="font-semibold text-lg">{state.number}</span>
          <CiSquarePlus onClick={handleIncrease} className="cursor-pointer hover:text-green-500 transition-colors" />
        </div>
        <span className="text-xl font-medium text-gray-900">${state.price}</span>
      </div>
    </div>
  );
};

export default Product;