import { DispatchPage } from './app.po';

describe('dispatch App', () => {
  let page: DispatchPage;

  beforeEach(() => {
    page = new DispatchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
