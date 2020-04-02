import {Config} from 'protractor';
export let config: Config = 
{
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome', //firefox, internet explorer
        shardTestFiles: true,
        maxInstances: 3
    },
    specs: ['./testspec.ts'],
}