
import { Routes, Route } from 'react-router';


export default function Routes() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Setting />} />


        <Route path="/Setting" element={<Setting />} >
          <Route path="SettingAboute" element={<SettingAboute />} />
        </Route>


      </Routes >

    </div>
  )
}
