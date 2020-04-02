import {
  browser,
  element,
  by,
  By,
  $,
  $$,
  ExpectedConditions
} from "protractor";
import { async } from "q";
import { Calculator } from "./JSFiles/pageobjects/calculator";
import { AngularHomePage } from "./JSFiles/pageobjects/angularHomePage";

describe("Chain locators", () => {
  it("should chain all locators", async () => {
    let calculator = new Calculator();

    await browser.get("http://juliemr.github.io/protractor-demo/");

    await calculator.firstEditBox.sendKeys("25");
    await calculator.secondEditBox.sendKeys("25");
    await calculator.go.click();

    await calculator.getResult.getText().then(text => {
      console.log(text);
    });
  });

  it("Open Angular Js site", async () => {
    let homePage = new AngularHomePage();

    await browser.get("https://angularjs.org");
    await homePage.angularLink.click();
    await homePage.search.sendKeys("hello");
  });
});
