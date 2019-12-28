const opCodes = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26, 27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5];

let phaseSettings = permute([5, 6, 7, 8, 9]);
let thrusterArray = [];

phaseSettings.forEach(phaseSetting => {
  startAmpOperation(opCodes, phaseSetting, 5, phaseSetting[0]);
});

// This is a heap's algo implementation of permutation. I need to learn it.

function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

function startAmpOperation(codes, phaseSetting, ampCount, input1, input2 = 0) {
  let index = 0;
  let inputCount = 0;
  let ampOut = 0;
  while (ampCount > 0 && index < codes.length) {
    let stringOpCode = codes[index].toString();
    let paddedOpCode = stringOpCode.padStart(4, "0");
    let finalOpCode = paddedOpCode[2].concat(paddedOpCode[3]);
    let value1 = paddedOpCode[1] === "0" ? codes[codes[index + 1]] : codes[index + 1];
    let value2 = paddedOpCode[0] === "0" ? codes[codes[index + 2]] : codes[index + 2];
    switch (finalOpCode) {
      case "01":
        codes[codes[index + 3]] = value1 + value2;
        index += 4;
        break;

      case "02":
        codes[codes[index + 3]] = value1 * value2;
        index += 4;
        break;

      case "03":
        if (paddedOpCode[1] === "0") {
          codes[codes[index + 1]] = inputCount ? input2 : input1;
        } else {
          codes[index + 1] = inputCount ? input2 : input1;
        }
        index += 2;
        inputCount = 1;
        break;

      case "04":
        console.log("Output Value: ", value1);
        index += 2;
        ampOut = value1;
        break;

      case "05":
        if (value1 !== 0) {
          index = value2;
        } else {
          index += 3;
        }
        break;

      case "06":
        if (value1 === 0) {
          index = value2;
        } else {
          index += 3;
        }
        break;

      case "07":
        if (value1 < value2) {
          codes[codes[index + 3]] = 1;
        } else {
          codes[codes[index + 3]] = 0;
        }
        index += 4;
        break;

      case "08":
        if (value1 === value2) {
          codes[codes[index + 3]] = 1;
        } else {
          codes[codes[index + 3]] = 0;
        }
        index += 4;
        break;

      case "99":
        --ampCount;
        input1 = phaseSetting[5 - ampCount];
        input2 = ampOut;

        if (ampCount === 0) {
          thrusterArray.push(input2);
        }
        startAmpOperation(opCodes, phaseSetting, ampCount, input1, input2);
        return;

      default:
        break;
    }
    // index++;
  }
  return;
}

let maxValue = thrusterArray.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(maxValue);
