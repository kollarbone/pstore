import ProductList from "./pages/Product_list";
import CartProvider from "./contexts/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/productList" element={<ProductList />} />
          <Route path="/productList/*" element={<ProductList />} />
          <Route path="/productList/:id" element={<Product />} />
          <Route path="/p-store" element={<Main />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
