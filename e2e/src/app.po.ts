import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  // Gets the text in the element
  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  // Gets just the element
  getElement(selector: string){
    return element(by.css(selector));
  }

  getAllElements(selector: string){
    return element.all(by.css(selector));
  }
}
