import { useContext } from "react";
import "./GameQuestionsComps.css";
import { PlayerContext } from "../../pages/routes/RoutesGame";

export default function GameQuestionsComps() {
    const playerObj = useContext(PlayerContext);


    const receivingAnswer = () => {
        
    }

    return (
        <>
            <section>

                <h1>{ }</h1>
                <input type="text" required />
                <button onClick={ }></button>

            </section>
        </>
    )
}
