import kebabHash from "./index";

describe("Default hashLength", () => {
  test("Returns for /foo-bar", () => {
    expect(kebabHash("/foo-bar")).toBe("foo-bar-096");
  });

  test("Returns for /foo/bar", () => {
    expect(kebabHash("/foo/bar")).toBe("foo-bar-1df");
  });
});

describe("hashLength 5", () => {
  test("Returns for /foo-bar", () => {
    expect(kebabHash("/foo-bar", 5)).toBe("foo-bar-09652");
  });

  test("Returns for /foo/bar", () => {
    expect(kebabHash("/foo/bar", 5)).toBe("foo-bar-1df48");
  });
});

describe("pathLength 14", () => {
  test("Slices properly", () => {
    expect(kebabHash("hello/world/foo/bar", 3, 14)).toBe("hello-w-foo-bar-f3b")
  })
})
