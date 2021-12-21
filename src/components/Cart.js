import React from "react";

import { useSelector } from "react-redux";

function Cart() {
  const basket = useSelector((state) => state.products.basket);

  let total = basket.reduce((prev, curr) => prev + curr.price * curr.qty,0)


  return (
    <div className="text-center shadow-md mt-2 p-8">
      <h1 className="font-bold text-xl">Your Receipt</h1>
      {basket.length > 0 &&
        basket.map((item, i) => (
          <div className="flex items-center justify-center gap-4 mt-4" key={i}>
            <p className="">{item.name}</p>
            <p>x{item.qty}</p>
            <p className="text-teal-600 ml-4">${item.price * item.qty}</p>
          </div>
        ))}

      {/* <div className="flex items-center justify-center gap-4 mt-4">
          <p className="">Make a Movie</p>
          <p>x2</p>
          <p className="text-teal-600 ml-4">$200m</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <p className="">Make a Movie</p>
          <p>x2</p>
          <p className="text-teal-600 ml-4">$200m</p>
        </div> */}
      <hr className="text-black bg-black text-center" />
      <div className="flex text-center justify-center">
        <h1 className="font-bold">TOTAL</h1>
        <p className="ml-16 text-teal-600">${total.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Cart;
