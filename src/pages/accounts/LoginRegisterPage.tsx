
import "./LoginRegisterPage.css";

export default function LoginRegisterPage() {
  return (
    <div className='PageWrapper'>

      <div className='AuthContainer'>

        <header className='AuthHeader'>
          <h1>
            Login
          </h1>
          <p> Enter user details </p>
        </header>

        <div className='enterUser'>

            <div className='textLogin'>
            <label htmlFor="email">email to account</label>
            <input type="text" id='email' name='email' required/>
            </div>

            <div className='textLogin'>
            <label htmlFor="username"> name </label>
            <input type="text" id='username' name='username' required/>
            </div>

            <div className='textLogin'>
            <label htmlFor="pass"> password </label>
            <input type="text" id='pass' name='pass' required/>
            </div>

            <button className='btnAccess'>
              Login
            </button>
        </div>


        <footer>
          
        </footer>
      </div>

    </div>
  )
}
