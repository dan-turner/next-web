import { Selector } from "testcafe";

fixture`Home - default` //
  .page`http://localhost:3000`;

test("Defaults to english", async (t) => {
  const welcomeExists = await Selector("h1").withText("Welcome to Next.js!")
    .exists;
  await t.expect(welcomeExists).eql(true);
});

fixture`Home - German` //
  .page`http://localhost:3000/de`;

test("German route is German", async (t) => {
  const welcomeExists = await Selector("h1").withText("Willkommen bei Next.js!")
    .exists;
  await t.expect(welcomeExists).eql(true);
});
