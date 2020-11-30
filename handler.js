const rawData = [
  {
    subject: "Gry",
    ahpvalues:
      '{"RDR2:GTA V":[-4],"League of Legends:RDR2":[1],"Wiedźmin 3:GTA V":[-7],"Wiedźmin 3:Minecraft":[-7],"League of Legends:Minecraft":[-1],"Civilization VI:League of Legends":[1],"Minecraft:RDR2":[4],"League of Legends:GTA V":[-1],"Civilization VI:GTA V":[-2],"Civilization VI:RDR2":[2],"Wiedźmin 3:League of Legends":[-5],"Wiedźmin 3:RDR2":[-4],"Wiedźmin 3:Civilization VI":[-7],"Civilization VI:Minecraft":[0],"Minecraft:GTA V":[-1]}',
    fahpvalues:
      '{"League of Legends:Minecraft":[-3.55,-0.15,1.64],"League of Legends:GTA V":[-2.11,-1.31,-0.54],"RDR2:GTA V":[-2.05,-0.86,1],"Civilization VI:League of Legends":[-1,0,1.57],"Civilization VI:Minecraft":[-1.83,0,1],"Wiedźmin 3:Civilization VI":[-1.92,-0.88,1],"Minecraft:RDR2":[-1,1.36,2.86],"Wiedźmin 3:GTA V":[-3.92,-2.28,1],"Wiedźmin 3:RDR2":[-5.43,-3.88,1],"Wiedźmin 3:Minecraft":[-6.48,-3.7,1],"Civilization VI:GTA V":[-1,0,3.1],"Minecraft:GTA V":[-2.71,0,1],"Wiedźmin 3:League of Legends":[-5.17,-1.31,1],"League of Legends:RDR2":[-4.78,-0.39,3.53],"Civilization VI:RDR2":[-1,1.46,4.99]}',
    ip: "::ffff:10.13.201.101",
  },
  {
    subject: "Programowanie",
    ahpvalues:
      '{"C#:Haskell":[0],"C#:JavaScript":[8],"JavaScript:Python":[-8],"C++:Haskell":[0],"C++:JavaScript":[8],"C++:Python":[-3],"Python:Haskell":[-5],"JavaScript:Haskell":[-8],"C#:Python":[5],"C++:C#":[-5]}',
    fahpvalues:
      '{"C#:Python":[-1,0,1],"C#:Haskell":[-1,0,1],"JavaScript:Haskell":[-8,-8,-7.84],"C++:JavaScript":[6.13,7.55,8],"Python:Haskell":[-5.05,-4.16,-0.84],"C#:JavaScript":[5.02,7.59,8],"C++:Python":[-2.87,-2.55,0.24],"C++:C#":[-5.4,-4.73,-1.06],"C++:Haskell":[-7.4,-6.98,-5.46],"JavaScript:Python":[-8,-7.71,-5.62]}',
    ip: "::ffff:10.9.59.88",
  },
  {
    subject: "Programowanie",
    ahpvalues:
      '{"C#:Haskell":[-4],"JavaScript:Python":[4],"JavaScript:Haskell":[-2],"C++:C#":[-2],"C#:JavaScript":[-1],"Python:Haskell":[-4],"C#:Python":[4],"C++:Haskell":[-1],"C++:Python":[4],"C++:JavaScript":[-1]}',
    fahpvalues:
      '{"C#:Python":[0.19,3.16,4.74],"C++:Haskell":[-4,-2.02,1],"C#:JavaScript":[-2.91,-1.64,1.49],"C++:JavaScript":[-2.45,-0.99,1],"C#:Haskell":[-2.5,-0.47,1.85],"Python:Haskell":[-4,-1.83,1.51],"C++:C#":[-2.54,-0.93,1.72],"JavaScript:Python":[-1.27,2.88,6.35],"C++:Python":[-2.76,2.73,4.22],"JavaScript:Haskell":[-2.78,0,2.33]}',
    ip: "::ffff:10.12.135.75",
  },
  {
    subject: "Jedzenie",
    ahpvalues:
      '{"Pizza:Kluski Śląskie":[-2],"Kluski Śląskie:Hamburger":[1],"Hamburger:Naleśniki":[1],"Kluski Śląskie:Naleśniki":[1],"Pizza:Naleśniki":[1],"Pizza:Hamburger":[-2]}',
    fahpvalues:
      '{"Hamburger:Naleśniki":[-2.52,2,4.09],"Kluski Śląskie:Naleśniki":[-1.49,1.94,4.5],"Pizza:Hamburger":[-3.53,-2.17,3.21],"Pizza:Kluski Śląskie":[-5.83,-3.96,1.77],"Kluski Śląskie:Hamburger":[-2.07,2.71,4.05],"Pizza:Naleśniki":[-3.04,1.05,4.33]}',
    ip: "::ffff:10.32.231.221",
  },
  {
    subject: "Motoryzacja",
    ahpvalues:
      '{"BMW:Ford":[-1],"Volvo:Ford":[-1],"Volvo:Skoda":[-1],"Volvo:Peugeot":[-1],"BMW:Skoda":[-1],"BMW:Peugeot":[-1],"Skoda:Ford":[1],"Ford:Peugeot":[-1],"BMW:Volvo":[-1],"Skoda:Peugeot":[0]}',
    fahpvalues:
      '{"Volvo:Ford":[-2.5,-1.38,1.68],"Ford:Peugeot":[-1.53,-0.37,1],"BMW:Peugeot":[-6.31,-2.5,1],"Volvo:Skoda":[-1.53,-0.6,1.51],"BMW:Ford":[-6.46,-2.6,1.55],"Skoda:Ford":[-3.42,-0.86,1.31],"BMW:Volvo":[-6.29,-2.84,3.36],"Volvo:Peugeot":[-5.49,-2.67,1],"Skoda:Peugeot":[-2.97,-0.6,2.58],"BMW:Skoda":[-6.59,-4.67,1.66]}',
    ip: "::ffff:10.38.252.121",
  },
  {
    subject: "Jedzenie",
    ahpvalues:
      '{"Kluski Śląskie:Hamburger":[8],"Kluski Śląskie:Naleśniki":[8],"Pizza:Hamburger":[6],"Hamburger:Naleśniki":[-4],"Pizza:Kluski Śląskie":[-6],"Pizza:Naleśniki":[3]}',
    fahpvalues:
      '{"Pizza:Hamburger":[8,8,8],"Kluski Śląskie:Naleśniki":[2.21,4.42,5.04],"Pizza:Naleśniki":[-3.67,-1,3.81],"Hamburger:Naleśniki":[-6.37,-2.44,3.85],"Kluski Śląskie:Hamburger":[0,1,2.96],"Pizza:Kluski Śląskie":[-6.48,-3.85,-1.12]}',
    ip: "::ffff:10.11.171.245",
  },
  {
    subject: "Gry",
    ahpvalues:
      '{"League of Legends:GTA V":[8],"Civilization VI:RDR2":[8],"RDR2:GTA V":[4],"Civilization VI:Minecraft":[8],"Civilization VI:GTA V":[8],"Minecraft:RDR2":[-3],"Minecraft:GTA V":[3],"Civilization VI:League of Legends":[-4],"Wiedźmin 3:Civilization VI":[-8],"League of Legends:RDR2":[8],"Wiedźmin 3:Minecraft":[-4],"Wiedźmin 3:RDR2":[-4],"League of Legends:Minecraft":[8],"Wiedźmin 3:GTA V":[4],"Wiedźmin 3:League of Legends":[-8]}',
    fahpvalues:
      '{"RDR2:GTA V":[2.4,4.08,6.96],"Civilization VI:League of Legends":[-6.56,-4.87,-3.37],"Civilization VI:Minecraft":[2.35,6.04,8],"League of Legends:RDR2":[3.29,5.81,6.85],"Wiedźmin 3:GTA V":[-4.35,1.27,4.77],"Wiedźmin 3:Minecraft":[-4.48,-2.04,2.1],"Minecraft:GTA V":[-2.58,0.98,3.81],"League of Legends:GTA V":[-0.52,1.56,4.5],"Wiedźmin 3:Civilization VI":[-5.98,-3.65,-1.52],"Wiedźmin 3:League of Legends":[-4.92,-3.67,-1.29],"Minecraft:RDR2":[-4.37,-2.27,1.75],"League of Legends:Minecraft":[8,8,8],"Civilization VI:GTA V":[3.23,5.04,6.38],"Civilization VI:RDR2":[3.79,6,6.42],"Wiedźmin 3:RDR2":[-5.56,-1.23,1.71]}',
    ip: "::ffff:10.15.190.6",
  },
  {
    subject: "Programowanie",
    ahpvalues:
      '{"C++:Haskell":[-8],"C#:Haskell":[-8],"C++:C#":[-8],"JavaScript:Haskell":[-5],"C#:JavaScript":[4],"C#:Python":[8],"C++:Python":[8],"Python:Haskell":[-8],"JavaScript:Python":[8],"C++:JavaScript":[4]}',
    fahpvalues:
      '{"C++:Python":[3.28,5.69,8],"C++:Haskell":[-6.31,-5.12,-3.33],"C#:Python":[4.53,6.28,8],"C++:JavaScript":[-0.12,2.09,3.88],"Python:Haskell":[-8,-6.56,-5.06],"C++:C#":[-6.16,-4.53,-2.41],"C#:Haskell":[-1.06,0,1],"JavaScript:Python":[4.28,7.13,8],"JavaScript:Haskell":[-7.09,-5.06,-3.19],"C#:JavaScript":[1.38,2.94,4.22]}',
    ip: "::ffff:10.13.247.220",
  },
  {
    subject: "Gry",
    ahpvalues:
      '{"League of Legends:Minecraft":[-8],"League of Legends:RDR2":[-8],"Minecraft:RDR2":[-3],"RDR2:GTA V":[4],"Minecraft:GTA V":[2],"Wiedźmin 3:League of Legends":[-6],"Civilization VI:GTA V":[3],"Civilization VI:RDR2":[1],"Wiedźmin 3:GTA V":[-5],"League of Legends:GTA V":[-5],"Wiedźmin 3:RDR2":[-5],"Civilization VI:League of Legends":[-5],"Civilization VI:Minecraft":[3],"Wiedźmin 3:Civilization VI":[-5],"Wiedźmin 3:Minecraft":[-5]}',
    fahpvalues:
      '{"Wiedźmin 3:RDR2":[-8,-7.94,-6.31],"Civilization VI:Minecraft":[-4.37,-1,0],"Civilization VI:RDR2":[-1,0,3.15],"League of Legends:Minecraft":[-3.54,0,1],"Wiedźmin 3:Civilization VI":[-1,0,3.52],"Wiedźmin 3:GTA V":[-3.31,0,1],"League of Legends:GTA V":[-1,0,4.44],"Civilization VI:League of Legends":[-1,0,2.46],"Civilization VI:GTA V":[-2.04,0,1],"Wiedźmin 3:Minecraft":[-3.4,0,1],"Wiedźmin 3:League of Legends":[-1,2.21,3.21],"League of Legends:RDR2":[-3.71,-2.35,3.83],"Minecraft:GTA V":[-1,0,4.04],"Minecraft:RDR2":[-3.48,-2.35,-1],"RDR2:GTA V":[2.88,4.04,5.25]}',
    ip: "::ffff:10.35.65.206",
  },
  {
    subject: "Jedzenie",
    ahpvalues:
      '{"Hamburger:Naleśniki":[-7],"Pizza:Naleśniki":[-6],"Kluski Śląskie:Hamburger":[5],"Pizza:Hamburger":[-4],"Kluski Śląskie:Naleśniki":[4],"Pizza:Kluski Śląskie":[-4]}',
    fahpvalues:
      '{"Kluski Śląskie:Hamburger":[1.17,1.75,4.5],"Pizza:Naleśniki":[-4.73,-3.42,-1],"Pizza:Kluski Śląskie":[-5.46,-4.65,0],"Kluski Śląskie:Naleśniki":[1.5,3.79,4.6],"Pizza:Hamburger":[-4.98,-4.15,-3.54],"Hamburger:Naleśniki":[-8,0,8]}',
    ip: "::ffff:10.35.65.206",
  },
  {
    subject: "Motoryzacja",
    ahpvalues:
      '{"BMW:Volvo":[-6],"BMW:Ford":[-7],"BMW:Peugeot":[-7],"Volvo:Skoda":[5],"Skoda:Ford":[0],"BMW:Skoda":[4],"Ford:Peugeot":[-7],"Volvo:Ford":[4],"Skoda:Peugeot":[4],"Volvo:Peugeot":[4]}',
    fahpvalues:
      '{"Ford:Peugeot":[1,5.38,6.71],"BMW:Peugeot":[-5.73,-4.77,-1],"Skoda:Ford":[1.75,5.33,6.88],"Skoda:Peugeot":[2.71,5.65,6.54],"BMW:Skoda":[-6.94,-5.17,-3.12],"BMW:Ford":[-6.79,-5.52,-3.33],"BMW:Volvo":[-6.77,-5.52,-3.25],"Volvo:Skoda":[3.06,6.42,7.15],"Volvo:Ford":[2.42,6.44,7.29],"Volvo:Peugeot":[2.9,6.98,7.98]}',
    ip: "::ffff:10.12.200.233",
  },
  {
    subject: "Gry",
    ahpvalues:
      '{"RDR2:GTA V":[-1],"League of Legends:GTA V":[-8],"Wiedźmin 3:Civilization VI":[0],"League of Legends:Minecraft":[-4],"Civilization VI:Minecraft":[5],"Minecraft:RDR2":[-8],"Wiedźmin 3:RDR2":[-3],"Wiedźmin 3:League of Legends":[8],"Civilization VI:GTA V":[-5],"Wiedźmin 3:GTA V":[-3],"League of Legends:RDR2":[-8],"Civilization VI:League of Legends":[7],"Wiedźmin 3:Minecraft":[5],"Civilization VI:RDR2":[-4],"Minecraft:GTA V":[-8]}',
    fahpvalues:
      '{"Civilization VI:RDR2":[-6.01,-4.56,-2.56],"Wiedźmin 3:League of Legends":[6.63,8,8],"Wiedźmin 3:RDR2":[-3.12,-2,-0.54],"Wiedźmin 3:Minecraft":[2.8,4.99,6.54],"League of Legends:Minecraft":[-2.65,-0.8,1],"Wiedźmin 3:Civilization VI":[0.11,2.5,3.49],"Civilization VI:Minecraft":[0.06,2.41,3.55],"League of Legends:RDR2":[-8,-8,-8],"RDR2:GTA V":[-1,0,1],"Minecraft:RDR2":[-8,-6.24,-3.38],"League of Legends:GTA V":[-8,-8,-8],"Civilization VI:GTA V":[-6.24,-4.46,-2.76],"Minecraft:GTA V":[-6.31,-4.46,-2.76],"Wiedźmin 3:GTA V":[-5.02,-2.88,-1.01],"Civilization VI:League of Legends":[3.08,5.25,8]}',
    ip: "::ffff:10.9.59.88",
  },
  {
    subject: "Jedzenie",
    ahpvalues:
      '{"Pizza:Kluski Śląskie":[-6],"Pizza:Hamburger":[-1],"Kluski Śląskie:Hamburger":[4],"Hamburger:Naleśniki":[-4],"Pizza:Naleśniki":[-3],"Kluski Śląskie:Naleśniki":[0]}',
    fahpvalues:
      '{"Kluski Śląskie:Hamburger":[2.02,3.75,5.27],"Pizza:Naleśniki":[-5.19,-3.68,-2.22],"Kluski Śląskie:Naleśniki":[-1,1.53,3.88],"Pizza:Hamburger":[-4.11,-1.16,2.13],"Pizza:Kluski Śląskie":[-5.9,-4.43,-2.09],"Hamburger:Naleśniki":[-2.76,-1.03,1]}',
    ip: "::ffff:10.14.25.48",
  },
  {
    subject: "Gry",
    ahpvalues:
      '{"Wiedźmin 3:Civilization VI":[7],"Civilization VI:GTA V":[-1],"RDR2:GTA V":[1],"Minecraft:RDR2":[-1],"Wiedźmin 3:RDR2":[-2],"Wiedźmin 3:GTA V":[-1],"Wiedźmin 3:Minecraft":[1],"League of Legends:Minecraft":[2],"Civilization VI:League of Legends":[-1],"Wiedźmin 3:League of Legends":[-1],"Minecraft:GTA V":[-1],"Civilization VI:Minecraft":[-1],"League of Legends:GTA V":[-1],"Civilization VI:RDR2":[-1],"League of Legends:RDR2":[-2]}',
    fahpvalues:
      '{"Civilization VI:GTA V":[-2.77,0,1.56],"Civilization VI:Minecraft":[-2.81,0,0.27],"Civilization VI:League of Legends":[-0.52,0,2.48],"Wiedźmin 3:Civilization VI":[-1,0,1],"Civilization VI:RDR2":[-1,0,1],"Wiedźmin 3:RDR2":[-1,0,1],"League of Legends:Minecraft":[-1,0,1],"League of Legends:GTA V":[-1,0,1],"Minecraft:RDR2":[-1,0,1],"Wiedźmin 3:League of Legends":[-1,0,1],"Wiedźmin 3:GTA V":[-1,0,1],"League of Legends:RDR2":[-1,0,1],"Wiedźmin 3:Minecraft":[-1,0,1],"RDR2:GTA V":[-1,0,1],"Minecraft:GTA V":[-1,0,1]}',
    ip: "::ffff:10.9.82.245",
  },
  {
    subject: "Motoryzacja",
    ahpvalues:
      '{"BMW:Ford":[-4],"BMW:Peugeot":[-7],"Skoda:Ford":[0],"BMW:Skoda":[-5],"Skoda:Peugeot":[-3],"Volvo:Peugeot":[-1],"BMW:Volvo":[-6],"Ford:Peugeot":[0],"Volvo:Ford":[0],"Volvo:Skoda":[-1]}',
    fahpvalues:
      '{"BMW:Volvo":[-8,-7.52,-5.97],"Volvo:Ford":[-2.23,0.14,1.73],"Skoda:Peugeot":[-7.71,-4.23,1],"Skoda:Ford":[-1,0,1],"BMW:Ford":[-8,-7.4,-6.83],"BMW:Skoda":[-8,-7.46,-6.51],"Volvo:Peugeot":[-2.96,-1.85,1.79],"Ford:Peugeot":[-1,0,1],"Volvo:Skoda":[-3.31,0,2.93],"BMW:Peugeot":[-8,-8,-7.9]}',
    ip: "::ffff:10.36.40.162",
  },
];

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
