import i18n from ".";

describe("content", () => {
  it("should load English", () => {
    const content = i18n("en");
    expect(content.coolStyles).toBe("Cool Styles");
  });
});
