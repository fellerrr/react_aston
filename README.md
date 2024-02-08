[![Deploy static content to Pages](https://github.com/fellerrr/react_aston/actions/workflows/deploy.yml/badge.svg?branch=main&event=push)](https://github.com/fellerrr/react_aston/actions/workflows/deploy.yml)

# The Rick and Morty API

Проект посвящен персонажам из мультфильма The Rick and Morty .

[Посмотреть проект](https://fellerrr.github.io/react_aston/)


# Обязательные требования
- [x] использован LocalStorage [utils](https://github.com/fellerrr/react_aston/blob/main/src/utils/dataHandler.ts)
- [x] используются функциональные компоненты с хуками
- [x] есть рендеринг списков [List](https://github.com/fellerrr/react_aston/blob/main/src/components/list/List.tsx), [episodes](https://github.com/fellerrr/react_aston/blob/refactoring01/src/pages/itemPage.tsx)
- [x] реализована хотя бы одна форма [Registration](https://github.com/fellerrr/react_aston/blob/refactoring01/src/features/registration/Registration.tsx), [login](https://github.com/fellerrr/react_aston/blob/refactoring01/src/features/login/Login.tsx)
- [x] есть применение Контекст API [Context](https://github.com/fellerrr/react_aston/blob/refactoring01/src/contexts/ThemeContext.ts), [useContext](https://github.com/fellerrr/react_aston/blob/refactoring01/src/components/head/Head.tsx)
- [x] есть применение предохранителя [ErrorBoundary](https://github.com/fellerrr/react_aston/blob/refactoring01/src/shared/components/ErrorBoundary.tsx), [Usage](https://github.com/fellerrr/react_aston/blob/refactoring01/src/pages/itemPage.tsx)
- [x] есть хотя бы один кастомный хук [useSearch](https://github.com/fellerrr/react_aston/blob/refactoring01/src/features/search/hooks/useSearch.ts), [useFavorites](https://github.com/fellerrr/react_aston/blob/refactoring01/src/hooks/useFavorites.ts)
- [x] хотя бы несколько компонентов используют PropTypes [ButPageLayoutton](https://github.com/fellerrr/react_aston/blob/refactoring01/src/components/page-layout/PageLayout.tsx), [SearchHistoryList](https://github.com/fellerrr/react_aston/blob/refactoring01/src/components/search-history-list/SearchHistoryList.tsx)
- [x] есть debounce [useDebounce](https://github.com/fellerrr/react_aston/blob/refactoring01/src/features/search/hooks/useDebounce.ts)
- [x] есть применение [lazy + Suspense](https://github.com/fellerrr/react_aston/blob/refactoring01/src/App.tsx)
- [x] используем [Modern Redux with Redux Toolkit](https://github.com/fellerrr/react_aston/blob/refactoring01/src/store/store.ts)
- [x] используем слайсы [authSlice](https://github.com/fellerrr/react_aston/blob/refactoring01/src/store/authSlice.ts)
- [x] есть кастомная мидлвара [listenerMiddleware](https://github.com/fellerrr/react_aston/blob/refactoring01/src/shared/middlewares/sadjests.ts)
- [x] используется RTK Query [Search](https://github.com/fellerrr/react_aston/blob/refactoring01/src/store/query.ts)
- [x] используется [Transforming Responses](https://github.com/fellerrr/react_aston/blob/refactoring01/src/store/query.ts)
# Необязательные требования
- [x] использование TypeScript
- [x] настроен CI/CD