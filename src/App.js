import mockSV from "./mockSV";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SVEdit from "./pages/SVEdit";
import SVIndex from "./pages/SVIndex";
import SVNew from "./pages/SVNew";
import SVShow from "./pages/SVShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom"




const App = () => {
  const [npcs, setNpcs] = useState(mockSV) 

  
  return (
   <> 
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
      <Route path="/SVindex" element={<SVIndex />} />
      <Route path="/SVshow" element={<SVShow />} />
      <Route path="/SVnew" element={<SVNew />} />
      <Route path="/SVedit" element={<SVEdit />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
   
    
   </> 
  );
}

export default App;
