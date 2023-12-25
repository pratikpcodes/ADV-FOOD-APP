import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemCard from "./Components/Body";
import Body from "./Components/Body";
import SearchButton from "./Components/searchButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
 

      <Body />
      <Footer />
    </>
  );
}

export default App;
