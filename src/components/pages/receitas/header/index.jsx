import { Link } from "react-router-dom";
import { ReceitasHeaderWrapper } from "./styles";

export default function ReceitasHeader() {
  return (
    <ReceitasHeaderWrapper >
      <header className="receitas__header">
        <h3>Christmas Night Recipes</h3>
        <ul className="receitas__header--lista">
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
    </ReceitasHeaderWrapper>
  )
}
