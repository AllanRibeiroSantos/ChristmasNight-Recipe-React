import { useContext } from "react";
import { MenuRetratilWrapper } from "./styles";
import { ContextBanner } from '../../commom/context/ContextBanner';

export default function MenuRetratil() {
  const { toggleMenu } = useContext(ContextBanner);
  console.log(toggleMenu)
  return (
    <MenuRetratilWrapper toggle={toggleMenu}>
      <ul className='menuRetratil__lista'>
        <li>Receitas</li>
        <li>Contato</li>
        <li>Sobre</li>
      </ul>
    </MenuRetratilWrapper>
  )
}