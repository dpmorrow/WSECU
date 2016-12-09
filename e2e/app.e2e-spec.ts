import { WSECUPage } from './app.po';

describe('wsecu App', function() {
  let page: WSECUPage;

  beforeEach(() => {
    page = new WSECUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
