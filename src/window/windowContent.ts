import { SourceFilter, loadAllObjects } from "../objectLoader/objectLoader";
import { button, checkbox, groupbox, horizontal, store, twoway, vertical } from "openrct2-flexui";

const filter: SourceFilter = {
    rct1: twoway<boolean>(store(true)),
    added_attractions: twoway<boolean>(store(true)),
    loopy_landscapes: twoway<boolean>(store(true)),
    rct2: twoway<boolean>(store(true)),
    wacky_worlds: twoway<boolean>(store(true)),
    time_twister: twoway<boolean>(store(true)),
    openrct2_official: twoway<boolean>(store(true)),
    custom: twoway<boolean>(store(false)),
};

export function windowContent() {
    return [
        groupbox({
            text: "Sources",
            content: [horizontal(getCheckboxes())],
        }),
        button({
            text: "Load Selected Objects!",
            height: 25,
            onClick: () => loadAllObjects(filter),
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
