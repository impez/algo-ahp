class AHPHandler {
  constructor(compsList = [], type = "") {
    this.compsList = compsList;
    this.type = type;
  }

  getType = () => this.type;

  getComparisons = () => this.compsList;

  setComparisons = (compsList, type) => {
    this.compsList = compsList;
    this.type = type;

    return this.compsList;
  };
}

const subjects = {
  Gry: [
    "Wiedźmin 3",
    "RDR2",
    "Civilization VI",
    "Minecraft",
    "GTA V",
    "League of Legends",
  ],
};

class MathHelper {
  static convertToAhpVal = (val) =>
    val > 0 ? 1 / (val + 1) : Math.abs(val - 1);

  static convertAhpValuesOfObj = (obj) => {
    for (const [k, v] of Object.entries(obj)) {
      obj[k] = [this.convertToAhpVal(v[0])];
    }
  };

  static createMatrixOfComparisons = (comparisonObj, items) => {
    let matrix = [];

    for (const v of Object.values(comparisonObj)) {
      matrix.push(v);
    }

    return this.chunkArray(matrix.flat(), items.length);
  };

  static generateReverseComparisonObj = (obj) => {
    const str = Object.keys(obj)[0];
    const val = Object.values(obj)[0];
    let newStr = str.split(":").reverse().join(":");
    let newVal = -val;

    return { [newStr]: [newVal] };
  };

  static chunkArray = (array, pieces) => {
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

  static generateDiagonalCell = (item) => {
    const key = `${item}:${item}`;
    const value = 0;

    return { [key]: [value] };
  };

  static dechunkObject = (obj) => {
    return Object.assign({}, ...obj);
  };

  static chunkObjects = (obj) => {
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

  static orderObjectsAlphabetically = (obj) => {
    const ordered = {};
    Object.keys(obj)
      .sort()
      .forEach(function (key) {
        ordered[key] = obj[key];
      });

    return ordered;
  };

  static appendDiagonalCells = (incompleteMatrix, items) => {
    for (const item of items) {
      const obj = this.generateDiagonalCell(item);
      incompleteMatrix[Object.keys(obj)[0]] = Object.values(obj)[0];
    }
  };
}

class AHPItem {
  constructor(comps = {}, items = []) {
    this.comps = comps;
    this.items = items.sort();
  }

  getComps = () => this.comps;

  getItems = () => this.items;

  getMatrix = () => this.matrix;

  getWeights = () => this.weights;

  getMetadata = () => {
    this.weights, this.matrix;
  };

  initProcess = () => {
    let comparisons = MathHelper.chunkObjects(this.comps);
    const curLength = comparisons.length;

    for (let i = 0; i < curLength; i++) {
      const newComp = MathHelper.generateReverseComparisonObj(comparisons[i]);
      comparisons.push(newComp);
    }

    comparisons = MathHelper.dechunkObject(comparisons);
    MathHelper.appendDiagonalCells(comparisons, this.items);
    comparisons = MathHelper.orderObjectsAlphabetically(comparisons);
    MathHelper.convertAhpValuesOfObj(comparisons);

    this.matrix = MathHelper.createMatrixOfComparisons(comparisons, this.items);
    console.log(this.matrix);
  };
}

let ahpData = rawData.map((item) => JSON.parse(item.ahpvalues));

const ahpDataHandler = new AHPHandler(ahpData, "ahp");

const ahpItem = new AHPItem(ahpDataHandler.compsList[0], subjects["Gry"]);

ahpItem.initProcess();
