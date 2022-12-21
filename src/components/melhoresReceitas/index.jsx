import BotaoLaranjaInlined from "../botoes/BotaoLaranjaInlined";
import { MelhoresReceitasWrapper } from "./styles";

export default function MelhoresReceitas() {
  return (
    <MelhoresReceitasWrapper >
      <section className="main_content__melhores_receitas" >
        <div className="melhores_receitas__image" />
        <div className="melhores_receitas__image--text">
          <h1>Christmas Night trás para você as melhores receitas para você e sua familia na noite de natal.</h1>
          <p>Se você não sabe o que fazer para sua ceia de natal então você está no lugar certo! Dê uma olhada em nossas melhores receitas e encha sua mesa com deliciosos doces natalinos. </p>
          <BotaoLaranjaInlined texto='Veja a lista' />
        </div>
      </section>
    </MelhoresReceitasWrapper>
  )
}