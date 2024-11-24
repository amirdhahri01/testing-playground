export type User = {
    name : string,
    age : number
}

export class AwsomeDatabase{

    private elements : Array<User>;

    constructor(elements : Array<User>){
        this.elements = elements;
    }

    public add(user : User){
        this.elements.push(user);
    }

    public getByName(name : string){
        return this.elements.find(x => x.name === name)
    }
}