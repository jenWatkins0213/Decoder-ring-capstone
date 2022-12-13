// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



// shift = number of times moved over
// positive # means right, negative # means left
// encode is either encode or decode, default set to true
// if shift value undefined, 0, or less than -25, greater than 25 return false
// spaces??
// ignore capital letters
// if letter is shifted off od alphabet it shold wrap back around

// look at the input and see if it was even there *test*
// if shift value is unde, === 0 <-25,>25 return false
// look at the input and the shift value 
// look at the regualr alphabet and shift the letetrs one by one.

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let lettersString = "abcdefghijklmnopqrstuvwxyz"
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    const lowerCase = input.toLowerCase();
    let result = "";
    if(shift === 0 || shift === undefined || shift <= -25 || shift >= 25) {
      return false;
    } 
    if(encode === false) {
      shift = shift * -1;
      // return  input gibberish shifted back *shift* value
    } 
      // return input message shifted r || l based on *shift value
      // loop through the whole damn input and find the letter in the letters array that matched then move == shift amount and log that letter in a new string (an array that i toString)
      for(let i=0;i<lowerCase.length;i++){
        let inputReturn = lowerCase[i];
        if(lettersString.includes(inputReturn)){
          let shiftedId = lettersString.indexOf(inputReturn)+ shift;
          
        if(shiftedId > 25) {
          shiftedId += - 26;
       }
        if(shiftedId < 0) {
          shiftedId += 26;
        }
        result += lettersString.charAt(shiftedId);
          // console.log(result);
        } else {
          result += inputReturn;
        } 
      }
      // console.log(result);
      return result;
  }

  // caesar("nwunou qvwqysbg", -12, false);

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
