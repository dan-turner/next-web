import { getLayout } from ".";

describe("content", () => {
  it("should get layout", async () => {
    const layout = await getLayout("en-AU", "zip-new");
    expect(layout).toBeDefined();
  });
});
