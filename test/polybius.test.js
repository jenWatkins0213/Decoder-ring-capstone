// Write your tests here!
// ENCODE
// needs to include spaces
// the output should be a string
// ignores capital letters
// i/j both represent 42
// DECODE
// needs to include spaces
// the number of char in the string should be even 
// if the output is not even, return false
// ignores capital letters

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// 42 needs to = both i/j
describe("polybius tests by Jen", ()=>{
describe ("encode", ()=>{
    it("should should encode the message",()=>{
        const input = "lizard";
        const actual = polybius(input);
        const expected = "134255112441"

        expect(actual).to.equal(expected);
    })

    it("both i and j should translate to 42",()=>{
        const input = "jiggle";
        const actual = polybius(input);
        const expected = "424222221351";

        expect(actual).to.equal(expected);
    })

    it("should leave spaces",()=>{
        const input = "green lizard";
        const actual = polybius(input);
        const expected = "2224515133 134255112441";

        expect(actual).to.equal(expected);
    })

})
describe("decode",()=>{
    it("should decode the message",()=>{
        const input = "134255112441";
        const actual = polybius(input, false);
        const expected = "li/jzard"

        expect(actual).to.equal(expected);
    })  
    it("should translate 42 to both i and j",()=>{
        const input = "134255112441";
        const actual = polybius(input, false);
        
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    })
    it("should leave spaces",()=>{
        const input = "2224515133 134255112441";
        const actual = polybius(input, false);
        const expected = "green li/jzard";

        expect(actual).to.equal(expected);
    })
    it("should return false if numbers length is odd",()=>{
        const input = "254 53573418"
        const actual = polybius(input, false);

        expect(actual).to.be.false;
    })
})
})
