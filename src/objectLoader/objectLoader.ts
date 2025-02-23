import { isSelectable } from "../data/selectableObjects";
import { TwoWayBinding } from "openrct2-flexui";

export type SourceFilter = { [source in ObjectSourceGame]: TwoWayBinding<boolean> };

export function loadAllObjects(filter: SourceFilter) {
    const objects = objectManager.installedObjects;
    objects.sort((one, two) => {
        return one.sourceGames.indexOf("custom") - two.sourceGames.indexOf("custom");
    });
    objects.forEach((installedObject) => {
        if (passesFilter(installedObject, filter) && isSelectable(installedObject)) {
            objectManager.load(installedObject.identifier);
        }
    });
}

/**
 * Determines whether an object passes a given filter. The object passes if any of its source games
 * are enabled by the filter, and only fails if none of its source games are enabled by the filter.
 * @param object The object to pass through the filter.
 * @param filter A filter which returns true if a source game is selected.
 * @returns True if the object passes the filter, false otherwise.
 */
function passesFilter(object: InstalledObject, filter: SourceFilter): boolean {
    return object.sourceGames.some((source) => {
        return filter[source].twoway.get();
    });
}
