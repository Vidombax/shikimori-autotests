import test, {Locator, Page, expect} from "@playwright/test";

interface Elements {
  search: {
    locator: (page: Page) => Locator;
    value: string;
  }
}

interface Blocks {
  locator: (page: Page) => Locator;
  text: string;
  attributes?: Array<{
    type: string;
    value: string;
  }>;
}

export class MainPage {
    readonly page: Page;
    readonly elements: Elements;
    readonly blocks: Blocks[];

    constructor(page: Page) {
        this.page = page;
        this.elements = {
          search: {
            locator: (page: Page): Locator => page.getByPlaceholder('Поиск...'),
            value: 'Дандадан'
          },
        }
        this.blocks = [
          {
            locator: (page: Page): Locator => page.locator('a').filter({ hasText: 'Сейчас на экранах' }),
            text: 'Сейчас на экранах',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/animes/status/ongoing'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[3]/div/div[3]/div[1]/div[1]/div/a'),
            text: 'Аниме',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/animes'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[3]/div/div[3]/div[1]/div[2]/div/a'),
            text: 'Манга',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/mangas'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[4]/div[2]'),
            text: 'Новости',
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[5]/div/div[1]/div[1]/div/a[1]'),
            text: 'коллекции',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/collections'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[5]/div/div[1]/div[1]/div/a[2]'),
            text: 'рецензии',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/forum/critiques'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.locator('//*[@id="dashboards_show"]/section/div/div/div[5]/div/div[1]/div[1]/div/a[3]'),
            text: 'статьи',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/articles'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.getByText('Темы дня').nth(1),
            text: 'Темы дня',
          },
          {
            locator: (page: Page): Locator => page.locator('a[href="https://shikimori.one/forum/updates"]'),
            text: 'Обновления аниме',
            attributes: [
              {
                type: 'href', 
                value: 'https://shikimori.one/forum/updates'
              }
            ]
          },
          {
            locator: (page: Page): Locator => page.getByText('Ещё новости'),
            text: 'Ещё новости',
          },
        ]
    }

    async openMainPage() {
        await this.page.goto('https://shikimori.one');
    }

    async checkBlocksVisibility() {
      for (const {locator, text} of this.blocks) {
            await test.step(`Проверка отображения элемента ${text}`, async () => {
                await expect(locator(this.page)).toBeVisible();
            });
        };
    }

    async checkNamesOnBlocks() {
      for (const {locator, text} of this.blocks) {
            if (text) {
                await test.step(`Проверка названия элемента ${text}`, async () => {
                    await expect(locator(this.page)).toContainText(text);
                });
            }
        }
    }

    async checkHrefAttributeOnLinks() {
      for (const element of this.blocks) {
              if (element.attributes) {
                for (const attribute of element.attributes) {
                  await test.step(`Проверка атрибута ${attribute.type} на элементе ${element.text}`, async () => {
                    await expect(element.locator(this.page)).toHaveAttribute(attribute.type, attribute.value);
                  });
                }
              }
        }
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