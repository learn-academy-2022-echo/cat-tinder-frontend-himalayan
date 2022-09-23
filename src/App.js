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
import "./fonts/StardewValley.ttf";
import "./fonts/StardewValleyALLCAPS.ttf";
import "./fonts/StardewValleyRegular.ttf";
import PlaySound from "./components/PlaySound";



const App = () => {
  // eslint-disable-next-line
  const [npcs, setNpcs] = useState(mockSV);

  const createNpc = (npc) => {
  
  };

  const updateNpc = (npc, id) => {
    
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
        <div id="audio-player">
          <PlaySound/>
        </div>
        <Footer />
        
      </div>
    </>
  );
};

export default App;
