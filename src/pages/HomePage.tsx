import React from 'react'
import "./css/HomePage.css";

import { Link } from 'react-router'

import HeaderBar from "../comps/nav/HeaderBar";

export default function HomePage() {
  return (
    <div>
      <div>
        <HeaderBar />
      </div>

      <div className='referringToGame'>
        {/* אמור להיות בדיקה אם משתמש רשום */}
        <Link to="/RiddleGame">link </Link>
      </div>
      <div className='referringToLogin'>
        <Link to="/loginMain">link </Link>
      </div>

    </div>
  )
}
