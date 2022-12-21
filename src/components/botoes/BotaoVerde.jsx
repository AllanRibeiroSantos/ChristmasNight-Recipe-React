import { Link } from "react-router-dom"
import { BotaoVerdeWrapper } from "./styles"

export default function BotaoVerde() {
  return (
    <BotaoVerdeWrapper>
      <Link to='/' >
        <button className="main__banner--buttonVerde">
          Christmas Night Recipes
        </button>
      </Link>
    </BotaoVerdeWrapper>
  )
}
