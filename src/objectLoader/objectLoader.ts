import { isSelectable } from "../data/selectableObjects";

export function loadAllObjects() {
    objectManager.installedObjects.forEach((installedObject) => {
        if (isSelectable(installedObject)) {
            objectManager.load(installedObject.identifier);
        }
    });
}
