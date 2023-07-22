![Screnshot](https://www.zastavki.com/pictures/1680x1050/2015/Anime_Three_girls_anime_mitsudomoe_109109_16.png)

# [**Euphoric Serenity**](https://aston-anime.github.io/anime-list/)

### Веб-каталог популярных аниме, в котором можно найти подробную информацию о ваших любимых японских анимационных фильмах и сериалах

На базе [**Anime DB API**](https://rapidapi.com/brian.rofiq/api/anime-db/details) от BrianRofiq

    Реализовано: Кердзевадзе Н., Кольцовой А., Шумской А.

## Учтенные требования к проекту

-   Для хранения учетных записей пользователей, их избранного и истории поиска, используем LocalStorage ☑️ [**LocalStorage**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/utils/localStorage.tsx#L4)

### React

-   Проект написан с использованием функциональных компонентов в приоритете над классовыми ☑️
-   Есть разделение на умные и глупые компоненты ☑️ Пример [**глупого**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/components/SearchResultsList/SearchResultsList.tsx#L9) и [**умного**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/components/SearchBar/SearchBar.tsx#L16) компонента
-   Есть рендеринг списков ☑️ [**Пример**](https://github.com/aston-anime/anime-list/blob/768dea26defbdf05a3b58767e2f7ced2723fd166/src/components/CardList/CardList.tsx#L13), [**Пример с UUID**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/pages/History/History.tsx#L36)
-   Реализована хотя бы одна форма ☑️ [**Форма авторизации**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/pages/Log-in/Log-in.tsx#L47)
-   Есть применение Контекст API ☑️ [**Контекст**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/services/theme/ThemeProvider.tsx#L7)
-   Есть применение предохранителя ☑️ [**Использование предохранителя**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/routing/app-routing.tsx#L23)
-   Есть хотя бы один кастомный хук ☑️ [**Хук**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/hooks/useDataFetching.ts#L22)
-   Хотя бы несколько компонентов используют PropTypes ☑️ [**Пример использования**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/components/Card/Card.tsx#L85)
-   Поиск не должен триггерить много запросов к серверу ☑️ [**Пример использования debounce**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/components/SearchBar/SearchBar.tsx#L27)
-   Есть применение lazy + Suspense ☑️ [**Lazy**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/routing/lazy-routes.tsx#L1) [**Suspense**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/index.tsx#L18)

### Redux

-   Используется Modern Redux with Redux Toolkit ☑️
-   Используются слайсы ☑️ [**Слайсы**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/store/auth/auth.ts#L14)
-   Есть кастомная мидлвара ☑️ [**Мидлвара**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/store/middleWare/listenerMiddleWare.ts#L6)
-   Используется RTK Query ☑️ [**RTK Query**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/api/cardsApi.ts#L7)
-   Используется Transforming Responses ☑️ [**Transforming Responses**](https://github.com/aston-anime/anime-list/blob/381a7d3ece3888897ff28b53ba588a6c3bca50f9/src/api/cardsApi.ts#L42)

### Дополнительно

-   Используется TypeScript
-   Настроен [**CI/CD**](https://github.com/aston-anime/anime-list/blob/cd0f7a7780a8b1adba4ccff82307697d68f28c3c/.github/workflows/github-actions.yml#L2)
-   Для компонента кнопки добавлен [**StoryBook**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/components/Button/Button.stories.tsx#L6C6-L6C6)
-   Для стилизации использована библиотека [**Bootswatch**](https://bootswatch.com/)
-   Для генерации ключей использован генератор [**UUID**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/pages/History/History.tsx#L2)
-   Для обработки ошибок используется [**React Toastify**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/services/error-handle.ts#L2)
-   Для работы с классами используется библиотека [**classnames**](https://github.com/aston-anime/anime-list/blob/8427d171d4cad96529992ce51b5ccf5994a40699/src/components/Header/Header.tsx#L24)
