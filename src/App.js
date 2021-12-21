import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  const products = useSelector((state) => state.products.items);
  const currentBalance = useSelector((state) => state.products.balance)
  

  return (
    <div className="container mx-auto">
      {/* Bölüm 1 */}

      <div className="p-4 text-center shadow-md">
        <img
          src="https://neal.fun/spend/billgates.jpg"
          alt="bill"
          className="mx-auto w-52 h-52 rounded-full object-cover"
        />
        <h1 className="text-2xl mt-2 text-black font-bold">
          Spend Bill Gates' Money
        </h1>
      </div>
      {/* Bölüm 2 */}

      <div className={`bg-teal-400 p-4 text-center shadow-md mt-4 ${currentBalance === 0 ? 'bg-red-600' : ''}`}>
        <h1 className="mt-2 text-2xl text-white font-bold">${currentBalance.toLocaleString()}</h1>
      </div>

      {/*  Bölüm 3 */}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {/* Bölüm 3 (your receipt) */}
      <Cart />
    </div>
  );
}

export default App;
