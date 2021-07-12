import { webkit, Browser } from "playwright";

let browser: Browser;

beforeAll(async () => {
  console.log("hi");
  browser = await webkit.launch({ slowMo: 100 });
});

describe("parseEnum", () => {
  it("should parse known value", async () => {
    const page = await browser.newPage();
    await page.goto("https://playwright.dev/");
    const name = await page.textContent(".navbar__title");
    expect(name).toBe("Playwright");
  });
});

afterAll(async () => {
  console.log("bye");
  await browser.close();
});
