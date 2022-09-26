import React, { useState, useEffect } from "react";
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

function App() {
  // eslint-disable-next-line
  const [npcs, setNpcs] = useState([]);

  useEffect(() => {
    readNpc();
  }, []);

  const readNpc = () => {
    fetch("http://localhost:3000/npcs")
      .then((response) => response.json())
      .then((payload) => {
        setNpcs(payload);
      })
      .catch((error) => console.log(error));
  };

  const createNpc = (npc) => {
    fetch("http://localhost:3000/npcs", {
      body: JSON.stringify(npc),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readNpc(payload))
      .catch((errors) => console.log("Npc create errors:", errors));
  };

  const updateNpc = (npc, id) => {
    fetch(`http://localhost:3000/npcs/${id}`, {
      body: JSON.stringify(npc),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readNpc())
      .catch((errors) => console.log("Npc update errors:", errors));
  };

  const deleteNpc = (id) => {
    fetch(`http://localhost:3000/npcs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => this.readNpc())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <div className="background-img">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/svindex" element={<SVIndex npcs={npcs} />} />
          <Route 
          path="/svshow/:id" 
          render={(props) => {
            let id = props.match.params.id
            let npc = this.state.npcs.find((npc) => npc.id === +id)
            return <SVShow npc={npc} deleteNpc={this.deleteNpc} />
          }}
          element={<SVShow npcs={npcs} />} />
          <Route path="/svnew" element={<SVNew createNpc={createNpc} />} />
          {/* delete method not working */}
          <Route
            path="/svedit/:id"
            element={<SVEdit npcs={npcs} updateNpc={updateNpc} deleteNpc ={deleteNpc} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <div id="audio-player">
          <PlaySound />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
