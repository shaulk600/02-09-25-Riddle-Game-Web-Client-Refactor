import { useState } from "react";
import { Link } from "react-router";
import "./LoginComps.css";
import type { Player } from "../../logic/player/PlayerTypes";
import { createPlayer } from "../../logic/api/PlayerApi";

export default function LoginComps() {

    const [onEmail, setOnEmail] = useState(false);
    const toggleEmail = () => setOnEmail((prev) => !prev);

    // send from ..
    const submitCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // מונע ריענון דף

        const form = e.currentTarget;
        const inputUserName = form.username.value;
        const inputPassword = form.password.value;
        const inputEmail = form.email.value;

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
        };

        const idData = await createPlayer(newPlayer);
        console.log("Created player:", idData);
    };

    const isInputEmpty = (
        inputUserName: string,
        inputPassword: string,
        inputEmail: string
    ): boolean => {
        return (
            inputUserName.trim() === "" ||
            inputPassword.trim() === "" ||
            inputEmail.trim() === ""
        );
    };

    return (
        <section id="loginContainer">
            <header id="AuthHeader">
                <img src="" alt="logo" />
                <h1>Login</h1>
                <p>Enter user details</p>
            </header>

            <div id="customLogin">
                <form onSubmit={submitCreate}>
                    <label htmlFor="accountEmail"> Account for Email </label>
                    <input
                        type="checkbox"
                        id="accountEmail"
                        checked={onEmail}
                        onChange={toggleEmail}
                    />

                    {onEmail && (
                        <div id="emailLogin" className="textLogin">
                            <label htmlFor="email">email to account</label>
                            <input type="text" id="email" name="email" />
                        </div>
                    )}

                    <div className="textLogin">
                        <label htmlFor="username">name</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="textLogin">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="textLogin">
                        <button type="submit" className="btnAccess">
                            Login
                        </button>
                    </div>

                    <div id="extensions">
                        <div>
                            <Link to="">שכחתי סיסמא</Link>
                        </div>

                        <label htmlFor="rememberMe"> Remember Me </label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe" />

                    </div>
                </form>
            </div>
        </section>
    );
}