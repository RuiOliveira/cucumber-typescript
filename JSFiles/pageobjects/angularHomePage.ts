import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';

export class AngularHomePage{
    
    angularLink:ElementFinder;
    search:ElementFinder;

    constructor(){
        this.angularLink=element(by.linkText("angular.io"));
        this.search=element(by.css("input[type='search']"));
    }
}