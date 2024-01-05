import { Link } from "react-router-dom";
import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper >
      <header className="header">
        <h3>Christmas Night Recipes</h3>
        <ul className="header--lista">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>Pagina Inicial</li>
          </Link>
          <Link to='/receitas' style={{ textDecoration: 'none' }}>
            <li>Receitas</li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>Contato</li>
          </Link>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>Sobre</li>
          </Link>
        </ul>
      </header>
    </HeaderWrapper>
  )
}
