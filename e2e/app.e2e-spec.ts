import { KAchinaPage } from './app.po';

describe('k-achina App', function() {
  let page: KAchinaPage;

  beforeEach(() => {
    page = new KAchinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
