
import Login from "../../comps/account/LoginComps";
import FooterPage from "../../comps/footer/FooterPage";
// import Registr from "../../comps/account/Registr";
import HeaderBar from "../../comps/nav/HeaderBar";
import "./LoginRegisterPage.css";



export default function LoginRegisterPage() {
  return (
    <>

      <div className='PageWrapper'>

        <HeaderBar />

        <br />

        <Login />

        <br />
        <br />
        
        <section>
          <FooterPage />
        </section>


      </div >
    </>
  )
}
