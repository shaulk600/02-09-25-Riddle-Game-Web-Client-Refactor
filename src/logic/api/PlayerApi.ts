import type { Player, PlayerLogin } from "../player/PlayerTypes";
import { url } from "./Api";


export async function createPlayer(newPlayer: Player) {
    console.log(` test: page: PlayerApi in function 'createPlayer'  `)

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlayer),
        });

        if (res.status === 201) {
            console.log(`   in function 'createPlayer' \n   seccess :) - createing new Player`);
            window.alert('enter login now :)')
            window.location.href = `/login`
        }
        else {
            console.log(`   in function 'createPlayer' \n   Failure :( - not created new Player`);
        }
    } catch (err) {
        console.error("Error posting player:", err);
        window.alert("Server error!");
    }
};


// מה אני בעצם רוצה מהפונקציה הזאת ?
// שיחזיר טוקן
// או את כל פרטי השחקן
export async function loginPlayer(pl: PlayerLogin) {
    console.log(` test: page: PlayerApi in function 'loginPlayer'  `)
    try {
        const res = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pl),
        });

        if (res.status === 201) {
            console.log(`   in function 'loginPlayer' \n   seccess :) - Player details found`)
        }
        else {
            console.log(`   in function 'loginPlayer' \n   Failure :( - Player details not found`)
        }

        const data = await res.json();
        const idData = data['_id'];
        idData ? window.location.href = `/home/id=${idData}` : window.alert("not found");

    } catch (err) {
        console.log("error function loginPlayer: ", err);
        window.alert("Server error!");
    }
};

