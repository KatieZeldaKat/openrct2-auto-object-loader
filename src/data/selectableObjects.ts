import { isCompatibilityObject } from "./compatibilityObjects";

const isSelectableObjectType: { [objectType in ObjectType]: boolean } = {
    park_entrance: parkEntrancesSupported(),
    station: true,
    ride: true,
    music: true,
    scenery_group: true,
    small_scenery: true,
    large_scenery: true,
    wall: true,
    banner: true,
    terrain_surface: true,
    terrain_edge: true,
    footpath: true,
    footpath_surface: true,
    footpath_railings: true,
    footpath_addition: true,

    // Unsupported
    water: false,
    //scenario.text: false,
    //audio: false,
    //peep_animations: false,
    //peep_names: false,
};

export function isSelectable(object: InstalledObject): boolean {
    if (isCompatibilityObject[object.identifier]) {
        return false;
    }

    if (isSelectableObjectType[object.type]) {
        return true;
    } else if (object.identifier.indexOf("peep_animations") > -1) {
        return true;
    }

    return false;
}

function parkEntrancesSupported() {
    // The API version when multiple park entrances became supported
    if (context.apiVersion < 103) {
        return false;
    }

    const parkEntrances = objectManager.getAllObjects("park_entrance");
    if (parkEntrances.length > 1) {
        return true;
    }

    let loadedEntrances = 0;
    const installedObjects = objectManager.installedObjects;
    for (let index = 0; loadedEntrances < 2 && index < installedObjects.length; index++) {
        if (installedObjects[index].type === "park_entrance") {
            const parkEntrance = objectManager.load(installedObjects[index].identifier);
            if (parkEntrance) {
                loadedEntrances += 1;
            } else {
                break;
            }
        }
    }

    return loadedEntrances < 2;
}
