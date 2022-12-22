import ReceitasFavoritasCard from "./receitasFavoritasCard";
import { ReceitasFavoritasWrapper } from "./styles";

export default function ReceitasFavoritas() {
  return (
    <ReceitasFavoritasWrapper >
      <section className="main_content__receitas_favoritas">
        <div className="receitas_favoritas__titulo_principal">
          <h1>Separamos as três melhores receitas baseados na votação do povo.</h1>
          <div className="receitas_favoritas__titulo_principal--line"></div>
          <ReceitasFavoritasCard />
        </div>
      </section>
    </ReceitasFavoritasWrapper>
  )
}
