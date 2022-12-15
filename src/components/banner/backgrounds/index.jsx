import { BotaoVerdeMaisEscuroWrapper } from "../../botoes/styles";
import { BannerBackgroundWrapper } from "./styles";

export default function BannerBackground() {
  return (
    <BannerBackgroundWrapper >
      <div className="banner__fundoTematico" ></div>
      <div className="banner__imagemIlustrativa" ></div>
      <div className="banner__fundoTexto2">
        <div className="banner__fundoTexto2--text">
          <h3>Nova Receita</h3>
          <h1>Biscoitos Amanteigados</h1>
          <p>Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do gengibre dá um toque natalino à essa maravilha.</p>
        </div>
        <BotaoVerdeMaisEscuroWrapper >
          <button className="banner__buttonBUY">Veja mais...</button>
        </BotaoVerdeMaisEscuroWrapper>
      </div>
    </BannerBackgroundWrapper>
  )
}