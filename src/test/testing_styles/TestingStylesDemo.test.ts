import { AwsomeDatabase } from "../../app/testing_styles/TestingStylesDemo"




describe("Awesome db test suite" , () => {

    it("Should insert user" , () => {
        const sut = new AwsomeDatabase(new Array());
        const myUser = {
            name : "Amir Dhahri", 
            age :  21
        }
        sut.add(myUser);
        const actual = sut.getByName("Amir Dhahri")
        expect(actual).toEqual(myUser)

    })

    it("Should insert user and call the right methods" , () => {
        const arrayMock = {
            push : jest.fn(),
            find : jest.fn()
        }
        const sut = new AwsomeDatabase(arrayMock as any);
        const myUser = {
            name : "Jhon", 
            age :  30
        }
        sut.add(myUser);
        const actual = sut.getByName("Jhon")
        expect(arrayMock.push).toHaveBeenCalledTimes(1);
        expect(arrayMock.find).toHaveBeenCalledTimes(1);
    })
})