import { BotaoVerdeMaisEscuroBannerWrapper } from "../../../../botoes/styles";
import { BannerBackgroundWrapper } from "./styles";
// import { pegaBannerInfo } from '../../../api';
import { useEffect, useState } from "react";
import BotaoVerdeMaisEscuro from "../../../../botoes/BotaoVerdeMaisEscuro";
import { Link } from "react-router-dom";
import { getBannerNews } from "../../../../../api";

export default function BannerBackground() {
  const [newRecipe, setNewRecipe] = useState([]);

  useEffect(() => {
    getBannerNews(setNewRecipe);
  }, []);

  const lastestUpdatedRecipe = newRecipe[newRecipe.length - 1];
  // console.log(lastestUpdatedRecipe.titulo);

  return (
    <BannerBackgroundWrapper>
      <div className="banner__fundoTematico"></div>
      <div className="banner__imagemIlustrativa"></div>
      <div className="banner__fundoTexto2">
        <div className="banner__fundoTexto2--text">
          {/* <h3>{lastestUpdatedRecipe.titulo}</h3> */}
          <h1>Biscoitos Amanteigados</h1>
          <p>
            Biscoitos amanteigados com a ponta mergulhada na Nutella, o sabor do
            gengibre dá um toque natalino à essa maravilha.
          </p>
        </div>
        <BotaoVerdeMaisEscuroBannerWrapper>
          <Link to="/receitas">
            <button className="botaoVerdeMaisEscuro">Veja mais...</button>
          </Link>
        </BotaoVerdeMaisEscuroBannerWrapper>
      </div>
    </BannerBackgroundWrapper>
  );
}
