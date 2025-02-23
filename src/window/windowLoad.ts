import { SourceFilter, loadAllObjects } from "../objectLoader/objectLoader";
import { Colour, WindowTemplate, label, store, window as flexWindow } from "openrct2-flexui";

const loadingText = "Loading...";
const loadedText = "Objects successfully loaded!";
const errorText = "{RED}{INT32} objects failed to load";
const text = store(loadingText);

let window: WindowTemplate;
let isWindowOpen = false;

export function initialize() {
    window = flexWindow({
        width: 200,
        height: "auto",
        position: "center",
        colours: [Colour.LightBlue, Colour.Grey],
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
    window.open();
    text.set(loadingText);

    context.setTimeout(() => {
        const errors = loadAllObjects(filter);
        if (errors > 0) {
            text.set(context.formatString(errorText, errors));
        } else {
            text.set(loadedText);
        }

        window.focus();
    }, 50);
}
