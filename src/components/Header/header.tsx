import { HeaderStyles } from './Header.styles'
import logoImage from '../../images/logoHeader.png'

import { ToolTipComponent } from '../ToolTipComponent/toolTip'
import { Scroll, Timer } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderStyles>
      <Link to={'/'}>
        <img
          src={logoImage}
          alt="Logo e botão para página home"
          className="logo flexReset"
        />
      </Link>
      <nav className="navBar">
        <ToolTipComponent content="Timer">
          <NavLink className="timerLink" to={'/'}>
            <Timer size={25} />
          </NavLink>
        </ToolTipComponent>
        <ToolTipComponent content="Histórico">
          <NavLink className="scrollLink" to={'/history'}>
            <Scroll size={25} />
          </NavLink>
        </ToolTipComponent>
      </nav>
    </HeaderStyles>
  )
}
