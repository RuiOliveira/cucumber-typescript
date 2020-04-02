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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calculatorTesting" }, () => {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@angularTesting" }, () => {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("I need execute first");
});
cucumber_1.After((scenario) => __awaiter(void 0, void 0, void 0, function* () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        //code to take screenshots
        const screeenshoot = yield protractor_1.browser.takeScreenshot();
        this.attach(screeenshoot, "image/png");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQXFDO0FBR3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRSxHQUFFLEVBQUU7SUFDekMsK0RBQStEO0lBQzNELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLHdFQUF3RTtJQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLENBQU8sUUFBUSxFQUFDLEVBQUU7SUFDcEIsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFDO1FBQ3pDLDBCQUEwQjtRQUN6QixNQUFNLFlBQVksR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FFekM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=