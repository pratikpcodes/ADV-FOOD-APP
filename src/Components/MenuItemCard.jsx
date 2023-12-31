import React from "react";
import { useState } from "react";

function MenuItemCard(card2) {
  const itemCard = card2.card2;
  const [activebtn, setactivebtn] = useState();
  const [vegOnly, setvegOnly] = useState(false);

  const [toggle, settoggle] = useState();
  //   console.log(itemCard);

  return (
    <div className=" h-auto w-auto  ">
      <div className="flex  justify-between items-center">
        <button onClick={(e) => setvegOnly(!vegOnly)}>
          <img
            className=" object-cover w-5 h-5"
            src="https://img.icons8.com/?size=48&id=61082&format=png"
            alt="helo"
          />
          non-Veg filter
        </button>
      </div>
      {itemCard.map((index) => (
        // here index =item and not actual index
        <div className="font-bold text-gray-600 border  w-auto h-auto m-10 ">
          <div className="font-bold text-2xl 0 flex justify-between ">
            <div className="flex items-center ">
              {index.card.card.title}
              {/* {console.log(index.card.card.itemCards.length)} */}

              <h1 className="ml-5 text-lg ">
                {"(" + index.card.card.itemCards.length + ")"}{" "}
              </h1>
            </div>

            <button
              onClick={() => {
                setactivebtn(index.card.card.title);
                if (activebtn == index.card.card.title) settoggle(!toggle);
                else settoggle(true);
              }}
            >
              <img
                className="w-6 h-6  "
                src="https://cdn-icons-png.flaticon.com/128/566/566015.png"
                alt="helo"
              />
            </button>

            {/* {console.log(activebtn)} */}
          </div>

          {/* {console.log(index.card.card)} */}
          {/* bcccc logic bana diya of toggle hurray xd :)*/}
          {activebtn == index.card.card.title && toggle == true ? (
            <>
              {vegOnly == false ? (
                <div>
                  {index.card.card.itemCards.map((index) => (
                    <div className="mt-5">
                      {index?.card?.info.name.includes("Chicken") == true ? (
                        <div>
                          <img
                            className=" object-cover w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=61082&format=png"
                            alt="helo"
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className=" object-cover w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=61083&format=png"
                            alt="helo"
                          />
                        </div>
                      )}

                      {index.card.info.name}
                      <div className="font-normal">
                        {"₹ " + Math.floor(index?.card?.info.price / 100)}
                      </div>

                      <div className="mt-4 opacity-75 font-normal font-serif">
                        {index?.card?.info.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {index.card.card.itemCards.map((index) => (
                    <div className="mt-5">
                      {index?.card?.info?.name.includes("Chicken") == true ? (
                        <div>
                          <img
                            className=" object-cover w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=61082&format=png"
                            alt="helo"
                          />
                          {index.card.info.name}
                          <div className="font-normal">
                            {"₹ " + Math.floor(index?.card?.info.price / 100)}

                            <div className="mt-4 opacity-75 font-normal font-serif">
                              {index?.card?.info.description}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuItemCard;
{
  /* {index.card.card.itemCards[0].card.info.name} */
}
