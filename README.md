# Automatic Object Loader

![Automatic Object Loader window](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/automatic-object-loader.png?raw=true)

Ever wanted an easy way to select every object so you can build your dream sandbox park? Look no further than this plugin! With the simple click of a button, every object that matches any source you select will load in.

The load time will vary depending on how many objects match the filter. Once loading begins, you will see this window pop-up:

![Window with text "Loading..."](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/loading.png?raw=true)

After all these objects are successfully loaded, the text will update to the following:

![Window with text "Objects successfully loaded!"](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/successfully-loaded.png?raw=true)

## Getting the plugin

<!-- prettier-ignore -->
> [!IMPORTANT]
> Requires OpenRCT2 v0.4.6 or newer.

Download the `.js` file from the [latest release](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/releases/latest) and place it in the "plugin" folder. This can be found by opening OpenRCT2 and selecting "Open custom content folder" under the toolbox in the main menu.

---

## Custom Content

![Warning for selecting custom object](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/custom-object-warning.png?raw=true)

OpenRCT2's object limits are high enough that selecting all built-in objects will not reach this ceiling. However, custom objects can, which would produce an error such as this:

![Window with text "50 objects failed to load" in red](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/failed-to-load.png?raw=true)

Be wary of this when selecting "Custom" as a source. If you have a lot of custom objects, consider selecting the other sources you desire, then manually loading your preferred custom objects through the Object Selection window.

## Compatibility Objects

![Object Selection window with compatibility object text](https://github.com/KatieZeldaKat/openrct2-auto-object-loader/blob/v1.0.0/docs/images/compat-object.png?raw=true)

These are objects which can be deselected from the Object Selection window, but not selected again afterwards. Plugins can technically load these objects into the game. However, this plugin purposefully leaves them out given these are meant for backwards-compatibility and not for use in new parks.
