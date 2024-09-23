const stackPhotocopier = require("../02_stackPhotocopier");

describe("stackPhotocopier - all blueprint properties are unchanged", () => {
  it("Blueprint copy returns a new reference in memory for the array an objects nested within the data structure", () => {
    const blueprints = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      }]
      const copyStack = stackPhotocopier(blueprints)
      expect(blueprints).not.toBe(copyStack)
      expect(blueprints[0]).not.toBe(copyStack[0])
  });
  it("Blueprint inner content has not been changed whilst copying", () => {
    const blueprints = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      }]
      stackPhotocopier(blueprints)
      expect(blueprints).toEqual([
        {
          isCopy: false,
          title: "A guide to goat rearing",
          mainText: "Feed them",
          author: "Katherine",
        }])
  });
  it("Once the blueprint has been copied, the isCopy property has changed to true for each nested object. Checking the distance nested objects having new reference in memory", () => {
    const blueprints = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      }, {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      }]
      const copyStack = stackPhotocopier(blueprints)
      expect(copyStack).toEqual([
        {
          isCopy: true,
          title: "A guide to goat rearing",
          mainText: "Feed them",
          author: "Katherine",
        },
        {
          isCopy: true,
          title: "A lonely title",
        },
        {
          isCopy: true,
          title: "Hello world",
          subtitle: "A dev story",
        },
      ])
      expect(blueprints[1]).not.toBe(copyStack[1])

  });
});
