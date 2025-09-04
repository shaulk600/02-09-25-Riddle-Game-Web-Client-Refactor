
import "./HomePage.css";

import { Link } from 'react-router'

import HeaderBar from "../../comps/nav/HeaderBar.tsx";


export default function HomePage() {
  return (
    <div className='bodyHome'>

      <div className='navBarHeader'>
        <HeaderBar />
      </div>

      <div className='head'>
        <h1> Riddle  Game  </h1>
      </div>


      <div className='navGame'>

        <div className='referringToLogin'>
          <button className='btnHome'>
            <Link to="/loginMain"> login </Link>
          </button>
        </div>

        <div className='referringToGame'>
          {/*- useContent אמור להיות בדיקה אם משתמש רשום */}
          {/* לא בטוח פה אגב */}
          <button className='btnHome'>
            <Link to="/RiddleGame"> play Game </Link>
          </button>
        </div>


      </div>

    </div>
  )
}
