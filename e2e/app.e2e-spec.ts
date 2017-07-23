import { DatePcikerAppPage } from './app.po';

describe('date-pciker-app App', () => {
  let page: DatePcikerAppPage;

  beforeEach(() => {
    page = new DatePcikerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
