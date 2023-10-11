import { sum } from "../suma";

describe("testeando solo la función suma por ahora", () => {
  describe("sum", () => {
    test("debe retornar 8", () => {
      expect(sum(4, 4)).toBe(8);
    });
  });
});
