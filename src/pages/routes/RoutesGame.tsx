
import { Route, Routes } from 'react-router';

import HomePage from "../home/HomePage";
import LoginRegisterPage from "../accounts/LoginRegisterPage";
import GamePage from "../game/GamePage";


// import {  } from "";


export default function RoutesGame() {
  return (
    <div>

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

    </div>
  )
}
