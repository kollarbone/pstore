import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ForYouProducts from "../components/ForYouProducts";
import Footer from "../components/Footer";

export default function Product() {
  const { products, addToCart } = useContext(CartContext);
  const id = useParams().id;
  const data = products[id];

  return (
    <>
      <div className="bg-zinc-400 p-2 fixed top-0 left-0 w-full ">
        <Header />
      </div>
      {data ? (
        <div className="flex max-w-6xl m-auto flex-col mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-20">
            <div className="w-1/3 m-5">
              <img src={`${data.image}`} alt="img" />
            </div>
            <div className="sm:w-1/2 bg-zinc-300 p-10 rounded w-full flex flex-col justify-between">
              <p className="font-medium text-2xl mb-10">{data.title}</p>
              <p className="font-medium text-xl mb-10">{data.description}</p>
              <div>
                <p className="font-medium text-xl mb-10">
                  Rating: {data.rating.rate} ({data.rating.count} reviews)
                </p>
              </div>
              <div className="flex flex-row items-center">
                <button
                  className="bg-zinc-400 text-white rounded w-full p-2 mt-auto ml-auto flex justify-center  hover:bg-zinc-400 hover:bg-inherit"
                  onClick={() => addToCart(data)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <ForYouProducts />
        </div>
      ) : (
        <p>Not found</p>
      )}
      <Footer />
    </>
  );
}
