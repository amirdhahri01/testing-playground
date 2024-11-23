import { calculateComplexity, OtherStringUtils, toUpperCaseWithCB } from "../../app/doubles/OtherUtils"

describe("OtherUtils test suite" , () => {


    describe("OtherStringUtils tests with spies" , () => {
        let sut : OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        })

        it("Use a spy to track calls" , () => {
            const toUpperCaseSpy = jest.spyOn(sut , "toUpperCase");
            sut.toUpperCase("asa")
            expect(toUpperCaseSpy).toHaveBeenCalledWith("asa")
            expect(toUpperCaseSpy).toHaveBeenCalledTimes(1)
            expect(toUpperCaseSpy).toHaveBeenCalled()
        })

        it("Use a spy to track calls from other modules" , () => {
            const toUpperCaseSpy = jest.spyOn(sut , "logString");
            sut.logString("Amir Dhahri")
            expect(toUpperCaseSpy).toHaveBeenCalledWith("Amir Dhahri")
            expect(toUpperCaseSpy).toHaveBeenCalledTimes(1)
            expect(toUpperCaseSpy).toHaveBeenCalled()
        })

        it("Use a spy to replace the implementation of method" , () => {
            const toUpperCaseSpy = jest.spyOn(sut as any, "callExternalService").mockImplementation(()=>{
                console.log("Calling mocked implementation!!!!!!!!!");
            });
            (sut as any).callExternalService()
            expect(toUpperCaseSpy).toHaveBeenCalledTimes(1)
            expect(toUpperCaseSpy).toHaveBeenCalled()
        })

    })

    // describe("Tracking callbacks with jest mock" , () => {
        
    //     const callBackMock = jest.fn();

    //     it("Calls callback for invalid argument - trach calls" , () => {
    //         const actual  = toUpperCaseWithCB("" , callBackMock);
    //         expect(actual).toBeUndefined();
    //         expect(callBackMock).toHaveBeenCalledWith("Invalid argument!")
    //         expect(callBackMock).toHaveBeenCalledTimes(1);
    //     })
        
    //     it("Calls callback for invalid argument - trach calls" , () => {
    //         const actual = toUpperCaseWithCB("abc" , callBackMock);
    //         expect(actual).toBe("ABC");
    //         expect(callBackMock).toHaveBeenCalledWith("Called function with abc");
    //         expect(callBackMock).toHaveBeenCalledTimes(2);
    //     })

    // })

    // describe("Tracking callbacks" , ()=>{

    //     let cbArgs = [];
    //     let timesCalled = 0;

    //     function callBackMock(arg : string){
    //         cbArgs.push(arg);
    //         timesCalled++;
    //     }  
    //     afterEach(() => {
    //         timesCalled = 0;
    //     })

    //     it("Calls callback for invalid argument - trach calls" , () => {
    //         const actual  = toUpperCaseWithCB("" , callBackMock);
    //         expect(actual).toBeUndefined();
    //         expect(cbArgs).toContain("Invalid argument!");
    //         expect(timesCalled).toBe(1);
    //     })
        
    //     it("Calls callback for invalid argument - trach calls" , () => {
    //         const actual = toUpperCaseWithCB("" , callBackMock);
    //         expect(actual).toBeUndefined();
    //         expect(cbArgs).toContain("Invalid argument!");
    //         expect(timesCalled).toBe(1);
    //     })
    // })

    // it("ToUpperCase - calls callback for invalid argument" , () => {
    //     const actual = toUpperCaseWithCB("Hello World" , (s) => {
    //         console.log(s);
            
    //     });
    //     expect(actual).toBe("HELLO WORLD");
    // })

    // it("Calculates complexity" , () => {
    //     const someInfo = {
    //         length : 5,
    //         extraInfo : {
    //             field1 : "Some info",
    //             field2 : "SomeOtherInfo"
    //         }
    //     }
    //     const actaul = calculateComplexity(someInfo as any);
    //     expect(actaul).toBe(10)
    // })

})  