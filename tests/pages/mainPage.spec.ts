import { test } from '../fixtures/mainPage';

test.describe('Тесты главной страницы', () => {
  test('Проверка отображение блоков', async ({ mainPage }) => {
    await mainPage.checkBlocksVisibility();
  });

  test('Проверка отображение текста на блоках', async ({ mainPage }) => {
    await mainPage.checkNamesOnBlocks();
  });

  test('Проверка href атрибута на блоках', async ({ mainPage }) => {
    await mainPage.checkHrefAttributeOnLinks();
  });

  test('Проверка поиска', async ({ mainPage }) => {
    await mainPage.searchAnime();
  });

});