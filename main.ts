import { FormulaCalculator } from "./src/formula-calculator.js";

const a = 7.2;
const b = 1.3;

const x1 = 1.56;
const xk = 4.71;
const dx = 0.63;

const taskBX = [2.4, 2.8, 3.9, 4.7, 3.16];
const calculator = new FormulaCalculator(a, b);

console.log("Task A: x from x1 to xk with step dx");
console.table(calculator.calculateRange(x1, xk, dx));

console.log("Task B: given x values");
console.table(calculator.calculateValues(taskBX));
