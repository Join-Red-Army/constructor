import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

// список роутов и названий для них
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

// пути до каждого компонента
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

// Объявление самих роутов: маршрут и компонент для них
// можно сделать массив, но автор сделал рекорд
// Указывается наименование роута и для него 
// путь, по которому он должен отрабатывать 
// и страницу, которую должен открывать
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
}

// RouteProps - это тип из самого реакта, который используется при передаче
// пропсов в роуты: path={}, element={} и т.д.