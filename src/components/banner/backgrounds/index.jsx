import { BotaoVerdeMaisEscuroWrapper } from "../../botoes/styles";
import { BannerBackgroundWrapper } from "./styles";
// import { pegaBannerInfo } from '../../../api';
import { useEffect, useState } from "react";

export default function BannerBackground() {
  // const [newRecipe, setNewRecipe] = useState();

  // useEffect(() => {
  //   fetch('http://localhost:5174/Banner', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then(resposta => resposta.json())
  //     .then(data => setNewRecipe(data))
  //     .catch(erro => console.log(erro))
  // }, [])

  // const { 
  //   tituloTag,
  //    titulo, 
  //    conteudo, 
  //    fundoTematico, 
  //    imagemIlustrativa } = newRecipe.Novidades;

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