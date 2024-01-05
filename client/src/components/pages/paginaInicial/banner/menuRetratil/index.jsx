import { useContext } from "react";
import { MenuRetratilWrapper } from "./styles";
import { ContextBanner } from '../../../../commom/context/ContextBanner';
import { Link } from "react-router-dom";

export default function MenuRetratil() {
  const { toggleMenu } = useContext(ContextBanner);

  return (
    <MenuRetratilWrapper toggle={toggleMenu}>
      <ul className='menuRetratil__lista'>
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
    </MenuRetratilWrapper>
  )
}