import { world, system, EntitySpawnAfterEvent } from "@minecraft/server";

export function getPlayer() {
    const allPlayers = world.getAllPlayers();
    if (allPlayers.length === 0) {
        return undefined;
    }
    console.log(allPlayers)
    return allPlayers[0]
}

export function summonHell(player) {
    var playerDimension = player.dimension;
    var playerLocation = player.location;
    world.sendMessage(player.dimension.id);
    world.sendMessage(player.location.x + " " + player.location.y + " " + player.location.z);
    if (playerDimension.id === "minecraft:overworld") {
        playerDimension.spawnEntity("minecraft:ender_dragon", playerLocation);
    }
}


export function linkSpawnEntity(list) {
    world.afterEvents.entitySpawn.subscribe()
}