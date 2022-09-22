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
import './App.css'





const App = () => {
  const [npcs, setNpcs] = useState(mockSV)


  return (
    <>
      <div style={{ backgroundImage: "url(public/SVBackground.jpeg)" }}></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/svindex" element={<SVIndex npcs = {npcs}/>} />
        <Route path="/svshow/:id" element={<SVShow npcs= { npcs } />} />
        <Route path="/svnew" element={<SVNew />} />
        <Route path="/svedit" element={<SVEdit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
