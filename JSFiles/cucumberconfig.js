"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
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
                    "App Version": "0.3.2",
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxpRUFBbUQ7QUFFeEMsUUFBQSxNQUFNLEdBQ2pCO0lBQ0ksY0FBYyxFQUFFLEtBQUs7SUFDckIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUcvRCxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0lBQ0QsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixNQUFNLEVBQUUsMkNBQTJDO1FBQ25ELFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDYixJQUFJLE9BQU8sR0FBRztnQkFDVixLQUFLLEVBQUUsV0FBVztnQkFDbEIsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsTUFBTSxFQUFFLDZCQUE2QjtnQkFDckMsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDTixhQUFhLEVBQUMsT0FBTztvQkFDckIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVLEVBQUUsUUFBUTtpQkFDdkI7YUFDSixDQUFDO1lBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1NBQzNCO0tBQ0o7Q0FDSixDQUFBIn0=