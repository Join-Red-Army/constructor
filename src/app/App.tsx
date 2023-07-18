import './styles/index.scss'

import { Link } from 'react-router-dom'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

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

      <AppRouter />

      {/* <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={ <AboutPage /> } />
          <Route path={'/'} element={ <MainPage /> }/>
        </Routes>
      </Suspense> */}

    </div>
  );
};

export default App;