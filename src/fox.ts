export class Fox {
  public constructor(
    private readonly name: string,
    private readonly age: number,
    private readonly color: string
  ) {
    if (!name.trim()) {
      throw new Error("Name is required");
    }
    if (age < 0) {
      throw new Error("Age must be non-negative");
    }
    if (!color.trim()) {
      throw new Error("Color is required");
    }
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getColor(): string {
    return this.color;
  }

  public getView(): string {
    return ` /\\_/\\
( o.o )
 > ^ <`;
  }
}

export function createFox(name: string, age: number, color: string): Fox {
  return new Fox(name, age, color);
}
