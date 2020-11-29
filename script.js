let inputComparison =
  '{"BMW:Ford":[-4],"BMW:Peugeot":[-7],"Skoda:Ford":[0],"BMW:Skoda":[-5],"Skoda:Peugeot":[-3],"Volvo:Peugeot":[-1],"BMW:Volvo":[-6],"Ford:Peugeot":[0],"Volvo:Ford":[0],"Volvo:Skoda":[-1]}';

const items = ["BMW", "Ford", "Peugeot", "Skoda", "Volvo"].sort();

// 0. Pomocnicze funkcje
const matrixProduct = (matrix1, matrix2) => {
  let result = [];
  for (let X = 0; X < matrix1.length; X++) {
    let newRow = [];
    for (let Y = 0; Y < matrix2[0].length; Y++) {
      let newDotProd = 0;
      for (let i = 0; i < matrix1[X].length; i++) {
        newDotProd += matrix1[X][i] * matrix2[i][Y];
      }
      newRow.push(newDotProd);
    }
    result.push(newRow);
  }
  return result;
};

const chunkObject = (obj) => {
  let strObj = JSON.stringify(obj);
  strObj = strObj
    .split(",")
    .map((item) =>
      item.includes("{")
        ? item.concat("}")
        : item.includes("}")
        ? "{" + item
        : "{" + item + "}"
    );
  return strObj.map((item) => JSON.parse(item));
};

const dechunkObject = (obj) => {
  return Object.assign({}, ...obj);
};

const generateReverseComparisonObj = (obj) => {
  const str = Object.keys(obj)[0];
  const val = Object.values(obj)[0];
  let newStr = str.split(":").reverse().join(":");
  let newVal = -val;

  return { [newStr]: [newVal] };
};

const generateDiagonalCell = (item) => {
  const key = `${item}:${item}`;
  const value = 0;

  return { [key]: [value] };
};

const appendDiagonalCells = (incompleteMatrix) => {
  for (const item of items) {
    const obj = generateDiagonalCell(item);
    incompleteMatrix[Object.keys(obj)[0]] = Object.values(obj)[0];
  }
};

const orderObjectsAlphabetically = (obj) => {
  const ordered = {};
  Object.keys(comps)
    .sort()
    .forEach(function (key) {
      ordered[key] = comps[key];
    });

  return ordered;
};

const createMatrixOfComparisons = (comparisonObj, items) => {
  let matrix = [];

  for (const v of Object.values(comparisonObj)) {
    matrix.push(v);
  }

  return chunkArray(matrix.flat(), items.length);
};

const getWeights = (matrix, items) => {
  const arr = [];
  const i = [...items];

  let s = 0;

  for (const row of matrix) {
    const itemName = i.shift();
    const itemWeight = Math.pow(
      row.reduce((x, y) => x * y, 1),
      1 / matrix.length
    );

    s += itemWeight;
    arr.push({
      [itemName]: itemWeight,
    });
  }

  return arr.map((obj) => {
    const [k, v] = Object.entries(obj)[0];
    obj[k] = v / s;
    return obj;
  });
};

const chunkArray = (array, pieces) => {
  let a = [],
    i,
    j,
    temparray,
    chunk = pieces;

  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray = array.slice(i, i + chunk);
    a.push(temparray);
  }

  return a;
};

// !!! Ta zamiana tylko dla testów. !!!
const convertAhpValuesOfObj = (obj) => {
  for (const [k, v] of Object.entries(obj)) {
    obj[k] = [convertToAhpVal(v[0])];
  }
};
// !!! W aplikacji to będzie o wiele wcześniej !!!

const convertToAhpVal = (val) => (val > 0 ? 1 / (val + 1) : Math.abs(val - 1));

const getConsistencyRatio = (matrix, weights) => {
  let wgs = weights.map((obj) => Object.values(obj));
  let consistencyIndex;
  let consistencyRatio;
  let lambdaMax;
  const matrixSize = matrix.length;
  const A4 = [];
  const randomIndex = {
    1: 0.0,
    2: 0.0,
    3: 0.58,
    4: 0.9,
    5: 1.12,
    6: 1.24,
    7: 1.32,
    8: 1.41,
    9: 1.45,
    10: 1.49,
  };

  let A3 = matrixProduct(
    matrix.map((row) => {
      return row.map((cell) => [cell]);
    }),
    wgs
  );

  A3 = A3.flat();
  wgs = wgs.flat();

  for (let i = 0; i < A3.length; i++) {
    A4.push(A3[i] / wgs[i]);
  }

  lambdaMax = A4.reduce((a, b) => a + b, 0) / A4.length;
  consistencyIndex = (lambdaMax - matrixSize) / (matrixSize - 1);
  consistencyRatio = consistencyIndex / randomIndex[matrixSize];

  return consistencyRatio;
};

let comps = JSON.parse(inputComparison);
comps = chunkObject(comps);

const curLength = comps.length;

for (let i = 0; i < curLength; i++) {
  const newComp = generateReverseComparisonObj(comps[i]);
  comps.push(newComp);
}

comps = dechunkObject(comps);
appendDiagonalCells(comps);
comps = orderObjectsAlphabetically(comps);
convertAhpValuesOfObj(comps);

const matrix = createMatrixOfComparisons(comps, items);
const weights = getWeights(matrix, items);
const cr = getConsistencyRatio(matrix, weights);
