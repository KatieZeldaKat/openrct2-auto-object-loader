import * as window from "./window/window";

export function startup() {
    if (network.mode !== "none") {
        return;
    }

    if (typeof ui !== "undefined") {
        window.initialize();
        ui.registerMenuItem("Load All Objects", window.openWindow);
    }
}
