
import { Route, Routes } from 'react-router';
import { createContext, useState } from "react";
// type
import type { Player } from "../../logic/player/PlayerTypes";
import type { Riddle } from "../../logic/riddle/RiddleTypes";

// pags:   ////
import HomePage from "../home/HomePage";
// login page
import LoginRegisterPage from "../accounts/LoginRegisterPage";
//  game page
import GamePage from "../game/GamePage";




export const PlayerContext = createContext({});
export default function RoutesGame() {
  const [player, setPlayer] = useState<Player>({
    id: undefined,
    userName: "Mustang",
    password: "",
    email: "",
    createdAt: new Date,
    bestTime: "0"
  });
  // const [riddle, setRiddle] = useState<Riddle>({
  //   id: undefined,
  //   title: "Mustang",
  //   question: "22-08-99",
  //   answer: "0"
  // });


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
