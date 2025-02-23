import { Colour, WindowTemplate, label, store, window as flexWindow } from "openrct2-flexui";
import { SourceFilter, loadAllObjects } from "../objectLoader/objectLoader";

const loadingText = "Loading...";
const loadedText = "Objects successfully loaded!";
const text = store(loadingText);

let window: WindowTemplate;
let isWindowOpen = false;

export function initialize() {
    window = flexWindow({
        width: 200,
        height: "auto",
        position: "center",
        colours: [Colour.LightPurple, Colour.Grey],
        onOpen: () => (isWindowOpen = true),
        onClose: () => (isWindowOpen = false),
        content: [label({ text: text, alignment: "centred" })],
    });
}

/**
 * Closes the window if open.
 */
export function closeWindow() {
    if (isWindowOpen) {
        window.close();
    }
}

/**
 * Opens window and loads objects.
 */
export function openWindowAndLoad(filter: SourceFilter) {
    openWindow();
    text.set(loadingText);

    context.setTimeout(() => {
        loadAllObjects(filter);
        text.set(loadedText);
    }, 25);
}

function openWindow() {
    if (isWindowOpen) {
        window.focus();
    } else {
        window.open();
    }
}
