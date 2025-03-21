// import { seed } from "@repo/db/seed";
import { expect, test } from "./fixtures";

// test.beforeAll(async () => {
//   await seed();
// });

test.describe("Categories Page", () => {
  test(
    "Renders list of post categories",
    {
      tag: "@pages",
    },
    async ({ page }) => {
      await page.goto("/categories");

      await expect(await page.getByText("Node")).toBeVisible();
      await expect(await page.getByText("React")).toBeVisible();    
    },
  );
});

test.describe("Categories Page", () => {
    test(
      "Renders posts for specific category",
      {
        tag: "@pages",
      },
      async ({ page }) => {
        await page.goto("/category/react");
  
        await expect(await page.getByText("Better front ends with Fatboy Slim")).toBeVisible();

        // const item1 = await page.locator('text=Better front ends with Fatboy Slim');
        // const date = await item1.locator('text=16/03/2020');
        // await expect(date).toBeVisible();

        await expect(await page.getByText("No front end framework is the best")).toBeVisible();    
        await expect(await page.getByText("Boost your conversion rate")).not.toBeVisible();    
      },
    );
  });
  