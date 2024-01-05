import { Link } from "react-router-dom"
import { BotaoVerdeInlinedWrapper } from "./styles"

export default function BotaoVerdeInlined({ texto }) {
  return (
    <BotaoVerdeInlinedWrapper >
      <Link to='/' >
        <button className="botao__verde--inlined">
          {texto}
        </button>
      </Link>
    </BotaoVerdeInlinedWrapper >
  )
}
