import { LichengbeiPage } from './app.po';

describe('lichengbei App', () => {
  let page: LichengbeiPage;

  beforeEach(() => {
    page = new LichengbeiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
