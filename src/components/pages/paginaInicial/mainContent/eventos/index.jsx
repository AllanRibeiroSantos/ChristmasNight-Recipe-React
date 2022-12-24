import BotaoLaranjaInlined from "../../../../botoes/BotaoLaranjaInlined";
import { EventosWrapper } from "./styles";

export default function Eventos() {
  return (
    <EventosWrapper >
      <section className="eventos__container">
        <div className="eventos__container--text">
          <h2>Eventos especiais natalinos</h2>
          <p>Uma vez por semana no mês de dezembro fazemos eventos para reunião e compartilhamento de delícias natalinas. Junte-se conosco à esse evento. Confira o local do evento no mapa abaixo.</p>
          {/* <BotaoLaranjaInlined texto='Confira' /> */}
        </div>
      </section>
    </EventosWrapper>
  )
}