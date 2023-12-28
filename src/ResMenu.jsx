import React from "react";
import { useState } from "react";
import { API_URL, MENU_URL } from "./Components/constants";
import { useEffect } from "react";
import ShimmerUI from "./Components/ShimmerUI";
import dis from "./assets/dis.png";
function ResMenu() {
  const [menu, setmenu] = useState(null);
  const icon = `<svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>`;
  useEffect(() => {
    getMenuData();
  }, []);
  if (menu == null) return <ShimmerUI />;

  async function getMenuData() {
    const data = await fetch(MENU_URL);

    const jData = await data.json();

    setmenu(jData);
  }
  const {
    name,
    city,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
    id,
    locality,
    areaName,
    sla,
    aggregatedDiscountInfo,
  } = menu.data.cards[0].card.card.info;
  // console.log(menu?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
  const { itemCards } =
    menu?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(menu.data.cards[0].card.card.info);
  // console.log(aggregatedDiscountInfo.descriptionList);
  // console.log(menu.data.cards[0].card.card.info)
  // console.log(itemCards[0].card.info.name);
  return (
    <>
      <div className=" container m-auto ">
        <div className=" items-center justify-center m-20">
          <h1 className="font-bold text-xl m-0 p-0">{name}</h1>
          <h1 className=" text-gray-500 text-sm m-0 p-0">{cuisines}</h1>
          <h3 className=" text-gray-500 text-sm m-0 p-0">
            {city + "," + locality}
          </h3>
          <h1 className=" text-gray-500 text-sm mt-5 p-0">
            {areaName + " " + sla.lastMileTravelString}
          </h1>
          <h2>{cloudinaryImageId}</h2>
          <div className=" 30mins mt-10 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M16,16H7.995C7.445,16,7,15.555,7,15.005v-0.011	C7,14.445,7.445,14,7.995,14H14V5.995C14,5.445,14.445,5,14.995,5h0.011C15.555,5,16,5.445,16,5.995V16z"></path>
            </svg>

            <h2 className=" font-bold mr-10 ">{sla.slaString}</h2>

            <h2 className=" font-bold ml-2 "> {costForTwoMessage}</h2>
          </div>
          <div className="Discount mt-10 flex items-center text-gray-500">
            {aggregatedDiscountInfo.descriptionList.map((item) => (
              <>
                <img
                  className=" object-cover w-6 h-6 m-0 p-0"
                  src={dis}
                  alt=""
                />
                <h2 className="mr-4 font-bold ">{item.meta}</h2>
              </>
            ))}
          </div>
        </div>

        <div>
          {itemCards.map((item) => (
            <div className="font-bold text-gray-600 border border-solid border-gray-500 w-auto h-auto ">
              <div className="mt-5">
                {item.card.info.name.includes("Chicken") == true ? (
                  <div>
                    <img
                      className=" object-cover w-5 h-5"
                      src="https://img.icons8.com/?size=48&id=61082&format=png"
                      alt="helo"
                    />
                  </div>
                ) : (
                  <div>
                    {" "}
                    <img
                      className=" object-cover w-5 h-5"
                      src="https://img.icons8.com/?size=48&id=61083&format=png"
                      alt="helo"
                    />
                  </div>
                )}
                {item.card.info.name}
                {console.log(item.card.info.name)}

                <div className="font-normal">
                  {"₹ " + item.card.info.price / 100}
                </div>

                <div className="mt-4 opacity-75 font-normal font-serif">
                  {item.card.info.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResMenu;
