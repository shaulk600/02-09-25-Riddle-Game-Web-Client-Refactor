
import { Route, Routes } from 'react-router';

import HomePage from "../HomePage";
// import {  } from "";


export default function RoutesGame() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<HomePage />} />


        {/* <Route path="/Setting" element={<Setting />} >
          <Route path="SettingAboute" element={<SettingAboute />} />
        </Route> */}


      </Routes >

    </div>
  )
}
