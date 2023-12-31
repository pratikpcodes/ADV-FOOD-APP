import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./Store/cartSlice";
function Cart() {
    const dispatch = useDispatch();
  const selector = useSelector((store) => store.cart.items);
  console.log(selector);

  const handleDelete=()=>{
    dispatch(clearCart())

  }
  return (
    <>

    
   
    <div className="40 mt-20 ">

        <button
        onClick={()=>{
            handleDelete();
        }}
        >Delete</button>
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

          <div>
            <img
              className="m-0 p-2 w-100 h-100 rounded-xl border"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                index.imageId
              }
              alt="helo"
            />
          </div>
        </div>
      ))}

 
    </div>
    </>
  );
}

export default Cart;
