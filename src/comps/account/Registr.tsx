

export default function Registr() {
    return (
        <>
            <div>
                <div className='textRegister'>
                    <label htmlFor="username"> name </label>
                    <input type="text" id='username' name='username' required />
                </div>

                <div className='textRegister'>
                    <label htmlFor="pass"> password </label>
                    <input type="password" id='pass' name='password' required />
                </div>
                <div className='textRegister'>
                    <label htmlFor="pass"> password </label>
                    <input type="password" id='pass' name='password' required />
                </div>
            </div>
        </>
    )
}
