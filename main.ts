class Fox {
  private name: string;
  private age: number;
  private color: string;

  constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getColor(): string {
    return this.color;
  }

  getView(): string {
    return ` /\\_/\\
( o.o )
 > ^ <`;
  }
}

function createFox(name: string, age: number, color: string): Fox {
  return new Fox(name, age, color);
}

function main(): void {
  const fox = createFox('Alisa', 3, 'orange');

  console.log('Fox data:');
  console.log(`Name: ${fox.getName()}`);
  console.log(`Age: ${fox.getAge()}`);
  console.log(`Color: ${fox.getColor()}`);
  console.log('View:');
  console.log(fox.getView());
}

main();
