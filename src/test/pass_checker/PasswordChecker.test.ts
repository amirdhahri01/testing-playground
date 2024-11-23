import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"


describe("PasswordChecker test suite" , () => {
    let sut : PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it("Password with less than 8 chars is invalid" , () => {
        const actual = sut.checkPassword("1234567");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    }) 
    it("Password with more than or equal to 8 chars is ok" , () => {
        const actual = sut.checkPassword("12345678aB");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })

    it("Password with no upper case is invalid" , () => {
        const actual = sut.checkPassword("1234abcd");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })
    it("Password with upper case is valid" , () => {
        const actual = sut.checkPassword("1234aBcd");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it("Password with no lower case is invalid" , () => {
        const actual = sut.checkPassword("1234ABCD");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })
    it("Password with lower case is valid" , () => {
        const actual = sut.checkPassword("1234abcD");
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    })

    it("Complex password is valid" , () => {
        const actual =  sut.checkPassword("Xdgxcx@200#3");
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBeTruthy();
    })

    it("Admin password with no number is invalid" , () => {
        const actual =  sut.checkAdminPassword("Xdgxcx@#");
        expect(actual.valid).toBeFalsy();
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    })

    it("Admin password with number is valid" , () => {
        const actual =  sut.checkAdminPassword("Xdgxcx@200#3");
        expect(actual.valid).toBeTruthy();
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
    })

    // it("Password with less than 8 chars is invalid" , () => {
    //     const actual = sut.checkPassword("1234567");
    //     expect(actual).toBe(false);
    // })
    // it("Password with more than or equal to 8 chars is ok" , () => {
    //     const actual = sut.checkPassword("12345678");
    //     expect(actual).toBe(true);
    // })

    // it("Password with no upper case is invalid" , () => {
    //     const actual = sut.checkPassword("1234abcd");
    //     expect(actual).toBe(true);
    // })
    // it("Password with upper case is valid" , () => {
    //     const actual = sut.checkPassword("1234abcD");
    //     expect(actual).toBe(true);
    // })

    // it("Password with no lower case is invalid" , () => {
    //     const actual = sut.checkPassword("1234ABCD");
    //     expect(actual).toBe(true);
    // })
    // it("Password with lower case is valid" , () => {
    //     const actual = sut.checkPassword("1234abcD");
    //     expect(actual).toBe(true);
    // })
})