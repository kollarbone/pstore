import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import ProductCard from "./Product_card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ForYouProducts() {
  const { products } = useContext(CartContext);
  let productsForYou = [];
  while (productsForYou.length < 8) {
    let rand = products[Math.floor(Math.random() * products.length)];
    if (!productsForYou.find((rnd) => rnd === rand)) {
      productsForYou.push(rand);
    }
  }

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <p className="p-3 text-2xl text-zinc-700">Products For You</p>
      <div className="m-3">
        <div className="flex gap-4">
          <button
            title="scroll left"
            className=" bg-zinc-300 flex text-white hover:text-zinc-400 items-center justify-center rounded h-10 w-10 hover:bg-white hover:border-zinc-400 hover:border"
            onClick={slideLeft}
          >
            <BsChevronLeft />
          </button>
          <button
            title="scroll right"
            className="bg-zinc-300 rounded  text-white hover:text-zinc-400 h-10 flex items-center justify-center w-10 hover:bg-white hover:border-zinc-400 hover:border"
            onClick={slideRight}
          >
            <BsChevronRight />
          </button>
        </div>
        <div
          id="slider"
          className="scroll-container overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth relative grid grid-flow-col gap-5  m-3"
        >
          {productsForYou.map((item, key) => (
            <div className="w-52 overflow-hidden">
              <ProductCard key={key} data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
