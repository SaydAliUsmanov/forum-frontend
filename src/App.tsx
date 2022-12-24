import { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';

const App = () => {
	const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
			<button onClick={toggleTheme}>ToggleTheme</button>
      <Link to={'/'}>Перейти на главаную</Link>
      <Link to={'/about'}>Перейти на Об странице</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />} />
          <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
