import { ReceitaCardNotaWrapper } from "./styles";
import { GiCupcake } from 'react-icons/gi';
import BotaoVerdeMaisEscuro from "../../../../botoes/BotaoVerdeMaisEscuro";

export default function ReceitaCardNota() {
  return (
    <ReceitaCardNotaWrapper >
      <p>Nota:</p>
      <div className="receita_card__text--nota">
        <div className="receita_card__text--cupcake">
          <GiCupcake />
        </div>
        <div className="receita_card__text--cupcake">
          <GiCupcake />
        </div>
        <div className="receita_card__text--cupcake">
          <GiCupcake />
        </div>
        <div className="receita_card__text--cupcake">
          <GiCupcake />
        </div>
        <div className="receita_card__text--cupcake">
          <GiCupcake />
        </div>
        <div className="receita_card__text--botao">
          <BotaoVerdeMaisEscuro texto='Ver receita' />
        </div>
      </div>
    </ReceitaCardNotaWrapper>
  )
}