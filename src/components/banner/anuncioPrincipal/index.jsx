import { BotaoLaranjaInlinedWrapper } from "../../botoes/styles";
import { AnuncioPrincipalWrapper } from "./styles";

export default function AnuncioPrincipal() {
  return (
    <AnuncioPrincipalWrapper >
      <h1>Cookies, bolos, chás, cafés e mais.</h1>
      <p>O Natal é uma época festiva em que a família se reúne para celebrar. Pensando nisso, montamos uma lista repleta de receitas deliciosas para a sua Noite de Natal.</p>
      <BotaoLaranjaInlinedWrapper >
        <button className="banner__botaoLaranjaInlined">
          Confira nosso catálogo
        </button>
      </BotaoLaranjaInlinedWrapper>
    </AnuncioPrincipalWrapper>
  )
}
