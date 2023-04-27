
import { CartContext } from "../contexts/CartContext";
import Header from "../components/Header";
import { useState, useContext, useEffect } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export default function Product_list() {
    const path = window.location.pathname;
    const [selectedBrands, setSelectedBrands] = useState([]);
    const { products, categories } = useContext(CartContext);
    useEffect(() => {
      if (path === "/productList/electronics") {
        setSelectedBrands(["electronics"])
      } else if (path === "/productList/jewelery") {
        setSelectedBrands(["jewelery"])
      } else if (path === "/productList/mens") {
        setSelectedBrands(["men's clothing"])
      } else if (path === "/productList/womens") {
        setSelectedBrands(["women's clothing"])
      }
    }, [path]);
   
    const handleBrandChange = (event) => {
      const brandName = event.target.value;
      const selectedBrand = categories && categories.find((brand) => brand === brandName);
      
      if (event.target.checked) { 
        setSelectedBrands([...selectedBrands, selectedBrand]);
      } else { 
        setSelectedBrands(selectedBrands.filter((b) => b !== brandName));
      } 
    } 
    const filteredProducts = selectedBrands.length
      ?  products.filter((product) => selectedBrands.some((b) => b === product.category)) 
      : products;
      
  return (
  <>
    <div className="bg-zinc-400 p-2 fixed top-0 left-0 w-full ">
      <Header/>
    </div>
    <div className="flex  max-w-6xl m-auto flex-col mt-14 min-h-screen">
      <div className="p-3 border-r flex  flex-row flex-wrap justify-center ">
        {categories.map((item, index)=> 
          <div className="flex flex-row w-fit mb-2 border rounded m-2" key={index} >
            <p className="w-max pl-1 m-1">{item}</p>
            <input type="checkbox" className="m-2" value={item}
                   checked={selectedBrands.some(
                    (b) => b === item
                  )}
                  onChange={handleBrandChange}
                  ></input>
          </div>
         )}
      </div>

        <Pagination data={filteredProducts?filteredProducts:products}/>
      
    </div>
    <Footer/>
  </>
  );
}
