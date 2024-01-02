import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./Store/cartSlice";
import { removeItem } from "./Store/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.cart.items);
  const demo = useSelector((store) =>
    store.cart.items.map((index) => index.quantity)
  );
  const demo2 = demo.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(demo + "  this  :::::::");
  console.log(demo2 + "  this  :::::::");
  const qty = useSelector((store) => store.cart.totalQty);

  // console.log(selector);

  const handleDelete = () => {
    dispatch(clearCart());
  };

  const handleDeleteItem = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <div className="w-full  min-h-svh">
      <div className="40 mt-20 ">
        <button
          className=" bg-black transition-transform transform hover:scale-95 rounded-md text-white w-40 scale-75 absolute left-1/2  -translate-x-1/2 -translate-y-1/2 "
          onClick={() => {
            handleDelete();
          }}
        >
          {qty == 0 ? "No Items Left" : "Clear All " + qty + " Items"}
        </button>
      </div>
      <div className="font-bold text-gray-600 justify-between m-20 items-center h-min w-auto">
        {selector.map((index) => (
          <div className=" w-full p-10 flex justify-between items-center ">
            <div className=" ">
              <h1>{index.name} </h1>

              <div className="font-normal w-3/4">
                <h1>{"₹ " + Math.floor(index.price / 100)} </h1>
                <h1>{index.description}</h1>
              </div>
            </div>

            <div className="relative m-0 ">
              <img
                className="m-0 p-2 w-100 h-100 rounded-xl border"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  index.imageId
                }
                alt="helo"
              />
              <button
                onClick={() => {
                  handleDeleteItem(index);
                }}
                className=" transition-transform transform hover:scale-75 text-white bg-black absolute text-xs font-medium p-1   w-40    left-1/2 -translate-x-1/2  rounded"
              >
                Delete Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
