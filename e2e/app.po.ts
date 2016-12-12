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
}
