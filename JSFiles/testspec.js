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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./JSFiles/pageobjects/calculator");
const angularHomePage_1 = require("./JSFiles/pageobjects/angularHomePage");
describe("Chain locators", () => {
    it("should chain all locators", () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new calculator_1.Calculator();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calculator.firstEditBox.sendKeys("25");
        yield calculator.secondEditBox.sendKeys("25");
        yield calculator.go.click();
        yield calculator.getResult.getText().then(text => {
            console.log(text);
        });
    }));
    it("Open Angular Js site", () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new angularHomePage_1.AngularHomePage();
        yield protractor_1.browser.get("https://angularjs.org");
        yield homePage.angularLink.click();
        yield homePage.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQVFvQjtBQUVwQixpRUFBOEQ7QUFDOUQsMkVBQXdFO0FBRXhFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQVMsRUFBRTtRQUN6QyxJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUVsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFFL0QsTUFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQVMsRUFBRTtRQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUVyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=