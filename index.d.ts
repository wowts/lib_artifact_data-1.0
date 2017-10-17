import { LuaArray } from "@wowts/lua";
export declare function RegisterCallback(arg0: any, arg1: any, arg2: any): void;
export declare function UnregisterCallback(arg0: any, arg1: any): void;
export declare function GetArtifactTraits(): [string, LuaArray<{
    spellID: string;
}>];
