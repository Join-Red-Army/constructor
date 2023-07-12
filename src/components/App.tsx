import './App.scss'
import '../styles/index.scss'

import { Suspense } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import AboutPageAsync from '../pages/AboutPage'
import MainPageAsync from '../pages/MainPage'
import { useTheme } from '../theme/useTheme'
import { classNames } from '../helpers/classNames/classNames'

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
          <Route path={'/about'} element={ <AboutPageAsync /> } />
          <Route path={'/'} element={ <MainPageAsync /> }/>
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;