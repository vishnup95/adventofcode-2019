const minValue = 256310;
const maxValue = 732736;


// Atleast 1 number must be repeated twice... That's the golden rule. This is long and badly done. Regex will solve in one line. 

let numberOfPasswords = 0;

let count = getTotalPasswordCount();

console.log("Number of possible passwords:", count);

function getTotalPasswordCount() {
  for (let pass = minValue; pass <= maxValue; pass++) {
    let stringPass = pass.toString();
    if (
      stringPass[0] <= stringPass[1] &&
      stringPass[1] <= stringPass[2] &&
      stringPass[2] <= stringPass[3] &&
      stringPass[3] <= stringPass[4] &&
      stringPass[4] <= stringPass[5]
    ) {
      if (
        stringPass[0] !== stringPass[1] &&
        stringPass[1] !== stringPass[2] &&
        stringPass[2] !== stringPass[3] &&
        stringPass[3] !== stringPass[4] &&
        stringPass[4] !== stringPass[5]
      ) {
        // console.log("Unwanted : ", stringPass);
      } else {
        let firstCommonChar = [];
        let secondCommonChar = [];
        let thirdCommonChar = [];
        let fourthCommonChar = [];
        let fifthCommmonChar = [];
        //console.log("Possible", stringPass);
        for (let char = 0; char < stringPass.length; char++) {
          if (stringPass[0] === stringPass[char]) {
            firstCommonChar.push(stringPass[char]);
          } else if (stringPass[1] === stringPass[char]) {
            secondCommonChar.push(stringPass[char]);
          } else if (stringPass[2] === stringPass[char]) {
            thirdCommonChar.push(stringPass[char]);
          } else if (stringPass[3] === stringPass[char]) {
            fourthCommonChar.push(stringPass[char]);
          } else if (stringPass[4] === stringPass[char]) {
            fifthCommmonChar.push(stringPass[char]);
          }
        }
        if (
          firstCommonChar.length === 2 ||
          secondCommonChar.length === 2 ||
          thirdCommonChar.length === 2 ||
          fourthCommonChar.length === 2 ||
          fifthCommmonChar.length === 2
        ) {
          console.log("obtained : ", stringPass);
          numberOfPasswords++;
        }
      }
    }
  }
  return numberOfPasswords;
}
