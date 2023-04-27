import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import ProductCard from "./Product_card"

export default function BestSellers() {
    const { products } = useContext(CartContext);

    return (
    <>
        <p className="p-3 text-2xl text-zinc-700">Best Sellers</p>
            <div className='grid grid-cols-2 gap-5 sm:grid-cols-4 col-auto m-3'>
            {products.map((item, key) => (
                item.rating.rate >= 4 &&
                <ProductCard key={key} data={item} />
            ))}
            </div>
    </>);
  }
  