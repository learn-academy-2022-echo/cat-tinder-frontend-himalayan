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
import { Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  // eslint-disable-next-line
  const [npcs, setNpcs] = useState(mockSV);

  const createNpc = (npc) => {
    // console.log(npc)
  };

  const updateNpc = (npc, id) => {
    // console.log("npc:", npc)
    // console.log("id:", id)
  };

  return (
    <>
      <div className="background-img">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/svindex" element={<SVIndex npcs={npcs} />} />
          <Route path="/svshow/:id" element={<SVShow npcs={npcs} />} />
          <Route path="/svnew" element={<SVNew createNpc={createNpc} />} />
          <Route
            path="/svedit/:id"
            element={<SVEdit npcs={npcs} updateNpc={updateNpc} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        
      </div>
    </>
  );
};

export default App;
