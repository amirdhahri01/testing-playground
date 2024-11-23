import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils"

describe("Utils test suite" , () => {

    describe("StringUtils tests" , () => {
        it("Should return correct uppercase", ()=>{
            const sut = new StringUtils();
            const actual = sut.toUpperCase("abc");
            expect(actual).toBe("ABC")
        })  
    })

    // it("Should return uppercase of a valid string" , () => {
    //     //Arrange :
    //     const sut = toUpperCase;
    //     const expected = "AMIR DHAHRI"
    //     //Act : 
    //     const actual = sut("amir dhahri");
    //     //Assert : 
    //     expect(actual).toBe(expected)
    // })

    // describe("getStringInfo for arg My-String should" , () => {
    //     it("Return right length" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.characters).toHaveLength(9)
    //     })  
    //     it("Return right lower case" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.lowerCase).toBe("my-string")
    //     })
    //     it("Return right upper case" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.upperCase).toBe("MY-STRING")
    //     })
    //     it("Return right characters" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.characters).toEqual(["M","y","-","S","t","r","i","n","g"])
    //         expect(actual.characters).toContain<string>("M")
    //         expect(actual.characters).toEqual(expect.arrayContaining(["i","n","g","-","S","t","r","M","y"]))
    //     })
    //     it("Return define extra info" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.extraInfo).toBeDefined();
    //     })
    //     it("Return right  extra info" , () => {
    //         const actual = getStringInfo("My-String");
    //         expect(actual.extraInfo).toEqual({})
    //     })
    // })

    // describe.only("ToUpperCase Examples" , () => {
    //     it.each([{input:"abc" , expected:"ABC"},
    //             {input:"My-String" , expected:"MY-STRING"},
    //             {input:"def" , expected:"DEF"}])("$input ToUpperCase should be $expected" , ({input, expected}) => {
    //                 const actual = toUpperCase(input);
    //                 expect(actual).toBe(expected)
    //             })
    // })

    // it.only("Should return info for a valid string" , () => {
       
    //     expect(actual.extraInfo).not.toBe(undefined)
    //     expect(actual.extraInfo).toBeUndefined();
        
    //     expect(actual.extraInfo).toBeTruthy();
    // })
})

// export type stringInfo = {
//     lowerCase : string,
//     upperCase : string,
//     characters : string [],
//     length : number,
//     extraInfo : Object | undefined
// }