import electronics from "../assets/caption.jpg"
import jelewery from "../assets/jelewery.jpg"
import mens from "../assets/mens.jpg"
import womans from "../assets/womans.png"
import { NavLink } from "react-router-dom";

export default function Banner() {
  
    return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 col-auto m-3'>
        <div className="hover:bg-zinc-700 transition-all relative h-fit bg-zinc-400">
            <NavLink to="productList/electronics">
                <img src={electronics} alt="electronics" className="object-cover h-96 w-full opacity-70 " />
                <p className="absolute right-1 bottom-10 p-3 text-3xl text-white font-bold">Electronics</p>
            </NavLink>
        </div>
        <div className="hover:bg-zinc-700 transition-all relative h-fit bg-zinc-400">
            <NavLink to="productList/jewelery">
                <img src={jelewery} alt="electronics" className="object-cover h-96 w-full opacity-70 "/>
                <p className="absolute right-1 bottom-10 p-3 text-3xl text-white font-bold">Jewelery</p>
            </NavLink>
        </div>
        <div className="hover:bg-zinc-700 transition-all relative h-fit bg-zinc-400">
            <NavLink to="productList/mens">
                <img src={mens} alt="electronics" className="object-cover h-96 w-full opacity-70 "/>
                <p className="absolute right-1 bottom-10 p-3 text-3xl text-white font-bold">Men's clothing</p>
            </NavLink>
        </div>
        <div className="hover:bg-zinc-700 transition-all relative h-fit bg-zinc-400">
            <NavLink to="productList/womens">
                <img src={womans} alt="electronics" className="object-cover h-96 w-full opacity-70 "/>
                <p className="absolute right-1 bottom-10 p-3 text-3xl text-white font-bold">Women's clothing</p>
            </NavLink>
        </div>
      </div>
    );
  }
  