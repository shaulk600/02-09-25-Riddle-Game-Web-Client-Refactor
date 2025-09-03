import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
    const [onEmail, setOnEmail] = useState(false);
    const toogle = () => setOnEmail(o => !o)

    // Email
    const accountEmail = document.getElementById('AccountEmail');
    const emailLogin = document.getElementById('emailLogin');

    useEffect(() => {
        onEmail ? accountEmail?.classList.remove('emailLoginRegular') : accountEmail?.classList.add('emailLoginRegular');
    }, [onEmail])

    return (
        <>
            <section id='loginContainer'>

                <header id='AuthHeader'>
                    <img src="" alt="logo" />
                    <h1>
                        Login
                    </h1>
                    <p> Enter user details </p>
                </header>


                <div id='customLogin'>

                    <form action="/login" method="post">

                        <label htmlFor="AccountEmail"> Account for Email </label>
                        <input type="checkbox" name="AccountEmail" id="AccountEmail" onClick={() => toogle} />

                        <div id="emailLogin" className='textLogin emailLoginRegular'>
                            <label htmlFor="email">email to account</label>
                            <input type="text" id='email' name='email' />
                        </div>

                        <div className='textLogin'>
                            <label htmlFor="username"> name </label>
                            <input type="text" id='username' name='username' required />
                        </div>

                        <div className='textLogin'>
                            <label htmlFor="pass"> password </label>
                            <input type="password" id='pass' name='password' required />
                        </div>

                        <div className='textLogin'>
                            <button className='btnAccess'> Login </button>
                        </div>

                        <div id='extensions'>
                            <div> <a href="">Forgot Password</a> </div>
                            <label htmlFor="rememberMe"> Remember Me </label>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}
