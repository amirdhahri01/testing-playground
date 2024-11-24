
jest.mock("../../app/doubles/OtherUtils", () => ({ ...jest.requireActual("../../app/doubles/OtherUtils"), calculateComplexity: () => { return 10 } }))
jest.mock("uuid" , () => ( {v4 : () => {return 4}} ) )

import * as OtherUtils from "../../app/doubles/OtherUtils"

describe("module tests", () => {

    it("Calculate complexity", () => {
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10)
    })

    it("Keep other fnuctions", () => {
        const result = OtherUtils.toUpperCase("abc");
        expect(result).toBe("ABC")
    })

    it("String with id", () => {
        const result = OtherUtils.toLowerCaseWithID("abc");
        expect(result).toBe("abc4")
        console.log(result);
        
    })

})