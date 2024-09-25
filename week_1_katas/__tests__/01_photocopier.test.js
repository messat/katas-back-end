const photocopier = require("../01_photocopier");

describe("photocopier - makes a new copy of the blueprint data", () => {
  it("Blueprint object copy returns a new reference in memory", () => {
    const blueprint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    const copy = photocopier(blueprint)
    expect(blueprint).not.toBe(copy)
  });
  it("Blueprint object copy property isCopy changes from false to true indicating the copy has been made", () => {
    const blueprint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    const copy = photocopier(blueprint)
    expect(copy).toEqual({isCopy: true,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"})
  });
  it("Checking the shape of Blueprint object - inner content not mutated", () => {
    const blueprint = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    photocopier(blueprint)
    expect(blueprint).toEqual({
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    })
  });
  it("Object without isCopy property ", () => {
    const blueprint = {
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    };
    const copy = photocopier(blueprint)
    expect(copy).toEqual({
      isCopy: true,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine",
    })
  });
});
