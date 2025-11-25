import { test } from '../fixtures/mainPage';

test.describe('Тесты главной страницы', () => {
  test('Проверка поиска', async ({ mainPage }) => {
    await mainPage.searchAnime();
  });
});