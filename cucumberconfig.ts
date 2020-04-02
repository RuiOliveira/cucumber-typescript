import {Config} from 'protractor';
import { JsonFormatter } from 'cucumber';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = 
{
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),


    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome', //firefox, internet explorer
        shardTestFiles: true,
        maxInstances: 3
    },
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        tags: "@calculatorTesting",
        format: 'json:./json-reporter/cucumber-report.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './json-reporter/**.json',
                output: 'report/cucumber-report.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version":"0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };

            reporter.generate(options);
        },
        require: [
            './stepDefinitions/*.js'
        ]
    }
}