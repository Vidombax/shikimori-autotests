import test, {Locator, Page} from "@playwright/test";

interface Elements {
  search: {
    locator: (page: Page) => Locator;
    value: string;
  }
}

export class MainPage {
    readonly page: Page;
    readonly elements: Elements;

    constructor(page: Page) {
        this.page = page;
        this.elements = {
          search: {
            locator: (page: Page): Locator => page.getByPlaceholder('Поиск...'),
            value: 'Дандадан'
          },
        }
    }

    async openMainPage() {
        await this.page.goto('https://shikimori.one');
    }

    async checkNamesOnBlocks() {

    }

    async checkHrefAttributeOnLinks() {
      
    }

    async searchAnime() {
        await test.step('Вводим в поиск название аниме', async () => {
            await this.elements.search.locator(this.page).focus();
            await this.page.keyboard.type(this.elements.search.value);
            await this.page.keyboard.press('Enter');
        });
        await test.step('Проверяем что нашел конкретные аниме', async () => {

        });
    }

    async searchOneAnime() {
        await test.step('Вводим в поиск конкретное аниме', async () => {
          
        });
        await test.step('Проверяем что мы нашли то самое аниме', async () => {

        });
        await test.step('Открываем страницу аниме и сверяем', async () => {

        });
    }
}