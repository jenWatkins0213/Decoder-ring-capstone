// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {

 

  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
   const givenSquare = {
    1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
    2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
    3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
    4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
    5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
  };  

  const lowerCase = input.toLowerCase().split('');
  const noSpace = lowerCase.filter(num => num != ' ');
  // console.log(lowerCase);
  if(encode) {
    const encodeResult = [];
    for (let char of lowerCase){
      for(let i= 1; i< 6; i++){
        for(let j= 1; j<6; j++){
          if(givenSquare[i][j].includes(char)){
            encodeResult.push(j);
            encodeResult.push(i);
          }
        }
      }
      if(char === ' '){encodeResult.push(' ')};
    }
    return encodeResult.join('');
  } else {
    let decodeResult = "";
    if(noSpace.length % 2 != 0) return false;
    for (let index = 0;index< lowerCase.length; index += 2){
      if (lowerCase[index] === ' ') {
        decodeResult += ' ';
        index--; 
      } else {decodeResult += givenSquare[lowerCase[index + 1]][lowerCase[index]];}
    }
    // console.log(decodeResult);
    return decodeResult;
  }

  }
  // console.log(polybius("green lizard"))
  // expect "134255112441"
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

