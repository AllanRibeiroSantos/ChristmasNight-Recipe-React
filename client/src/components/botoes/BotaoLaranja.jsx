import { BotaoLaranjaWrapper } from "./styles";
import { VscMenu } from 'react-icons/vsc';
import { useContext } from "react";
import { ContextBanner } from "../commom/context/ContextBanner";
import { Link } from "react-router-dom";

export default function BotaoLaranja({ link }) {
  const { toggleMenu, setToggleMenu } = useContext(ContextBanner);

  return (
    <BotaoLaranjaWrapper >
      <Link to={link} >
        <button className="main__banner--buttonLaranja"
          onClick={() => setToggleMenu(!toggleMenu)} >
          <VscMenu style={{ fontSize: '2rem' }} />
        </button>
      </Link>
    </BotaoLaranjaWrapper >
  )
}