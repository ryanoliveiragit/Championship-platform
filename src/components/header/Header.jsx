import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Style'
import Button from '../styles/Button'

const Header = () => {
  return (
    <header>
        <Style>
            <h1>BRL</h1>
            <nav>
              <ul>
                  <li><Link to="/">INICIO</Link></li>
                  <li><Link to="/">TIMES</Link></li>
                  <li><Link to="/">PARCEIROS</Link></li>
                  <li><Link to="/">LOJA</Link></li>
                  <li><Link to="/">DISCORD</Link></li>
                  <li><Link to="/">SOBRE</Link></li>
              </ul>
            </nav>
            <Button>ADIQUIRIR PASSE</Button>
        </Style>
    </header>
  )
}
export default Header;
