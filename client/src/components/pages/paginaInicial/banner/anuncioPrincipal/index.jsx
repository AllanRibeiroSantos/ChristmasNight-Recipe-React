import BotaoLaranjaInlined from "../../../../botoes/BotaoLaranjaInlined";
import { AnuncioPrincipalWrapper } from "./styles";

export default function AnuncioPrincipal() {
  return (
    <AnuncioPrincipalWrapper >
      <h1>Cookies, bolos, cafés e mais.</h1>
      <p>O Natal é uma época festiva em que a família se reúne para celebrar. Pensando nisso, montamos uma lista repleta de receitas deliciosas para a sua Noite de Natal.</p>
      <BotaoLaranjaInlined
        texto='Confira nosso catálogo'
        link='/receitas' />
    </AnuncioPrincipalWrapper>
  )
}
