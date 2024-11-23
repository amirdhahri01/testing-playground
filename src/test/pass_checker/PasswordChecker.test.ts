import { PasswordChecker } from "../../app/pass_checker/PasswordChecker"


describe("PasswordChecker test suite" , () => {
    let sut : PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it("Password with less than 8 chars is invalid" , () => {
        const actual = sut.checkPassword("1234567");
        expect(actual).toBe(false);
    })
    it("Password with more than or equal to 8 chars is ok" , () => {
        const actual = sut.checkPassword("12345678");
        expect(actual).toBe(true);
    })

    it("Password with no upper case is invalid" , () => {
        const actual = sut.checkPassword("1234abcd");
        expect(actual).toBe(true);
    })
    it("Password with upper case is valid" , () => {
        const actual = sut.checkPassword("1234abcD");
        expect(actual).toBe(true);
    })

    it("Password with no lower case is invalid" , () => {
        const actual = sut.checkPassword("1234ABCD");
        expect(actual).toBe(true);
    })
    it("Password with lower case is valid" , () => {
        const actual = sut.checkPassword("1234abcD");
        expect(actual).toBe(true);
    })
})