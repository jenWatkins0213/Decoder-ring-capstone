// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// const other ="xoyqmcgrukswaflnthdjpzibev"
  // look at the input and find the letters oin the regular alphabet
  // find the corosponding letters in the given alphabet (index)
  // log new letters


const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  const regAlph = "abcdefghijklmnopqrstuvwxyz"
  // console.log(regAlph);

  function substitution(input, alphabet, encode = true) {
    // solution code here 
    // if alphabet = !26, has repeating char, isn't given, return false

    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i<alphabet.length; i++){
      if(alphabet.split(alphabet[i]).length > 2) return false
    }
    
    const lowerCase= input.toLowerCase();
    // look at input
    let inputLoopA = ""
    let inputLoopB = ""
    let result = ""
    let letterIdA = ""
    let letterIdB = ""
   if(encode === true) {
    for(let i=0;i<lowerCase.length;i++) {
      inputLoopA = lowerCase[i];
      // console.log(inputLoop);
      if(regAlph.includes(inputLoopA)){
        letterIdA = regAlph.indexOf(inputLoopA);
        // console.log(letterIdA);
    // return the letters in alphabet at the same index 
    result += alphabet[letterIdA];
    // console.log(ehh);
    // console.log(letterId)
    } else {
      result += inputLoopA;
    }
  }
} else {
    for(let i=0;i<lowerCase.length;i++) {
      inputLoopB = lowerCase[i];
      // console.log(inputLoop);
      if(alphabet.includes(inputLoopB)){
        letterIdB = alphabet.indexOf(inputLoopB);
        result += regAlph[letterIdB]
      } else {
        result += inputLoopB;
      }
  }
}
    // console.log(result);
    return result;
  } 
    

  console.log(substitution("my lizard",".lmoknijbuhvygctfxrdzeswaq"));

  console.log(substitution("vbqpxo","plmoknijbuhvygctfxrdzeswaq", false));

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


// console.log("chicken butt")

// ya vbqpxo my lizard