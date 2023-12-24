import React, { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "./constants";
import { data } from "autoprefixer";
import ItemCard from "./ItemCard";
function Body() {
  const [finalData, setFinalData] = useState([]);
  //// array dena tha
  useEffect(() => {
    getResData();
  }, []);
  // const fetchData = async () => {
  //   const apiData = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const data = await apiData.json();
  //   console.log(
  //     data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
  //       .info.name
  //   );
  //   setfirst(
  //     data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0]
  //       .info.name
  //   );
  // };

  async function getResData() {
    try {
      const apiData = await fetch(API_URL);

      const jData = await apiData.json();

      let checkedData;

      async function checkData(jData) {
        for (let index = 2; index < jData?.data?.cards.length; index++) {
          checkedData =
            jData?.data?.cards[index]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkedData !== undefined) return checkedData;
        }
      }
      const resData = await checkData(jData);

      setFinalData(resData);
      console.log(finalData);
    } catch (error) {
      console.log("ERROR OCCURED:::FETCH:::", error.message);
    }
  }

  return (
    <>
   
    <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {finalData.map((index) => {
            return <ItemCard key={index?.info?.id} {...index?.info} />;
          })}
        </div>
      </div>
      
   
   
    </>
  );
}

export default Body;
//
