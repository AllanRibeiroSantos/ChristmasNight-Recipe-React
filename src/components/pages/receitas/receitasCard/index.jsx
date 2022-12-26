import { ReceitasCardWrapper } from "./styles";
import appleCake from '../../../../assets/img/apple-christmas.png';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import ReceitaCardNota from "./receitaCardNota";


export default function ReceitasCard() {
  return (
    <ReceitasCardWrapper >
      <div className="receita_card__container">
        <div className="receita_card__imagem-container">
          <img className="receita_card__imagem" src={appleCake} />
          {/* Um coração é oco e o outro é filled. Só deve virar filled quando for clicado */}
          <div className="receita_card__imagem--favoritos">
            <AiOutlineHeart />
          </div>
          <div className="receita_card__imagem--favoritos">
            <AiTwotoneHeart />
          </div>
        </div>
        <div className="receita_card__text">
          <h2>Bolo de maçã natalino sem glúten</h2>
          <p>Este bolo sem glúten vai fazer você entrar no espírito festivo, com maçãs doces, canela, gengibre e noz-moscada.</p>
          <p><span>Dificuldade: </span>2</p>
          <div className="receita_card__text--tag">
            <p>Tags: <span>{'Bolos'}</span>, <span>{'Sem glútem'}</span>
            </p>
          </div>
          <ReceitaCardNota />
        </div>
      </div>
    </ReceitasCardWrapper>
  )
}
