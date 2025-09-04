import { Link } from "react-router";

import "./DashboardComps.css";

export default function DashboardComps() {


  return (
    <>

      {/* nav */}
      <div>
        <h2>hello from { }</h2>
        <h1> Choose one of the options </h1>
      </div>

      <div>
        {/*  תלוי בהרשאות גישה יש לזה הנחיות בדף - לעשות זאת*/}
        <div>
          <Link to=''> Play the game </Link>
          <Link to=''> View leader board </Link>
        </div>
        <div>
          <Link to=''> Create a new riddle </Link>
          <Link to=''> Read all riddles </Link>
        </div>
        <div>
          <Link to=''> Update an existing riddle </Link>
          <Link to=''> Delete a riddle </Link>
        </div>


      </div>
    </>
  )
}
