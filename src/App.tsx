import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
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
  )
}

export default App
