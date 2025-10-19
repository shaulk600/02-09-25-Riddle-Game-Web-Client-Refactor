import { useContext } from "react";
import "./GameQuestionsComps.css";
import { PlayerContext } from "../../pages/routes/RoutesGameBBB";

export default function GameQuestionsComps() {
    const playerObj = useContext(PlayerContext);


    const receivingAnswer = () => {
        
    }

    return (
        <>
            <div>

                <h1>{ }</h1>
                <input type="text" required />
                <button onClick={ }></button>

            </div>
        </>
    )
}
