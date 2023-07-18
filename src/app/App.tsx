import './styles/index.scss'

import { Suspense } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'

const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames('app', { hovered: true, selected: false }, [ theme, 'class3' ]) }>
      
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>

      <button 
        onClick={ () => toggleTheme() }>
          Toggle Theme
        </button>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={ <AboutPage /> } />
          <Route path={'/'} element={ <MainPage /> }/>
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;