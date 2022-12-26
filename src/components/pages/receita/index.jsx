import { ReceitaWrapper } from "./styles";
import Header from "../../header";
import Painel from "./painel/Painel";
import Footer from '../../footer/index';
import ModoDePreparo from "./modoDePreparo/ModoDePreparo";

export default function Receita() {
  return (
    <ReceitaWrapper >
      <Header />
      <div className="receita_container">
        <div className="receita_container__titulo">
          <h1>Devil's double choc malt cookies</h1>
          <div className="traco"></div>
          <p>I was very young when the realisation of the joy of the cookie hit me. I've never really met anyone that doesn't like a freshly baked cookie, and if anything, since I was a kid it's just become easier to get pre-made commercial, average, frankly boring cookies. So for me, baking your own is the only way to pass that perfection down the family to the next generation. The problem is, what flavour to choose – there's so many. Well, I've made it easy for you – this, in my view, is the best flavour combo. Bake these, and your face will hurt because you'll be smiling, chewing and gurning for another one.</p>
          <div className="traco"></div>
        </div>
        <Painel />
        <ModoDePreparo />
      </div>
      <Footer />
    </ReceitaWrapper >
  )
}