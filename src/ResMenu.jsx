import React from "react";
import { useState } from "react";
import { API_URL, MENU_URL } from "./Components/constants";
import { useEffect } from "react";
import ShimmerUI from "./Components/ShimmerUI";

function ResMenu() {
  const [menu, setmenu] = useState([]);

  useEffect(() => {
    getMenuData();
  }, []);

  async function getMenuData() {
    const data = await fetch(MENU_URL);

    const jData = await data.json();

    setmenu(jData.data);
    console.log(menu?.cards[0].card.card.info.id);
  }

  
  return <div>ResMenu</div>;
}

export default ResMenu;
