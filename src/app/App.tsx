import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config/routerConfig/routerConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './provides/ThemeProvider/lib/useTheme'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>ToggleTheme</button>
      <Link to={'/'}>Перейти на главаную</Link>
      <Link to={'/about'}>Перейти на Об странице</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routerConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
