Feature: I am going to validate calculator functionalities

@calculatorTesting
Scenario: Calculator add functionality

Given I will navigate to "calculator" site
When I add two numbers "3" and "5"
And I press go button
Then the output displayed should be "8"

@calculatorTesting
Scenario: Calculator add functionality

Given I will navigate to "calculator" site
When I add two numbers "2" and "7"
And I press go button
Then the output displayed should be "9"

@angularTesting
Scenario Outline: Angular site

Given I will navigate to "angular" site
When clink on header link
And you will navigate to angular page
Then you will enter <key> in search box

Examples:
| key |
| Hello|
| Key  |  