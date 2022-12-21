import { Link } from "react-router-dom"
import { BotaoLaranjaInlinedWrapper } from "./styles"

export default function BotaoLaranjaInlined({texto}) {
  return (
    <BotaoLaranjaInlinedWrapper >
      <Link to='/' >
        <button className="botao__laranja--inlined">
          {texto}
        </button>
      </Link>
    </BotaoLaranjaInlinedWrapper >
  )
}
