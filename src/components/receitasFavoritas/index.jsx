import ReceitasFavoritasCard from "./receitasFavoritasCard";
import { ReceitasFavoritasWrapper } from "./styles";

export default function ReceitasFavoritas() {
  return (
    <ReceitasFavoritasWrapper >
      <section className="main_content__receitas_favoritas">
        <div className="receitas_favoritas__titulo_principal">
          <h1>Elvish's favorite desserts have been chosen. The fans have spoken.</h1>
          <div className="receitas_favoritas__titulo_principal--line"></div>
          <ReceitasFavoritasCard />
        </div>
      </section>
    </ReceitasFavoritasWrapper>
  )
}
