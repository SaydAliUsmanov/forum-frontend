import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from 'app/provides/ThemeProvider'
import './styles/index.scss'
import {AppRouter} from "app/provides/router";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
          <Sidebar />
          <AppRouter />
      </div>
    </div>
  )
}

export default App
