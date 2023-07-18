![Screnshot](https://www.zastavki.com/pictures/1680x1050/2015/Anime_Three_girls_anime_mitsudomoe_109109_16.png)

# [**Euphoric Serenity**](https://dumopolis.github.io)

### Веб-каталог популярных аниме, в котором можно найти подробную информацию о ваших любимых японских анимационных фильмах и сериалах

На базе [**Anime DB API**](https://rapidapi.com/brian.rofiq/api/anime-db/details) от BrianRofiq

    Реализовано Кердзевадзе Н., Кольцовой А., Шумской А.

## Учтенные требования к проекту

-   Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем LocalStorage ☑️ [**LocalStorage**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/utils/localStorage.tsx#L4)

### React

-   Проект написан с использованием функциональных компонентов в приоритете над классовыми ☑️
-   Есть разделение на умные и глупые компоненты ☑️ Пример [**глупого**](https://github.com/aston-anime/anime-list/blob/768dea26defbdf05a3b58767e2f7ced2723fd166/src/components/SearchResultsList/SearchResultsList.tsx#L10) и [**умного**](https://github.com/aston-anime/anime-list/blob/768dea26defbdf05a3b58767e2f7ced2723fd166/src/components/SearchBar/SearchBar.tsx#L19) компонента
-   Есть рендеринг списков ☑️ [**Пример**](https://github.com/aston-anime/anime-list/blob/768dea26defbdf05a3b58767e2f7ced2723fd166/src/components/CardList/CardList.tsx#L13), [**Пример с UUID**](https://github.com/aston-anime/anime-list/blob/768dea26defbdf05a3b58767e2f7ced2723fd166/src/pages/History/History.tsx#L37C30-L37C30)
-   Реализована хотя бы одна форма ☑️ [**Форма авторизации**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/pages/Log-in/Log-in.tsx#L47)
-   Есть применение Контекст API ☑️ [**Контекст**](https://)
-   Есть применение предохранителя ☑️ [**Предохранитель**](https://) [**его использование**](https://)
-   Есть хотя бы один кастомный хук ☑️ [**Хук**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/hooks/useDataFetching.ts#L13)
-   Хотя бы несколько компонентов используют PropTypes ☑️ [**Пример использования**](https://)
-   Поиск не должен триггерить много запросов к серверу ☑️ [**Пример использования debounce**](https://github.com/aston-anime/anime-list/blob/a7a8c9afb3b574e65d4576bab2c9287f212194ef/src/components/SearchBar/SearchBar.tsx#L27)
-   Есть применение lazy + Suspense ☑️ [**Пример**](https://)

### Redux

-   Используется Modern Redux with Redux Toolkit ☑️
-   Используются слайсы ☑️ [**Слайсы**](https://)
-   Есть кастомная мидлвара ☑️ [**Мидлвара**](https://)
-   Используется RTK Query ☑️ [**RTK Query**](https://)
-   Используется Transforming Responses ☑️ [**Transforming Responses**](https://)

### Дополнительно

-   Используется TypeScript
-   Storybook
-   Для стилизации использована библиотека [**Bootswatch**](https://bootswatch.com/)
-   Для генерации ключей использован генератор UUID
