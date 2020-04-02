"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../JSFiles/pageobjects/calculator");
const angularHomePage_1 = require("../JSFiles/pageobjects/angularHomePage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calculator = new calculator_1.Calculator();
let angularHomePage = new angularHomePage_1.AngularHomePage();
cucumber_1.Given('I will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calculator") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == "angular") {
        yield protractor_1.browser.get("https://angularjs.org");
    }
}));
cucumber_1.When('I add two numbers {string} and {string}', (firstInput, secondInput) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calculator.firstEditBox.sendKeys(firstInput);
    protractor_1.browser.debugger;
    yield calculator.secondEditBox.sendKeys(secondInput);
}));
cucumber_1.When('I press go button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calculator.go.click();
    console.log("Insert an assertions");
}));
cucumber_1.When('clink on header link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield angularHomePage.angularLink.click();
    });
});
cucumber_1.When('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calculator.go.click();
    console.log("Insert an assertions");
}));
cucumber_1.Then('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calculator.getResult.getText().then((text) => {
        console.log("Result ++++ " + text);
    });
    expect(yield calculator.getResult.getText()).to.equal(string);
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield angularHomePage.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLGtFQUErRDtBQUUvRCw0RUFBeUU7QUFDekUsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDbEMsSUFBSSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFFNUMsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3ZELG9FQUFvRTtJQUNwRSxJQUFHLE1BQU0sSUFBRSxZQUFZLEVBQUM7UUFDcEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2xFO1NBQ0ksSUFBRyxNQUFNLElBQUUsU0FBUyxFQUFDO1FBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUM5QztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxVQUFVLEVBQUUsV0FBVyxFQUFFLEVBQUU7SUFDOUUsb0VBQW9FO0lBQ3BFLE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsb0JBQU8sQ0FBQyxRQUFRLENBQUM7SUFDakIsTUFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1CQUFtQixFQUFFLEdBQVEsRUFBRTtJQUNsQyxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsc0JBQXNCLEVBQUU7O1FBQzNCLE1BQU0sZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLEdBQVEsRUFBRTtJQUNsRCxNQUFNLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMvRCxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsTUFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDN0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==