import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Form from "./Form";

export default function CartModal(props) {
  const { cart, updateCartItemQuantity } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cart.reduce(
      (acc, product) => ({ ...acc, [product.id]: product.quantity || 1 }),
      {}
    )
  );
  const subtotal = cart.map((item) => {
    return item.price * (item.quantity ? item.quantity : 1);
  });
  const total = subtotal.reduce((a, v) => (a = a + v), 0);

  const handleQuantityChange = (product, quantity) => {
    const updatedQuantity = product.quantity
      ? Math.max(product.quantity + quantity, 1)
      : Math.max(1 + quantity, 1);
    setQuantities({ ...quantities, [product]: updatedQuantity });
    updateCartItemQuantity(product.id, updatedQuantity);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-zinc-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg h-3/4 w-3/4 overflow-y-scroll">
        <div className="flex flex-row justify-between items-center mb-3">
          <h2 className="text-lg font-bold ">Cart ({cart.length})</h2>
          <button
            onClick={props.handleCloseModal}
            className="bg-orange-400 text-white rounded py-1 px-3"
          >
            Close
          </button>
        </div>
        {cart.length > 0 ? (
          cart.map((product, key) => (
            <div className="flex flex-row justify-evenly border m-2" key={key}>
              <div key={product.id} className=" p-2 mb-2 w-fit">
                <img
                  src={`${product.image}`}
                  alt={product.title}
                  className="w-52"
                />
                <h3 className="text-md font-bold">{product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center">
                  <button
                    onClick={() => handleQuantityChange(product, -1)}
                    className="m-2"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="m-2">
                    {product.quantity ? product.quantity : 1}
                  </span>
                  <button
                    className="m-2"
                    onClick={() => handleQuantityChange(product, 1)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="m-2">
                  <p>Total:</p>
                  <p>
                    {(
                      product.price * (product.quantity ? product.quantity : 1)
                    ).toFixed(2)}{" "}
                    $
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
        {cart.length > 0 && (
          <>
            <div className="flex flex-row justify-between p-3">
              <p>Total:</p>
              <p>{total.toFixed(2)} $</p>
            </div>
            <Form data={cart} total={total.toFixed(2)} />
          </>
        )}
      </div>
    </div>
  );
}
