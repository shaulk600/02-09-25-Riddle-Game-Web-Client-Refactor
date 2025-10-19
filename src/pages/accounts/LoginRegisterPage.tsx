
import { useState } from "react";
import LoginComps from "../../comps/account/LoginComps";
import RegistrComps from "../../comps/account/RegistrComps";

// import FooterPage from "../../comps/footer/FooterPage";
// import HeaderBar from "../../comps/nav/HeaderBar";

import "./LoginRegisterPage.css";

export default function LoginRegisterPage() {
  
  const [register, serRegister] = useState(false);
  const chengeRegister = serRegister((e) => !e);
  
  return (
    <>

      <div className='PageWrapper'>

        {/* <HeaderBar /> */}
        <hr />
        <br />

        <div className="input-toggle input-IsRegister-IsLogin">
          <label htmlFor="accountEmail">
            Login / Register
          </label>

          <input
            type="checkbox"
            id="accountEmail"
            checked={register}
            onChange={chengeRegister}
          />
        </div>

        {!register && (
          <LoginComps />
        )}
        {register && (
          <RegistrComps />
        )}

        <br />
        <hr />
        {/* <FooterPage /> */}


      </div >
    </>
  )
}
