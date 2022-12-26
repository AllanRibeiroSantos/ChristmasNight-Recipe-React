import { PainelWrapper } from "../styles";
import devilCookie from '../../../../assets/img/devil-double-choc.png';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import ValorNutricional from "./valorNutricional";
import { GiCupcake } from 'react-icons/gi';

export default function Painel() {
  return (
    <PainelWrapper >
      <div className="receita__painel">
        <div className="painel__imagem--container">
          <img src={devilCookie} />
          <div className="painel__imagem--favoritos">
            <AiOutlineHeart />
          </div>
          <div className="painel__imagem--favoritos">
            <AiTwotoneHeart />
          </div>
        </div>
        <div className="painel__ingredientes--container">
          <div className="painel__ingredientes--text">
            <h1>Ingredientes</h1>
            <div className="ingredientes-e-info">
              <ol>
                <li>50 g unsalted butter</li>
                <li>200 g quality dark chocolate (70%)</li>
                <li>1 x 396 g tin of condensed milk</li>
                <li>25 g ground almonds</li>
                <li>2 heaped teaspoons Horlicks</li>
                <li>200 g self-raising flour</li>
                <li>100 g Maltesers</li>
                <li>50 g quality white chocolate</li>
                <li>A partir daqui não conta</li>
                <li>120 ml organic soya milk</li>
                <li>2 pieces of stem ginger , in syrup</li>
                <li>ICING</li>
                <li>200 g icing sugar</li>
                <li>55 g dairy-free margarine</li>
                <li>200 g dairy-free cream cheese</li>
              </ol>
              <div className="info">
                <p>Porções: 12</p>
                <p>Fica pronto em: 45 minutos</p>
                <p>Dificuldade: 2</p>
              </div>
            </div>
            <div className="de-sua-nota">
              <p>
                DE SUA NOTA PARA A RECEITA:
              </p>
              <div className="de-sua-nota__cupcake">
                <span className="cupcake"><GiCupcake /></span>
                <span className="cupcake"><GiCupcake /></span>
                <span className="cupcake"><GiCupcake /></span>
                <span className="cupcake"><GiCupcake /></span>
                <span className="cupcake"><GiCupcake /></span>
              </div>
            </div>
          </div>
          <ValorNutricional />
        </div>
      </div>
    </PainelWrapper >
  )
}