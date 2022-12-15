import { BotaoLaranjaWrapper } from "./styles";
import { VscMenu } from 'react-icons/vsc';
import { useContext } from "react";
import { ContextBanner } from "../commom/context/ContextBanner";

export default function BotaoLaranja() {
  const { toggleMenu, setToggleMenu } = useContext(ContextBanner);

  return (
    <BotaoLaranjaWrapper >
      <button className="main__banner--buttonLaranja"
        onClick={() => setToggleMenu(!toggleMenu)} >
        <VscMenu style={{ fontSize: '2rem' }} />
      </button>
    </BotaoLaranjaWrapper >
  )
}