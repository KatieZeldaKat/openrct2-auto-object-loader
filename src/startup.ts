import * as window from "./window/window";

const menuItemText = "Automatic Object Loader";

export function startup() {
    if (network.mode !== "none" || typeof ui === "undefined") {
        return;
    }

    // Object Manager added in plugin API version 78
    if (context.apiVersion < 78) {
        ui.registerMenuItem(menuItemText, () => {
            ui.showError("UNSUPPORTED VERSION", "Please update to OpenRCT2 v0.4.6 or later.");
        });

        return;
    }

    window.initialize();
    ui.registerMenuItem(menuItemText, window.openWindow);
}
