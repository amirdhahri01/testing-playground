/* istanbul ignore next */
export function toUpperCase(arg : string){
    return arg.toUpperCase();
}
/* istanbul ignore next */
export type stringInfo = {
    lowerCase : string,
    upperCase : string,
    characters : string [],
    length : number,
    extraInfo : Object | undefined
}
/* istanbul ignore next */
export function getStringInfo(arg : string) : stringInfo{
    return {
        lowerCase : arg.toLowerCase(),
        upperCase : arg.toUpperCase(),
        characters : Array.from(arg),
        length : arg.length, 
        extraInfo : {}
    }
}

export class StringUtils{
    public toUpperCase(arg : string){
        return arg.toUpperCase();
    }
}