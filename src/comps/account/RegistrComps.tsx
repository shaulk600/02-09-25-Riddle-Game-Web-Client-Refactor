import "./RegistrComps.css";

import type { Player } from "../../logic/player/PlayerTypes";
import { createPlayer } from "../../logic/api/PlayerApi";

export default function RegistrComps() {

    const isInputEmpty = (inputUserName: string,
        inputPassword: string,
        inputEmail: string
        // צריך להוסיף פה עוד
    ): boolean => {
        return (
            (inputUserName.trim() === "") ||
            (inputEmail.trim() === "") ||
            (inputPassword.trim() === "")
            // צריך להוסיף פה עוד
        );
    };

    // send from ..
    const submitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // מונע ריענון דף
        const form = e.currentTarget; // יוצר תהליך ראשוני ..

        const inputUserName = form.username.value;
        const inputPassword = form.password.value;
        const inputEmail = form.email.value;
        // צריך להוסיף פה עוד


        if (isInputEmpty(inputUserName, inputPassword, inputEmail)) {
            return window.alert("Enter again");
        }

        const timeNow = new Date();
        const newPlayer: Player = {
            id: undefined,
            userName: inputUserName,
            password: inputPassword,
            email: inputEmail,
            createdAt: timeNow,
            bestTime: "0",
            // האם זה המבנה נתונים הסופי ?  מומלץ להוסיף - כרגע ככה
        };

        // Featch ..
        const idData = await createPlayer(newPlayer);
        // if (idData['_id']) {
        // return window.alert("Created player"); 
        // }   

        console.log("Created player:", idData);
    };

    // login-wrapper - בשביל המובייל
    return (
        <div className="login-wrapper">

            <div id="loginContainerComps">
                {/* header */}
                <div id="titleLoginComps">
                    <h1 className="login-title" >Login</h1>
                    <p className="login-subtitle">Enter your details to continue</p>
                </div>

                <form onSubmit={submitCreate} className="login-form">

                    <div id="divBoxEmail" className="boxLoginComps">
                        <label htmlFor="email"> Email </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>

                    <div className="boxLoginComps">
                        <label htmlFor="username" >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="boxLoginComps">
                        <label htmlFor="password" >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div id="boxSend">
                        <button type="submit" className="btn-login">
                            Sign up
                        </button>
                    </div>
                    <br />

                    {/* <div id="boxExtensions">
                        <Link to="" className="link-forgot">
                            Forget Password?
                        </Link>
                        <label htmlFor="rememberMe" className="remember-label">
                            <input type="checkbox" name="rememberMe" id="rememberMe" /> Remember Me
                        </label>
                    </div> */}

                    {/* end variable login page */}
                </form>


                {/* end page: */}
            </div >
        </div >
    );
}