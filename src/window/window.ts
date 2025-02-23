import * as windowLoad from "./windowLoad";
import { SourceFilter } from "../objectLoader/objectLoader";
import {
    Colour,
    WindowTemplate,
    button,
    checkbox,
    groupbox,
    horizontal,
    store,
    twoway,
    vertical,
    window as flexWindow,
} from "openrct2-flexui";

const filter: SourceFilter = {
    rct1: twoway(store(true)),
    added_attractions: twoway(store(true)),
    loopy_landscapes: twoway(store(true)),
    rct2: twoway(store(true)),
    wacky_worlds: twoway(store(true)),
    time_twister: twoway(store(true)),
    openrct2_official: twoway(store(true)),
    custom: twoway(store(false)),
};

let window: WindowTemplate;
let isWindowOpen = false;

export function initialize() {
    windowLoad.initialize();
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
    windowLoad.closeWindow();
    if (isWindowOpen) {
        window.focus();
    } else {
        window.open();
    }
}

function windowContent() {
    return [
        groupbox({
            text: "Sources",
            content: [horizontal(getCheckboxes())],
        }),
        button({
            text: "Load Selected Objects",
            height: 25,
            onClick: () => {
                window.close();
                windowLoad.openWindowAndLoad(filter);
            },
        }),
    ];
}

function getCheckboxes() {
    return [
        vertical([
            checkbox({ text: "RCT1", isChecked: filter["rct1"] }),
            checkbox({ text: "RCT1 Added Attractions", isChecked: filter["added_attractions"] }),
            checkbox({ text: "RCT1 Loopy Landscapes", isChecked: filter["loopy_landscapes"] }),
            checkbox({ text: "OpenRCT2", isChecked: filter["openrct2_official"] }),
        ]),
        vertical([
            checkbox({ text: "RCT2", isChecked: filter["rct2"] }),
            checkbox({ text: "RCT2 Wacky Worlds", isChecked: filter["wacky_worlds"] }),
            checkbox({ text: "RCT2 Time Twister", isChecked: filter["time_twister"] }),
            checkbox({ text: "Custom", isChecked: filter["custom"] }),
        ]),
    ];
}
