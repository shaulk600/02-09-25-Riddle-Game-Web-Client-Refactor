import type { Player } from "../player/PlayerTypes";
import { url } from "./Api";


export async function createPlayer(newPlayer: Player) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlayer),
        });

        if (res.ok) {
            console.log('seccess')
            const data:any = await res.json();
            const idData = data.res.id; //לברר
            // window.location.href = "/home/id=${idData}";
        } else {
            window.alert("Error to try again");
        }
    } catch (err) {
        console.error("Error posting player:", err);
        window.alert("Server error!");
    }
};
