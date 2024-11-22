import { getStringInfo, toUpperCase } from "../app/Utils"

describe("Utils test suite" , () => {
    it("Should return uppercase of a valid string" , () => {
        //Arrange :
        const sut = toUpperCase;
        const expected = "AMIR DHAHRI"
        //Act : 
        const actual = sut("amir dhahri");
        //Assert : 
        expect(actual).toBe(expected)
    })

    it.only("Should return info for a valid string" , () => {

        const actual = getStringInfo("My-String");

        expect(actual.lowerCase).toBe("my-string")
        expect(actual.upperCase).toBe("MY-STRING")
        expect(actual.length).toBe(9)
        expect(actual.characters.length).toBe(9)
        expect(actual.characters).toEqual(["M","y","-","S","t","r","i","n","g"])
        expect(actual.characters).toContain<string>("M")
        expect(actual.extraInfo).toEqual({})
        expect(actual.characters).toEqual(expect.arrayContaining(["i","n","g","-","S","t","r","M","y"]))
        expect(actual.extraInfo).not.toBe(undefined)
        expect(actual.extraInfo).toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    })
})

// export type stringInfo = {
//     lowerCase : string,
//     upperCase : string,
//     characters : string [],
//     length : number,
//     extraInfo : Object | undefined
// }