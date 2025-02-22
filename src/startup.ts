// @ts-ignore
import * as info from "./info.js";
import { loadAllObjects } from "./objectLoader/objectLoader.js";

export function startup() {
    if (typeof ui !== "undefined") {
        ui.registerMenuItem(info.name, () => onClickMenuItem());
    }
}

function onClickMenuItem() {
    loadAllObjects();
}
