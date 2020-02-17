import {browser, element, logging, by} from 'protractor';
import {ArticlePage} from './article.po';

describe('test des articles', () => {
  let page: ArticlePage;
  let nbArticle: number;

  beforeEach(() => {
    page = new ArticlePage();
    browser.get('/admin');
  });

  it('Recherche le lien d\'ajout d\'article et clique dessus', () => {
    element.all(by.css('.article')).then(totalRows => {
      this.nbArticle = totalRows.length;
      element(by.css('#addArticleLink')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('admin/article/ajout');
    });
  });

  it('Test le formulaire', () => {
    browser.get('/admin/article/ajout');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitBtn'));
    submitBtn.click().then(fn => {
      element.all(by.css('.article')).then(totalNewRows => {
        this.nbArticle += 1;
        const compareArticle = this.nbArticle;
        expect(totalNewRows.length).toEqual(compareArticle);
        page.sleep();
      });
    });
  });

  it('Test de la suppression', () => {
    browser.get('/admin');
    page.sleep();
    let lastDeleteButton = element.all(by.css('.deleteArticle')).last();
    lastDeleteButton.click().then(fn => {
      element.all(by.css('.article')).then(totalNewRows => {
        this.nbArticle -= 1;
        const compare = this.nbArticle ;
        expect(totalNewRows.length).toEqual(compare);
      });
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
