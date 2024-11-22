import { toUpperCase } from "../app/Utils"

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
})