import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyItem, decBalance, incBalance, sellItem } from "../redux/productSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const currentBalance = useSelector((state) => state.products.balance);
  const basket = useSelector((state) => state.products.basket);
  const [qty, setQty] = useState(1);
  const { name, price } = product;


  const handleBuy = () => {
    setQty(qty + 1);

    dispatch(buyItem({ name, price, qty }));
    dispatch(decBalance(price));
  };

  const handleSell = () => {
    if(qty > 1) {
      setQty(qty - 1)
      dispatch(sellItem({ name, price, qty }))
      dispatch(incBalance(price))
    }
    

    
  }

  return (
    <div className="gap-2 shadow-md p-16">
      <img
        src={product.img}
        alt={product.name}
        className="w-52 h-52 object-cover mx-auto"
      />
      <h1 className="text-center pt-2">{product.name}</h1>
      <p className="text-center text-teal-600">${product.price}</p>
      <div className="flex flex-wrap gap-10 justify-around mt-2">
        <button
          className={`bg-gray-400 px-4 py-2 rounded-md ${basket.length === 0 ? 'bg-gray-100': ''}`}
          disabled={basket.length === 0}
          onClick={() => handleSell()}
        >
          SELL
        </button>
        <input
          className="w-20 text-center"
          type="number"
          value={qty - 1}
          onChange={(e) => setQty(e.target.value)}
        />
        <button
          className={`bg-teal-400 px-4 py-2 rounded-md ${((currentBalance - product.price) < 0) ? 'bg-teal-100' : ''}`}
          disabled={(currentBalance - product.price) < 0}
          onClick={() => handleBuy()}
        >
          BUY
        </button>
      </div>
    </div>
  );
}

export default Product;
