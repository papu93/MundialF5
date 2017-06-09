import { MundialF5Page } from './app.po';

describe('mundial-f5 App', () => {
  let page: MundialF5Page;

  beforeEach(() => {
    page = new MundialF5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
