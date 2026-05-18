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

function printTaskA(a: number, b: number, x1: number, xk: number, dx: number): void {
  console.log("Task A: x from x1 to xk with step dx");

  const rows: { x: number; y: number | string }[] = [];

  for (let x = x1; x <= xk + 1e-12; x += dx) {
    const xRounded = Number(x.toFixed(10));

    try {
      const y = calculateY(a, b, xRounded);
      rows.push({ x: round4(xRounded), y: round4(y) });
    } catch (error) {
      rows.push({
        x: round4(xRounded),
        y: error instanceof Error ? error.message : "Calculation error",
      });
    }
  }

  console.table(rows);
}

function printTaskB(a: number, b: number, xValues: number[]): void {
  console.log("Task B: given x values");

  const rows = xValues.map((x) => {
    try {
      const y = calculateY(a, b, x);
      return { x: round4(x), y: round4(y) };
    } catch (error) {
      return {
        x: round4(x),
        y: error instanceof Error ? error.message : "Calculation error",
      };
    }
  });

  console.table(rows);
}

const a = 7.2;
const b = 1.3;

const x1 = 1.56;
const xk = 4.71;
const dx = 0.63;

const taskBX = [2.4, 2.8, 3.9, 4.7, 3.16];

printTaskA(a, b, x1, xk, dx);
printTaskB(a, b, taskBX);
