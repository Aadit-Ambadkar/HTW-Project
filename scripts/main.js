import { world, system } from "@minecraft/server";
import { getPlayer, summonHell } from "./supporter";

var introMessage = false;

function mainTick() {
    try {
        if (system.currentTick % 100 === 0) {
            if (introMessage === false) {
                var my_name = getPlayer().name;
                // write code here to get the player's name
                world.sendMessage("Hello " + my_name + "! Tick: " + system.currentTick);
                world.sendMessage("Get ready for hell!");
                introMessage = true;
            }
            summonHell(getPlayer());
        }
    }
    catch (e) {
        world.sendMessage("Error: " + e);
    }
    system.run(mainTick);
}



system.run(mainTick);