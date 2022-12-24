import { ReceitasWrapper } from "../../../styles"
import Footer from "../../footer"
import ReceitasHeader from "./header"
import ReceitasCard from "./receitasCard"

export default function Receitas() {
  return (
    <ReceitasWrapper >
      <ReceitasHeader />
      <div className="receitas__container">
        <div className="receitas">
          <div className="receitas__titulo">
            <h1>Receitas</h1>
            <p>Explore our huge selection of delicious recipe ideas including; easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes.</p>
          </div>
          <ReceitasCard />
          <ReceitasCard />
          <ReceitasCard />
        </div>
      </div>
      <Footer />
    </ReceitasWrapper>
  )
}
