import {BsCart2} from 'react-icons/bs';
import { useContext, useState  } from "react";
import { CartContext } from "../contexts/CartContext";
import CartModal from "./CartModal";
import Navigation from './Navigation';
import {SiAppstore} from "react-icons/si"
import { NavLink } from "react-router-dom";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
    return (
    <div className='flex flex-row max-w-6xl m-auto justify-between items-center'>
      <NavLink to="/pstore">
        <SiAppstore className='text-2xl text-white'/>
      </NavLink>
      <Navigation/>
      <div className="mb-2 flex justify-end items-center cursor-pointer text-white" onClick={()=>setShowCartModal(true)}>
       <BsCart2/> ({cart.length})
      </div>
      {showCartModal && <CartModal handleCloseModal={()=>setShowCartModal(false)} />}
    </div>
    );
  }
  