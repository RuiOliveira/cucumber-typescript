import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { Calculator } from "../JSFiles/pageobjects/calculator";
import { strict } from "assert";
import { AngularHomePage } from "../JSFiles/pageobjects/angularHomePage";
import chai from "chai";
var expect = chai.expect;

let calculator = new Calculator();
let angularHomePage = new AngularHomePage();

Given('I will navigate to {string} site', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    if(string=="calculator"){
        await browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if(string=="angular"){
        await browser.get("https://angularjs.org");
    }
});

When('I add two numbers {string} and {string}', async (firstInput, secondInput) => {
    // Write code here that turns the phrase above into concrete actions
    await calculator.firstEditBox.sendKeys(firstInput);
    browser.debugger;
    await calculator.secondEditBox.sendKeys(secondInput);
  });
  When('I press go button', async ()=> {
    await calculator.go.click();
    console.log("Insert an assertions")
  });
  When('clink on header link', async function () {
    await angularHomePage.angularLink.click();
  });
  When('you will navigate to angular page', async ()=> {
    await calculator.go.click();
    console.log("Insert an assertions")
  });

  Then('the output displayed should be {string}', async (string) => {
    await calculator.getResult.getText().then((text)=>{
      console.log("Result ++++ " + text);
    })
    expect(await calculator.getResult.getText()).to.equal(string);
  });
  Then('you will enter {string} in search box', async (string) => {
    await browser.sleep(3000);
    await angularHomePage.search.sendKeys(string);
  });