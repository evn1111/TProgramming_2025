import { describe, expect, it } from "vitest";
import { createFox, Fox } from "../src/fox.js";

describe("Fox", () => {
  it("creates fox with valid data", () => {
    const fox = createFox("Alisa", 3, "orange");
    expect(fox).toBeInstanceOf(Fox);
    expect(fox.getName()).toBe("Alisa");
    expect(fox.getAge()).toBe(3);
    expect(fox.getColor()).toBe("orange");
  });

  it("returns ascii view", () => {
    const fox = createFox("Alisa", 3, "orange");
    expect(fox.getView()).toContain("/\\_/\\");
  });

  it("validates empty name", () => {
    expect(() => createFox("", 1, "red")).toThrow("Name is required");
  });
});
