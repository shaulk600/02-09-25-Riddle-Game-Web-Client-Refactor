
import { Route, Routes } from 'react-router';
import { createContext, useState } from "react";
import HomePage from "../home/HomePage";
import LoginRegisterPage from "../accounts/LoginRegisterPage";
import GamePage from "../game/GamePage";


// import {  } from "";

import { Player } from "../../logic/player/PlayerTypes";

const PlayerContext = createContext({ id: "", userName: "", createdAt: "", bestTime: "" });
export default function RoutesGame() {
  const [player, setPlayer] = useState({ id: "", userName: "", createdAt: "", bestTime: "" });

  return (
    <div>
      {/* A player shell for the game */}
      <PlayerContext.Provider value={player}>

        <Routes>

          {/* Home */}
          <Route path="/" element={<HomePage />} />
          {/* login */}
          <Route path="/loginMain" element={<LoginRegisterPage />} />
          {/* Game Free */}
          <Route path="/RiddleGame" element={<GamePage />} />

          {/* <Route path="/" element={<HomePage />} /> */}


          {/* <Route path="/Setting" element={<Setting />} >
          <Route path="SettingAboute" element={<SettingAboute />} />
        </Route> */}


        </Routes >
      </PlayerContext.Provider>
    </div>
  )
}
