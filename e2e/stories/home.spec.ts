import { test, expect } from "@playwright/test";

test("basic test", async ({ browser }) => {
  const b = await browser.newContext({
    locale: "de",
  });
  const page = await b.newPage();
  await page.goto("http://localhost:3000");
  await page.screenshot({
    path: "blah.png",
  });
  expect(true).toBe(false);
});
