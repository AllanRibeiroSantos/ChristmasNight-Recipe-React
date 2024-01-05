import { Link } from "react-router-dom"
import { BotaoVerdeWrapper } from "./styles"

export default function BotaoVerde({ link }) {
  return (
    <BotaoVerdeWrapper>
      <Link to={link} >
        <button className="main__banner--buttonVerde">
          Christmas Night Recipes
        </button>
      </Link>
    </BotaoVerdeWrapper>
  )
}
