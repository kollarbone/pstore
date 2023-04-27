import { NavLink } from "react-router-dom";
import banner from "../assets/ecommerce.png";

export default function PostOnline() {
  return (
    <div className="transition-all h-fit flex flex-col justify-around items-center sm:flex-row">
      <div className="transition-all w-fit flex flex-col items-center">
        <p className="m-3 text-2xl text-white">Online Shopping</p>
        <p className="m-2 text-xl text-white">
          Register now and receive our welcome gifts
        </p>
        <NavLink to="productList">
          <button className="m-2 bg-zinc-300 rounded w-fit p-2 hover:bg-zinc-400 hover:text-white hover:border">
            Shop now
          </button>
        </NavLink>
      </div>
      <img
        src={banner}
        alt="electronics"
        className=" h-80 w-fit opacity-70 p-5 sm:h-96"
      />
    </div>
  );
}
