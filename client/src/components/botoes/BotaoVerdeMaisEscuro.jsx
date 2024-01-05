import { Link } from "react-router-dom"
import { BotaoVerdeMaisEscuroWrapper } from "./styles"

export default function BotaoVerdeMaisEscuro({ texto, link }) {
  return (
    <BotaoVerdeMaisEscuroWrapper >
      <Link to={link} >
        <button className="botaoVerdeMaisEscuro">
          {texto}
        </button>
      </Link>
    </BotaoVerdeMaisEscuroWrapper >
  )
}
