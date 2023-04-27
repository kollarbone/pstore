import { useState, useEffect } from "react";
import ProductCard from "../components/Product_card";

export default function Pagination(props) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(8);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItem = data.slice(firstItemIndex, lastItemIndex);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pageNumber.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-5 col-auto m-3">
        {currentItem.map((item, key) => (
          <ProductCard key={key} data={item} />
        ))}
      </div>
      <div className="flex flex-row justify-evently">
        {data.length > 8 &&
          pageNumber.map((number) => (
            <button
              className={
                currentPage === number
                  ? "border-zinc-300 border rounded h-10 w-10 hover:bg-white"
                  : "bg-zinc-300 rounded h-10 w-10 hover:bg-white hover:border-zinc-400 hover:border"
              }
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
      </div>
    </>
  );
}
