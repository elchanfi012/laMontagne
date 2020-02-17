import { browser, by, element } from 'protractor';

export class ArticlePage {

  sleep() {
    browser.driver.sleep(4000);
  }
  completeForm() {
    let titre = element.all(by.id('titre'));
    let contenu = element.all(by.id('contenu'));
    let image = element.all(by.id('image'));
    titre.sendKeys('test');
    contenu.sendKeys('Oui');
    image.sendKeys('assets/halla-madrid.jpg');
  }
}
