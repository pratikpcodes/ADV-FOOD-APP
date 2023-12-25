import React, { useContext } from "react";
import { useState } from "react";
import SearchContext from "./contexts/SearchContext";

function SearchButton() {
  const {searchTxt,setsearchTxt} = useContext(SearchContext)
  return (
    <div>
      <input
        type="text"
        placeholder="Search Here =>"
        className="rounded-md opacity-0.5 hover:bg-slate-300"
        value={searchTxt}
        onChange={(e) => {
          setsearchTxt(e.target.value);
        }}
      />
     
    </div>
  );
}

export default SearchButton;
