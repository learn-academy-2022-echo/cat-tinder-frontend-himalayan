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
import { Routes, Route } from "react-router-dom"



const App = () => {
  const [npcs, setNpcs] = useState(mockSV) 

  console.log(npcs)
  return (
   <> 
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/catindex" element={<SVIndex />} />
      <Route path="/catshow" element={<SVShow />} />
      <Route path="/catnew" element={<SVNew />} />
      <Route path="/catedit" element={<SVEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />

    
   </> 
  );
}

export default App;
