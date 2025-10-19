import { useState } from "react";
import { Link } from "react-router";
import "./LoginComps.css";
import type { Player, PlayerLogin } from "../../logic/player/PlayerTypes";
import { createPlayer,loginPlayer } from "../../logic/api/PlayerApi";

export default function LoginComps() {

    const [onEmail, setOnEmail] = useState(false);
    const toggleEmail = () => setOnEmail((prev) => !prev); //פעולת הלחיצה בפועל

    const isInputEmpty = (inputUserName: string,
        inputPassword: string,
        inputEmail: string
    ): boolean => {
        return (
            // אם אחד מהם לא שווה למשהו - התנאי הראשון - כי זה או זה או זה
            (inputUserName.trim() === "" && inputEmail.trim() === "") ||
            (inputPassword.trim() === "")
        );
    };

    // send from ..
    const submitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // מונע ריענון דף
        const form = e.currentTarget; // יוצר תהליך ראשוני ..

        const inputUserName = form.username ? form.username.value : "";
        const inputPassword = form.password.value;
        const inputEmail = form.email ? form.email.value : "";

        if (isInputEmpty(inputUserName, inputPassword, inputEmail)) {
            return window.alert("Enter again");
        }

        const playerLogin: PlayerLogin = {
            usernameemail: inputUserName === "" ? inputEmail : inputUserName,
            password: inputPassword
        }

        // פונקציה שמתאימה להרשמה - לא להתחברות !!!
        // const timeNow = new Date();
        // const newPlayer: Player = {
        //     id: undefined,
        //     userName: inputUserName,
        //     password: inputPassword,
        //     email: inputEmail,
        //     createdAt: timeNow,
        //     bestTime: "0",
        // };

        // Featch ..
        const idData = await loginPlayer(playerLogin);
        // if (idData['_id']) {
        // return window.alert("Created player"); 
        // }   

        // לשמור בלוקאל סטורג' טוקן או פרטי שחקן - דבר הבא -אחרי צהרים
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
                {/* body */}
                <form onSubmit={submitCreate} className="login-form">
                    <div className="input-toggle">
                        <label htmlFor="accountEmail">
                            Account In Email
                        </label>

                        <input
                            type="checkbox"
                            id="accountEmail"
                            checked={onEmail}
                            onChange={toggleEmail}
                        />
                    </div>

                    {onEmail && (
                        <div id="divBoxEmail" className="boxLoginComps">
                            <label htmlFor="email"> Email </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                            />
                        </div>
                    )}

                    {!onEmail && (
                        <div className="boxLoginComps">
                            <label htmlFor="username" >
                                Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Your Name"
                            />
                        </div>
                    )}

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
                            Login
                        </button>
                    </div>
                    <br />

                    <div id="boxExtensions">
                        <Link to="" className="link-forgot">
                            Forget Password?
                        </Link>
                        <label htmlFor="rememberMe" className="remember-label">
                            <input type="checkbox" name="rememberMe" id="rememberMe" /> Remember Me
                        </label>
                    </div>

                    {/* end variable login page */}

                </form>


                {/* end page: */}
            </div >
        </div >
    );
}