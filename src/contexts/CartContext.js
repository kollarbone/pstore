import React, { useState, useEffect } from "react";
import axios from "axios";
export const CartContext = React.createContext({
  cart: [],
  addToCart: () => {},
  updateCartItemQuantity: () => {},
  deleteCart: () => {},
  products: [],
  categories: [],
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  async function fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchCategories() {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategories(response.data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const updateCartItemQuantity = (id, updatedQuantity) => {
    const newQually = cart.find((product) => product.id === id);
    newQually.quantity = updatedQuantity;
  };
  const deleteCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItemQuantity,
        deleteCart,
        products,
        categories,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
