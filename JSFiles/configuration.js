"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3
    },
    specs: ['./testspec.ts'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDVyxRQUFBLE1BQU0sR0FDakI7SUFDSSxjQUFjLEVBQUUsS0FBSztJQUNyQixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLGVBQWUsRUFBRTtRQUNiLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixzQkFBc0IsRUFBRSxLQUFLO0tBQ2hDO0lBQ0QsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxhQUFhLEVBQUUsSUFBSTtJQUNuQixZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtRQUNyQixjQUFjLEVBQUUsSUFBSTtRQUNwQixZQUFZLEVBQUUsQ0FBQztLQUNsQjtJQUNELEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQztDQUMzQixDQUFBIn0=