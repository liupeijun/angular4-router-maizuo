import { MaizuoPage } from './app.po';

describe('maizuo App', () => {
  let page: MaizuoPage;

  beforeEach(() => {
    page = new MaizuoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
