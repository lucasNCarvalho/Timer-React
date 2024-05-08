import { HeaderContainer } from "./style"
import logoIgnite from '../../assets/Logo-ignite.svg'
import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt=""/>
      <nav>
        <NavLink to='/' title="Timer">
        <Timer size={24}/>
        </NavLink>
        <NavLink to='history' title="Histórico">
        <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
