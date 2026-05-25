export class FormulaCalculator {
  public constructor(private readonly a: number, private readonly b: number) {}

  public calculate(x: number): number {
    if (x <= 0) {
      throw new Error(`x must be > 0 for log10(x). Received: ${x}`);
    }

    const lg = Math.log10(x);
    const denominator = Math.pow(lg, 3);
    const valueUnderRoot = (this.a + this.b * x) / denominator;

    if (!Number.isFinite(valueUnderRoot) || valueUnderRoot < 0) {
      throw new Error(`Invalid expression under sqrt for x=${x}. Value: ${valueUnderRoot}`);
    }

    return Math.sqrt(valueUnderRoot);
  }

  public calculateRange(x1: number, xk: number, dx: number): Array<{ x: number; y: number | string }> {
    if (dx <= 0) {
      throw new Error(`dx must be > 0. Received: ${dx}`);
    }
    if (x1 > xk) {
      throw new Error(`x1 must be <= xk. Received: x1=${x1}, xk=${xk}`);
    }

    const rows: Array<{ x: number; y: number | string }> = [];
    for (let x = x1; x <= xk + 1e-12; x += dx) {
      const xRounded = Number(x.toFixed(10));
      try {
        rows.push({ x: this.round4(xRounded), y: this.round4(this.calculate(xRounded)) });
      } catch (error) {
        rows.push({ x: this.round4(xRounded), y: error instanceof Error ? error.message : "Calculation error" });
      }
    }
    return rows;
  }

  public calculateValues(xValues: number[]): Array<{ x: number; y: number | string }> {
    return xValues.map((x) => {
      try {
        return { x: this.round4(x), y: this.round4(this.calculate(x)) };
      } catch (error) {
        return { x: this.round4(x), y: error instanceof Error ? error.message : "Calculation error" };
      }
    });
  }

  private round4(value: number): number {
    return Number(value.toFixed(4));
  }
}
