export const name = "name-of-your-plugin";
export const authors = ["Your name"];
export const license = "MIT";

export const version = "1.0.0";
export const type = "remote";

/**
 * The following field determines which OpenRCT2 API version to use. It's best to always target
 * the latest release version, unless you want to use specific versions from a newer develop
 * version. Version 85 equals the v0.4.11 release.
 * @see https://github.com/OpenRCT2/OpenRCT2/blob/v0.4.11/src/openrct2/scripting/ScriptEngine.h#L50
 */
export const targetApiVersion = 85;
