// Render settings
let lineColor = "#FFFFFF";
let xInitial = 0;
let yInitial = 0;
let hInitial = 0;

// Members
let w;
let turt;
let templatesField;
let axiomField;
let lengthField;
let angleField;
let countField;
let clearButton;
let stepButton;
let buildButton;
let rulesField;
let outputField;
let rules;
let uiElements = [];
let currIter = 0;
let maxIter = 0;

class Turtle {
  constructor(x, y, h, xOffset, yOffset, color) {
    this.x = x;
    this.y = y;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.h = h;
    this.color = color;
    this.stack = [];
  }

  forward(d, doDraw) {
    d *= w / 900;
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.x += d * sin(this.h);
    this.y += d * cos(this.h);

    if (doDraw) {
      stroke(this.color);
      line(this.xPrev + this.xOffset, -this.yPrev + this.yOffset, this.x + this.xOffset, -this.y + this.yOffset);
    }
  }

  turn(a) {
    this.hPrev = this.h;
    this.h += a;
  }

  push() {
    this.stack.push([this.x, this.y, this.h]);
  }

  pop() {
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.hPrev = this.h;
    let state = this.stack.pop();
    this.x = state[0];
    this.y = state[1];
    this.h = state[2];
  }
}

function setup() {
  // Initialize canvas
  canvasDiv = document.getElementById("sketch-holder");
  uiDiv = document.getElementById("ui-holder");
  textDiv = document.getElementById("text-holder");
  canvasDiv.style["pointer-events"] = "none";
  w = canvasDiv.offsetWidth;
  createCanvas(w, w * 1.25).parent("sketch-holder");
  angleMode(DEGREES);
  background(0);
  textSize(30);
  frameRate(5);

  // Construct buttons and fields
  axiomField = createInput();
  axiomField.size(150);
  axiomField.style("width", "100%");
  uiElements.push(axiomField);

  lengthField = createInput(0, "number");
  lengthField.size(75);
  uiElements.push(lengthField);
  angleField = createInput(0, "number");
  angleField.size(75);
  uiElements.push(angleField);
  countField = createInput(0, "number");
  countField.size(50);
  uiElements.push(countField);

  templatesField = createSelect();
  templatesField.parent(uiDiv);
  templatesField.style("height", 50);
  templatesField.option("tree");
  templatesField.option("hilbert");
  templatesField.option("rings");
  templatesField.option("dragon");
  templatesField.option("weed");
  templatesField.selected("tree0");
  uiElements.push(templatesField);

  clearButton = createButton("clear");
  clearButton.size(50);
  uiElements.push(clearButton);
  stepButton = createButton("step");
  stepButton.size(50);
  uiElements.push(stepButton);
  buildButton = createButton("run");
  buildButton.size(50);
  uiElements.push(buildButton);

  rulesField = createElement("textarea", "");
  rulesField.attribute("rows", "4"); // Set the number of visible rows
  rulesField.style("width", "50%");
  rulesField.parent(textDiv);
  rulesField.style("display", "flex");

  outputField = createElement("textarea");
  outputField.attribute("rows", "4"); // Set the number of visible rows
  outputField.style("width", "50%");
  outputField.parent(textDiv);
  outputField.style("display", "flex");

  uiElements.forEach((element) => {
    element.parent(uiDiv);
    element.style("display", "flex");
  });

  // Link Events
  axiomField.input(onAxiom);
  templatesField.input(onTemplate);
  clearButton.mousePressed(onAxiom);
  stepButton.mousePressed(runStep);
  buildButton.mousePressed(runBuild);
  outputField.input(renderOutput);
  rulesField.input(parseRules);

  // Initialize render
  onTemplate();
  parseRules();
  onAxiom();
  runBuild();
}

function onAxiom() {
  outputField.value(axiomField.value());
  renderOutput();
}

function onTemplate() {
  let template = templatesField.selected();

  axiom = "";
  prodRules = "";
  stepLength = 0;
  stepAngle = 0;
  count = 0;

  switch (template) {
    case "tree":
      axiom = "X";
      prodRules = "F -> FF/0.5\nF -> F+F/0.1\nF -> F-F/0.1\nX -> F+++++[[X]-----X]-----F[-----FX]+++++X/0.75";
      stepLength = 5;
      stepAngle = 5;
      count = 8;
      break;
    case "hilbert":
      axiom = "X[--X]";
      prodRules = "X -> -YF+XFX+FY-\nY -> +XF-YFY-FX+";
      stepLength = 10;
      stepAngle = 90;
      count = 6;
      break;
    case "rings":
      axiom = "-F+F+F+F";
      prodRules = "F -> FF+F+F+F+F+F-F";
      stepLength = 10;
      stepAngle = 90;
      count = 3;
      break;
    case "dragon":
      axiom = "++FX";
      prodRules = "X -> X+YF+\nY -> -FX-Y";
      stepLength = 10;
      stepAngle = 90;
      count = 12;
      break;
    case "weed":
      axiom = "F";
      prodRules = "F -> FF-[XY]+[XY]\nX -> +FY\nY -> -FX";
      stepLength = 6;
      stepAngle = 22.5;
      count = 7;
      break;
  }

  axiomField.value(axiom);
  lengthField.value(stepLength.toString());
  angleField.value(stepAngle.toString());
  countField.value(count.toString());
  rulesField.value(prodRules);

  parseRules();
  onAxiom();
  runBuild();
}

function renderOutput() {
  clear();
  let output = outputField.value();
  turt = new Turtle(xInitial, yInitial, hInitial, w * 0.5, w, lineColor);
  renderString(output);
}

function renderString(str) {
  str.split("").forEach((char) => {
    switch (char) {
      case "F":
        turt.forward(parseFloat(lengthField.value()), true);
        break;
      case "f":
        turt.forward(parseFloat(lengthField.value()), false);
        break;
      case "+":
        turt.turn(parseFloat(angleField.value()));
        break;
      case "-":
        turt.turn(parseFloat(-angleField.value()));
        break;
      case "[":
        turt.push();
        break;
      case "]":
        turt.pop();
        break;
    }
  });
}

function parseRules() {
  let rulesStr = rulesField.value();
  rules = [];
  print("Processing rules:");

  rulesStr.split("\n").forEach((line) => {
    line = line.replace(/\s/g, "");
    let lineSplit = line.split("/");

    let probability = 1;
    if (lineSplit.length > 1) {
      probability = parseFloat(lineSplit[1]);
    }
    let pairs = lineSplit[0].split("->");
    let predecessor = pairs[0];
    let successor = pairs[1];
    rules.push([predecessor, successor, probability]);
  });
  print(rules);
}

function runStep() {
  rewriteOutput();
}

function runBuild() {
  outputField.value(axiomField.value());
  currIter = 0;
  maxIter = parseFloat(countField.value());
}
function draw() {
  lineColor = window.getComputedStyle(document.body).getPropertyValue("--global-text-color");

  if (currIter < maxIter) {
    print(`Running iteration ${currIter}/${maxIter}`);
    currIter++;
    rewriteOutput();
  }

  renderOutput();
}

function rewriteOutput() {
  let output = outputField.value();
  let newOutput = [];
  output.split("").forEach((char) => {
    let matched = false;
    rules.forEach((rule) => {
      if (!matched && char === rule[0]) {
        if (Math.random() < rule[2]) {
          newOutput.push(rule[1]);
          matched = true;
        }
      }
    });

    if (!matched) {
      newOutput.push(char);
    }
  });

  outputField.value(newOutput.join(""));
}
