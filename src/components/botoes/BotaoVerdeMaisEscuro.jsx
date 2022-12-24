import { Link } from "react-router-dom"
import { BotaoVerdeMaisEscuroWrapper } from "./styles"

export default function BotaoVerdeMaisEscuro({ texto }) {
  return (
    <BotaoVerdeMaisEscuroWrapper >
      <Link to='/' >
        <button className="botaoVerdeMaisEscuro">
          {texto}
        </button>
      </Link>
    </BotaoVerdeMaisEscuroWrapper >
  )
}
