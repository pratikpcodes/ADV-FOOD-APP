import React, { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "./constants";
import { data } from "autoprefixer";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import ShimmerUI from "./ShimmerUI";
import SearchButton from "./searchButton";
import SearchContext from "./contexts/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Body() {
  let [finalData, setFinalData] = useState([]);
  let [demo, setdemo] = useState([]);
  const [click, setclick] = useState(false);
  // const [buttonData, setbuttonData] = useState("");
  //// array dena tha
  // const handleButtonData = (data) => {
  //   setbuttonData(data);
  // };

  const { searchTxt, setsearchTxt } = useContext(SearchContext);
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
      setdemo(resData);
    } catch (error) {
      console.log("ERROR OCCURED:::FETCH:::", error.message);
    }
  }
  const dummy = "helo";
  const handlefilterClick = () => {
    setclick(!click);
    if (click) {
      let filtered = demo.filter((index) => index.info.avgRatingString > 4);

      setFinalData(filtered);
    }
    if (!click) {
      setFinalData(demo);
    }
  };
  // console.log(finalData);

  const handlefilterClick2 = () => {
    let filtered2 = demo.filter((index) =>
      index.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    // console.log(filtered2);
    setFinalData(filtered2);
    if (searchTxt.length == 0) setFinalData(demo);
  };
  // console.log(searchTxt + "from body.jsx");

  return (
    <div class=" relative  w-full  h-full justify-center items-center opacity-90  transition duration-1000 ease-in-out hover:opacity-110">
      <img
        className="absolute w-full h-full "
        src="https://wepik.com/api/image/ai/9b02e096-2140-4de6-8cc2-8d7e5e2e177f"
        alt=""
      />

      <div className="mx-auto ">
        <div className=" items-center flex justify-between ">
          <button
            className="transition-transform transform hover:scale-105 text-black hover:text-cyan-800 object-cover rounded-full text-3xl "
            onClick={handlefilterClick}
          >
            &#9733;
          </button>
          <div className="flex">
            <SearchButton />
            <button
              className="transition-transform transform hover:scale-105 text-yellow hover:text-cyan-800 object-cover rounded-full text-xl fas fa-search"
              onClick={handlefilterClick2}
            ></button>
          </div>
        </div>

        <div>
          {finalData.length == 0 ? (
            <ShimmerUI />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {finalData.map((index) => {
                return (
                  <Link to={"/restaurants/" + index?.info?.id}>
                    <ItemCard key={index?.info?.id} {...index?.info} />{" "}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
//
