const minValue = 256310;
const maxValue = 732736;

let numberOfPasswords = 0;

let count = getTotalPasswordCount();

console.log(count);

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
        console.log(stringPass); // unwanted passwords.
      } else {
        numberOfPasswords++;
      }
    }
  }
  return numberOfPasswords;
}
