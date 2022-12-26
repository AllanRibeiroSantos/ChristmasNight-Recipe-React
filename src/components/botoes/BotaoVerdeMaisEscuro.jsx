import { BotaoVerdeMaisEscuroWrapper } from "./styles"

export default function BotaoVerdeMaisEscuro({ texto }) {
  return (
    <BotaoVerdeMaisEscuroWrapper >
      <button className="botaoVerdeMaisEscuro">
        {texto}
      </button>
    </BotaoVerdeMaisEscuroWrapper >
  )
}
