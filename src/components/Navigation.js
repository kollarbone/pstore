import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex flex-row m-auto">
      <NavLink to="/pstore">
        <p className="mr-3 text-white hover:border-b ">MAIN</p>
      </NavLink>
      <NavLink to="/productList">
        <p className="hover:border-b text-white ">PRODUCTS</p>
      </NavLink>
    </div>
  );
}
