import { world, system } from "@minecraft/server";
import { getPlayer, summonHell } from "./supporter";
import {data} from "./data"

var introMessage = false;

function mainTick() {
    // world.sendMessage("Please Work")
    
    try {
        if (system.currentTick % 100 === 0) {
            // if (introMessage === false) {
            var my_name = "Aadi";
            // write code here to get the player's name
            // getPlayer().sendMessage("Get ready for hell!");
            world.sendMessage("Hello " + data + "! Tick: " + system.currentTick);
            //world.sendMessage("trivia of the day: "+data)
                
                // introMessage = true;
            // }
            //summonHell(getPlayer());
        }
    }
    catch (e) {
        world.sendMessage("Error: " + e);
    }
    system.run(mainTick);
}



system.run(mainTick);