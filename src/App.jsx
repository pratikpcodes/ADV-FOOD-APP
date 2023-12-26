import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import SearchContextProvider from "./Components/contexts/SearchContextProvider";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ResMenu from "./ResMenu";
function App() {
  return (
    <SearchContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </SearchContextProvider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path : "/restaurants/:resId",
        element : <ResMenu/>
      }
    ],
  },
]);
export default App;
