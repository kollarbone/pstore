import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Form(props) {
  const { deleteCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const form = { name: name, phone: phone, data: props.data };
  const [showCartModal, setShowCartModal] = useState(false);

  async function sentForm() {
    const res = await fetch("https://app.aaccent.su/js/confirm.php", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setShowCartModal(true);
      setTimeout(() => {
        deleteCart();
      }, 800);
      setName("");
      setPhone("");
    }
  }

  return (
    <div className="p-3 flex flex-col m-auto">
      <input
        className="m-2 p-2 border rounded"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="m-2 p-2 border rounded"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        className="bg-orange-400 text-white rounded py-1 px-3 m-2"
        onClick={sentForm}
      >
        Buy
      </button>
      {showCartModal && (
        <div className="fixed top-0 right-0 w-60 h-15 flex justify-center items-center">
          <div className="bg-green-300 p-5 rounded shadow-lg h-full w-full flex flex-row justify-between items-center">
            <p>Successfull order processing</p>
          </div>
        </div>
      )}
    </div>
  );
}
