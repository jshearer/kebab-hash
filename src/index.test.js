import kebabHash from "./index";

describe("Default behaviour", () => {
  test("Returns for /foo-bar", () => {
    expect(kebabHash("/foo-bar")).toBe("foo-bar-096");
  });

  test("Returns for /foo/bar", () => {
    expect(kebabHash("/foo/bar")).toBe("foo-bar-1df");
  });
});
