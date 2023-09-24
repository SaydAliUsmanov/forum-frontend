import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={handleToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    </div>
  )
}
