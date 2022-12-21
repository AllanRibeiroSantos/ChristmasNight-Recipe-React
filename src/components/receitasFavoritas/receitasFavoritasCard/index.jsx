import BotaoVerdeInlined from "../../botoes/BotaoVerdeInlined";
import { ReceitasFavoritasCardWrapper } from "../styles";
import imagem from '../../../assets/img/christmastree.png'

export default function ReceitasFavoritasCard() {
  return (
    <ReceitasFavoritasCardWrapper >
      <div className="receitas_favoritas__card-container">
        <div className="receitas_favoritas__card-container--card">
          <img className="receitas_favoritas__card-container--imagem" src={imagem} />
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Elf Berry Tarts</h3>
              <p>Our elves absolutely devour these tart raspberry pullover pastries.</p>
              <BotaoVerdeInlined texto='View' />
            </div>
          </div>
        </div>
        <div className="receitas_favoritas__card-container--card">
          <img className="receitas_favoritas__card-container--imagem" src={imagem} />
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Elf Berry Tarts</h3>
              <p>Our elves absolutely devour these tart raspberry pullover pastries.</p>
              <BotaoVerdeInlined texto='View' />
            </div>
          </div>
        </div>
        <div className="receitas_favoritas__card-container--card">
          <img className="receitas_favoritas__card-container--imagem" src={imagem} />
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Elf Berry Tarts</h3>
              <p>Our elves absolutely devour these tart raspberry pullover pastries.</p>
              <BotaoVerdeInlined texto='View' />
            </div>
          </div>
        </div>
      </div>
    </ReceitasFavoritasCardWrapper >
  )
}
