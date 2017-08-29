import { MySourcePage } from './app.po';

describe('my-source App', () => {
  let page: MySourcePage;

  beforeEach(() => {
    page = new MySourcePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
