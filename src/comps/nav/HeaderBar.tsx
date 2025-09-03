import { Link } from "react-router";

import "./HeaderBar.css";

// לשנות לheader
export default function HeaderBar() {
  return (
    <>
      <header id="header">
        {/* לשנות תמונה ולשים public */}

        <img src="/vite.svg" alt="logo" />

        <nav>
          <Link to='/'>home</Link>
          <Link to='/'>play</Link>
          <Link to='/'>leaderboard</Link>
          <Link to='/'>about</Link>
        </nav>

        <div className="btnBorder">
          <button className="btnHeader">sign up</button>
          <button className="btnHeader"> sign in</button>
        </div>
      </header>
    </>
  )
}
