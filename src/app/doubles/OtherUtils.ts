export type stringInfo = {
    lowerCase : string, 
    upperCase : string, 
    characters : string [],
    length : number,
    extraInfo : object | undefined
}

type loggerServiceCallBack = (arg : string) => void;

export function toUpperCase(arg : string){
    return arg.toUpperCase();
}

export function toLowerCaseWithID(arg : string){
    return arg.toLowerCase();
}

export function calculateComplexity(stringInfo : stringInfo){
    return Object.keys(stringInfo.extraInfo).length  * stringInfo.length;
}

export function toUpperCaseWithCB(arg : string , callBack : loggerServiceCallBack){
    if(!arg){
        callBack("Invalid argument!")
        return;
    }
    callBack(`Called function with ${arg}`)
    return arg.toUpperCase();
}

export class OtherStringUtils{

    private callExternalService(){
        console.log("Calling external service!!!");
    }

    public toUpperCase(arg : string){
        return arg.toUpperCase();
    }

    public logString(arg : string){
        console.log(arg);
    }

}