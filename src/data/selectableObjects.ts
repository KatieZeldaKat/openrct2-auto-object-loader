import { isCompatibilityObject } from "./compatibilityObjects";

const isSelectableObjectType: { [objectType in ObjectType]: boolean } = {
    park_entrance: true,
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
