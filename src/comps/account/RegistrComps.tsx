import "./RegistrComps.css";

export default function RegistrComps() {
    const submitPage = () => {

    }

    return (
        <>
            <div>
                <form action="" method="post">
                    <div className='textRegister'>
                        <label htmlFor="username"> name </label>
                        <input type="text" id='username' name='username' required />
                    </div>

                    <div className='textRegister'>
                        <label htmlFor="pass"> password </label>
                        <input type="password" id='pass' name='password' required />
                    </div>
                    {/* <div className='textRegister'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" id='email' name='email' required />
                    </div> */}
                    <div>
                        <button type="submit" onClick={() => submitPage}>save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
