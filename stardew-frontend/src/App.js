import npcs from "./mockSV";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CatEdit from "./pages/SVEdit";
import CatIndex from "./pages/SVIndex";
import CatNew from "./pages/SVNew";
import CatShow from "./pages/SVShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



const App = () => {
  const [npcs, setNpcs] = useState(mockSV) 

  console.log(npcs)
  return (
   <> 
    <Header />
    <Home />
    <SVIndex />
    <SVShow />
    <SVNew />
    <SVEdit />
    <NotFound />
    <Footer />

    
   </> 
  );
}

export default App;
