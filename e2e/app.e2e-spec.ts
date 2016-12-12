import { UserSearchPage } from './app.po';
import { protractor } from "protractor";

describe('WSECU User Search App', () => {
  it('should not display table header only when at or below 600px width', () => {
    UserSearchPage.responsiveSmall();
    UserSearchPage.navigateTo();
    expect(UserSearchPage.getTableHeader().isDisplayed()).toBeFalsy();
  });

  it('should display table header only when above 600px width', () => {
    UserSearchPage.responsiveLarge();
    UserSearchPage.navigateTo();
    expect(UserSearchPage.getTableHeader().isDisplayed()).toBeTruthy();
  });

  it('should display a list of 10 users initially', () =>{
    UserSearchPage.navigateTo();
    expect(UserSearchPage.getSearchResults().count()).toBe(10);
  });

  it('should have an empty search input and a button', () => {
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();

    expect(input.isPresent()).toBeTruthy();
    expect(button.isPresent()).toBeTruthy();
  });

  it('should not display the search result totals whenever no term is present', () => {
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    expect(input.getAttribute('value')).toBe('');
    expect(UserSearchPage.getSearchTotals().isPresent()).toBeFalsy();

    UserSearchPage.navigateTo();
    input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys('a');
    input.sendKeys(protractor.Key.BACK_SPACE);
    expect(input.getAttribute('value')).toBe('');

    button.click();
    expect(UserSearchPage.getSearchTotals().isPresent()).toBeFalsy();
  });

  it('should display the search result totals and search term whenever a term is present', () => {
    let expectedTerm = 'Vic\'s Pizza';
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys(expectedTerm);
    expect(input.getAttribute('value')).toBe(expectedTerm);
    button.click();
    expect(UserSearchPage.getSearchTotals().isPresent()).toBeTruthy();
    expect(UserSearchPage.getSearchTotals().getText()).toContain('out of 10 matched the search term `' + expectedTerm + '`')
  });

  it('should display exactly one search result when the term is \'Leanne Graham\'', () => {
    let expectedName = 'Leanne Graham';
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys(expectedName);
    expect(input.getAttribute('value')).toBe(expectedName);
    button.click();
    expect(UserSearchPage.getSearchResults().count()).toBe(1);
    expect(UserSearchPage.getSearchTotals().getText()).toContain('1 user out of')
  });

  it('should display exactly two search results when the term is \'Clementin\'', () => {
    let expectedName = 'Clementin';
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys(expectedName);
    expect(input.getAttribute('value')).toBe(expectedName);
    button.click();
    expect(UserSearchPage.getSearchResults().count()).toBe(2);
    expect(UserSearchPage.getSearchTotals().getText()).toContain('2 users out of')
  });

  it('should display exactly one result when the term is \'Nathan@yesenia.net\'', () => {
    let expectedName = 'Nathan@yesenia.net';
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys(expectedName);
    expect(input.getAttribute('value')).toBe(expectedName);
    button.click();
    expect(UserSearchPage.getSearchResults().count()).toBe(1);
    expect(UserSearchPage.getSearchTotals().getText()).toContain('1 user out of');
  });

  it('should display results regardless of case', () => {
    //noinspection SpellCheckingInspection
    let expectedName = 'nAthaN@yEsenIa.Net';
    UserSearchPage.navigateTo();
    let input = UserSearchPage.getInput();
    let button = UserSearchPage.getButton();
    input.sendKeys(expectedName);
    expect(input.getAttribute('value')).toBe(expectedName);
    button.click();
    expect(UserSearchPage.getSearchResults().count()).toBe(1);
  });
});
