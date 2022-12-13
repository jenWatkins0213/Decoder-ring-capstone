// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// if shift value is 0,undefined,less than -25, greater than 25, should return false
// should return answer with spaces intact
// ignores capital letters
// wraps around front and back of aphabet
// should encode massage by shifting letters
// shift to the left to decode a message

describe("Tests by Jen", ()=> {
describe("Encode return false",() => {
it("should return false if shift value is 0", () => {
    const input ="chicken little";
    const shift = 0; 
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
})

it("should return false if shift is greater than 25",()=>{
    const input ="chicken little";
    const shift = 27;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
})
it("should return false if shift is less than -25",()=>{
    const input ="chicken little";
    const shift = -28;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
})
})
describe("Encoding the message",()=>{
it("It should encode the input by shifting letters",() => {
    const input ="chicken little";
    const shift = 4;
    const actual = caesar(input,shift);
    const expected = "glmgoir pmxxpi"

    expect(actual).to.equal(expected);
})
it("It should other symbols and spaces",()=>{
    const input ="chicken little";
    const shift = 4;
    const actual = caesar(input,shift);
    const expected = "glmgoir pmxxpi"

    expect(actual).to.equal(expected);
})
it("It should ignore capital letters",()=>{
    const input ="Chicken LitTle";
    const shift = 4;
    const actual = caesar(input,shift);
    const expected = "glmgoir pmxxpi"

    expect(actual).to.equal(expected);
})
it("Handles problems with end of alphabet",()=>{
    const input = "ZigZag";
    const shift = 6;
    const actual = caesar(input,shift);
    const expected = "fomfgm";

    expect(actual).to.equal(expected);
})
it("shifts left for negative shift",()=>{
    const input = "chicken little";
    const shift = -6;
    const actual = caesar(input,shift);
    const expected = "wbcweyh fcnnfy"

    expect(actual).to.equal(expected);
})
})
describe("Decoding the message",()=>{
it("should decode the message",()=>{
    const input = "tyztbve czkkcv";
    const shift = 9;
    const actual = caesar(input,shift);
    const expected = "chicken little";

    expect(actual).to.equal(expected);
})
it("shifts left for negative shift-decode",()=>{
    const input = "lqrltnw urccun";
    const shift = -9;
    const actual = caesar(input,shift);
    const expected = "chicken little"

    expect(actual).to.equal(expected);
})
it("Handles problems with end of alphabet",()=>{
    const input = "tcatua";
    const shift = 6;
    const actual = caesar(input,shift);
    const expected = "zigzag";

    expect(actual).to.equal(expected);
})
it("It should other symbols and spaces",()=>{
    const input ="ydeygaj heppha";
    const shift = 4;
    const actual = caesar(input,shift);
    const expected = "chicken little"

    expect(actual).to.equal(expected);
})
it("It should ignore capital letters",()=>{
    const input ="ydeYgaj hePpHa";
    const shift = 4;
    const actual = caesar(input,shift);
    const expected = "chicken little"

    expect(actual).to.equal(expected);
})
})
})