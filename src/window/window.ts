import { windowContent } from "./windowContent";
import { Colour, WindowTemplate, window as flexWindow } from "openrct2-flexui";

let window: WindowTemplate;
let isWindowOpen = false;

export function initialize() {
    window = flexWindow({
        title: "Load All Objects",
        width: 325,
        height: "auto",
        position: "center",
        colours: [Colour.LightPurple, Colour.Grey],
        onOpen: () => (isWindowOpen = true),
        onClose: () => (isWindowOpen = false),
        content: windowContent(),
    });
}

/**
 * Opens the main window. If already open, the window will be focused.
 */
export function openWindow() {
    if (isWindowOpen) {
        window.focus();
    } else {
        window.open();
    }
}
