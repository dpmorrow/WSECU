import { UserSearchPage } from './app.po';

describe('wsecu App', function() {
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
});
