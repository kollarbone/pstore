import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function Product_card(props) {
  const { addToCart } = useContext(CartContext);
  const data = props.data;
  return (
    <>
      {data ? (
        <>
          <div className="flex flex-col items-center rounded border border-zinc-300 hover:border-zinc-400">
            <NavLink to={`/productList/${data.id}`} data={data}>
              <img
                src={`${data.image}`}
                alt={data.title}
                className="object-cover h-48"
              />
            </NavLink>
            <p className="pl-1 text-ellipsis overflow-hidden h-6">
              {data.title}
            </p>

            <div className="flex flex-row items-center w-full justify-around mt-3">
              <p className="w-fit pl-2 whitespace-nowrap">{data.price} $</p>
              <button
                className="bg-zinc-300 rounded w-1/2 p-2 mt-auto ml-auto flex justify-center  hover:bg-zinc-400 hover:bg-inherit"
                onClick={() => addToCart(data)}
              >
                <BsCart2 />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}
