import BotaoLaranjaInlined from "../../../../botoes/BotaoLaranjaInlined";
import { ChamadoReceitasWrapper } from "./styles";

export default function Chamado() {
  return (
    <ChamadoReceitasWrapper >
      <section className="main_content__chamado" >
        <div className="chamado__image" />
        <div className="chamado__image--text">
          <h1>Christmas Night trás para você as melhores receitas para você e sua familia na noite de natal.</h1>
          <p>Se você não sabe o que fazer para sua ceia de natal então você está no lugar certo! Dê uma olhada em nossas melhores receitas e encha sua mesa com deliciosos doces natalinos. </p>
          <BotaoLaranjaInlined texto='Veja a lista' />
        </div>
      </section>
    </ChamadoReceitasWrapper>
  )
}