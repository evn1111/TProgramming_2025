import { createFox } from "./src/fox.js";

function main(): void {
  const fox = createFox("Alisa", 3, "orange");

  console.log("Fox data:");
  console.log(`Name: ${fox.getName()}`);
  console.log(`Age: ${fox.getAge()}`);
  console.log(`Color: ${fox.getColor()}`);
  console.log("View:");
  console.log(fox.getView());
}

main();
