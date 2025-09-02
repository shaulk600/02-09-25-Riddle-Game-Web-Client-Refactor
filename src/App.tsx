import { Routes } from 'react-router'
import { Route } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Setting />} />


        <Route path="/Setting" element={<Setting />} >
          <Route path="SettingAboute" element={<SettingAboute />} />
        </Route>


      </Routes >





    </>
  )
}

export default App
