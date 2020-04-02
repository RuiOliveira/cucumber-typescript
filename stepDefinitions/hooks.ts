import {After, Before, Status} from "cucumber";
import { browser } from "protractor";


Before({tags: "@calculatorTesting"}, ()=>{
// This hook will be executed before scenarios tagged with @foo
    browser.manage().window().maximize();
});

Before({tags: "@angularTesting"}, () => {
// This hook will be executed before scenarios tagged with @foo and @bar
    console.log("I need execute first");
});

After(async (scenario)=>{
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if(scenario.result.status === Status.FAILED){
       //code to take screenshots
        const screeenshoot = await browser.takeScreenshot();
       this.attach(screeenshoot, "image/png");

    }
});