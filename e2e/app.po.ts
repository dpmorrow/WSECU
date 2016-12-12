import { browser, element, by } from 'protractor';

export class UserSearchPage {
  static navigateTo() {
    return browser.get('/');
  }

  static responsiveSmall() {
    return browser.driver.manage().window().setSize(600, 1000);
  }

  static responsiveLarge() {
    return browser.driver.manage().window().setSize(1000, 1000);
  }

  static getTableHeader() {
    return element(by.css('.user-search-result-header'));
  }

  static getSearchResults() {
    return element.all(by.css('.user-search-result'));
  }

  static getSearchTotals() {
    return element(by.css('.user-search-totals'));
  }

  static getInput() {
    return element(by.css('.user-search-input'));
  }

  static getButton() {
    return element(by.css('.user-search-button'));
  }
}
