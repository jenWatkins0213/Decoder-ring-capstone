// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests by Jen",()=>{
    describe("errors",()=>{
        it("if substitution alphabet is missing, return false",()=>{
            const input = "lizard"
            const actual = substitution(input);
        
            expect(actual).to.be.false;
        })
        it("should return false if subsitution alphabet isn't 26 characters",()=>{
            const input = "lizard";
            const alphabet = "lmnop";
            const actual = substitution(input,alphabet);

            expect(actual).to.be.false;
        })

        it("should return false if subsitution alphabet isn't 26 characters",()=>{
            const input = "lizard";
            const alphabet = "lmmnoop";
            const actual = substitution(input,alphabet);

            expect(actual).to.be.false;
        })
    })
    describe("encoding",()=>{
        it("should encode a message", () => {
            const input = "lizard";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(input, alphabet);
            const expected = "vbqpxo";
      
            expect(actual).to.equal(expected);
    })
    it("should work with unique characters", () => {
        const input = "lizard";
        const alphabet = ".lmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        const expected = "vbq.xo";
  
        expect(actual).to.equal(expected);
    });
      it("should keep spaces", () => {
        const input = "my lizard";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        const expected = "ya vbqpxo";
  
        expect(actual).to.equal(expected);
      });
})
describe("decoding",()=>{
    it("should decode", ()=>{
        const input = "ya vbqpxo";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, false);
        const expected = "my lizard";
  
        expect(actual).to.equal(expected);
    })
    it("should work with unique characters", () => {
        const input = "vbq.xo";
        const alphabet = ".lmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet,false);
        const expected = "lizard";
  
        expect(actual).to.equal(expected);
    });
    it("should keep spaces", ()=>{
        const input = "ya vbqpxo";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, false);
        const expected = "my lizard";
  
        expect(actual).to.equal(expected);
    })
})
})
