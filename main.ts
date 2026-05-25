function calculateY(a: number, b: number, x: number): number {
  if (x <= 0) {
    throw new Error(`x must be > 0 for log10(x). Received: ${x}`);
  }

  const lg = Math.log10(x);
  const denominator = Math.pow(lg, 3);
  const valueUnderRoot = (a + b * x) / denominator;

  if (!Number.isFinite(valueUnderRoot) || valueUnderRoot < 0) {
    throw new Error(
      `Invalid expression under sqrt for x=${x}. Value: ${valueUnderRoot}`
    );
  }

  return Math.sqrt(valueUnderRoot);
}

function round4(value: number): number {
  return Number(value.toFixed(4));
}

function printRow(a: number, b: number, x: number): void {
  try {
    const y = calculateY(a, b, x);
    console.log(`x=${round4(x)}, y=${round4(y)}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Calculation error";
    console.log(`x=${round4(x)}, y=${message}`);
  }
}

function printTaskA(a: number, b: number, x1: number, xk: number, dx: number): void {
  console.log("Task A: x from x1 to xk with step dx");

  let x = x1;
  while (x <= xk + 1e-12) {
    const xRounded = Number(x.toFixed(10));
    printRow(a, b, xRounded);
    x += dx;
  }
}

function printTaskB(
  a: number,
  b: number,
  xA: number,
  xB: number,
  xC: number,
  xD: number,
  xE: number
): void {
  console.log("Task B: given x values");
  printRow(a, b, xA);
  printRow(a, b, xB);
  printRow(a, b, xC);
  printRow(a, b, xD);
  printRow(a, b, xE);
}

const a = 7.2;
const b = 1.3;

const x1 = 1.56;
const xk = 4.71;
const dx = 0.63;

printTaskA(a, b, x1, xk, dx);
printTaskB(a, b, 2.4, 2.8, 3.9, 4.7, 3.16);
