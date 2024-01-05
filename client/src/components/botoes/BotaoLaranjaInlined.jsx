import { Link } from "react-router-dom"
import { BotaoLaranjaInlinedWrapper } from "./styles"

export default function BotaoLaranjaInlined({ texto, link }) {
  return (
    <BotaoLaranjaInlinedWrapper >
      <Link to={link} >
        <button className="botao__laranja--inlined">
          {texto}
        </button>
      </Link>
    </BotaoLaranjaInlinedWrapper >
  )
}
