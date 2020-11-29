let inp =
  '{"C#:Python":[-1,0,1],"C#:Haskell":[-1,0,1],"JavaScript:Haskell":[-8,-8,-7.84],"C++:JavaScript":[6.13,7.55,8],"Python:Haskell":[-5.05,-4.16,-0.84],"C#:JavaScript":[5.02,7.59,8],"C++:Python":[-2.87,-2.55,0.24],"C++:C#":[-5.4,-4.73,-1.06],"C++:Haskell":[-7.4,-6.98,-5.46],"JavaScript:Python":[-8,-7.71,-5.62]}';

inp = JSON.parse(inp);

const getRandomChoiceFromTriangle = (a, c, b) => {
  if (a > b) {
    let temp = b;
    b = a;
    a = temp;
  }

  let u = Math.random();
  let f;

  if (a === b) {
    return a;
  } else {
    f = (c - a) / (b - a);
  }

  return 0 < u && u < f
    ? a + Math.sqrt(u * (b - a) * (c - a))
    : f < u && u < 1
    ? b - Math.sqrt((1 - u) * (b - a) * (b - c))
    : u === 0
    ? a
    : b; // u === 1
};

const fuzzyToCrispInput = (input) => {
  const cloneStr = JSON.stringify(input);
  const newInput = JSON.parse(cloneStr);

  for (const [k, v] of Object.entries(newInput)) {
    newInput[k] = [getRandomChoiceFromTriangle(...v)];
  }

  return newInput;
};

const fuzzyToCrispMulTimes = (input, n) => {
  const obj = {};
  const arr = [];
  const keys = Object.keys(input);

  for (let i = 0; i < n; i++) {
    arr.push(fuzzyToCrispInput(input));
  }

  for (let i = 0; i < arr.length; i++) {
    for (const key of keys) {
      if (obj[key] === undefined) obj[key] = 0;
      obj[key] += arr[i][key][0];
    }
  }

  for (const [k, v] of Object.entries(obj)) {
    obj[k] = [v / n];
  }

  return obj;
};
