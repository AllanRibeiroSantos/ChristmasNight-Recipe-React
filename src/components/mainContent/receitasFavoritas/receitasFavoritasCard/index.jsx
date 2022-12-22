import BotaoVerdeInlined from "../../../botoes/BotaoVerdeInlined";
import { ReceitasFavoritasCardWrapper } from "../styles";
import appleCake from '../../../../assets/img/apple-christmas.png'
import gingerCupcake from '../../../../assets/img/ginger-cupcake.png'
import devilChoc from '../../../../assets/img/devil-double-choc.png'

export default function ReceitasFavoritasCard() {
  return (
    <ReceitasFavoritasCardWrapper >
      <div className="receitas_favoritas__card-container">
        <div className="receitas_favoritas__card-container--card">
          <div className="receitas_favoritas__card-container--imagem-container">
            <img className="receitas_favoritas__card-container--imagem" src={appleCake} />
          </div>
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Bolo de maçã natalino sem glútem</h3>
              <p>Este bolo sem glúten vai fazer você entrar no espírito festivo, com maçãs doces, canela, gengibre e noz-moscada.</p>
              <BotaoVerdeInlined texto='Ver mais' />
            </div>
          </div>
        </div>
        <div className="receitas_favoritas__card-container--card">
          <div className="receitas_favoritas__card-container--imagem-container">
            <img className="receitas_favoritas__card-container--imagem" src={gingerCupcake} />
          </div>
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Cupcakes de gengibre vegano</h3>
              <p>Cupcakes simples com especiarias, cobertos com uma deliciosa cobertura de cream cheese.</p>
              <BotaoVerdeInlined texto='Ver mais' />
            </div>
          </div>
        </div>
        <div className="receitas_favoritas__card-container--card">
          <div className="receitas_favoritas__card-container--imagem-container">
            <img className="receitas_favoritas__card-container--imagem" src={devilChoc} />
          </div>
          <div className="receitas_favoritas__card-container--caption_container">
            <div className="card-container--caption">
              <h3>Devil's double choc malt cookies</h3>
              <p>Asse isso e seu rosto vai doer de tanto que você estará sorrindo, mastigando e esperando por outro.</p>
              <BotaoVerdeInlined texto='Ver mais' />
            </div>
          </div>
        </div>
      </div>
    </ReceitasFavoritasCardWrapper >
  )
}
