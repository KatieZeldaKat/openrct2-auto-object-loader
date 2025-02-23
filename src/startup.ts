import * as window from "./window/window";

export function startup() {
    if (network.mode !== "none" || typeof ui === "undefined") {
        return;
    }

    window.initialize();
    ui.registerMenuItem("Automatic Object Loader", window.openWindow);
}
