import { useState, useEffect } from "react";
import { getRecipe } from "../../../api";
import { ReceitasWrapper } from "../../../styles";
import Footer from "../../footer";
import ReceitasHeader from "../../header";
import ReceitasCard from "./receitasCard";

export default function Receitas() {
  const [receita, setReceita] = useState([]);

  // useEffect(() => {
  //   getRecipe(setReceita);
  // }, []);
  // console.log(receita);

  return (
    <ReceitasWrapper>
      <ReceitasHeader />
      <div className="receitas__container">
        <div className="receitas">
          <div className="receitas__titulo">
            <h1>Receitas</h1>
            <p>
              Explore our huge selection of delicious recipe ideas including;
              easy desserts, delicious vegan and vegetarian dinner ideas,
              gorgeous pasta recipes, quick bakes, family-friendly meals and
              gluten-free recipes.
            </p>
          </div>
          {/* {receita.map((receita) => (
            <ReceitasCard
              key={receita._id}
              _id={receita._id}
              name={receita.name}
              servings={receita.servings}
              estimated_time={receita.estimated_time}
              difficulty={receita.difficulty}
              tag={receita.tag}
            />
          ))} */}
          <ReceitasCard />
          <ReceitasCard />
        </div>
      </div>
      <Footer />
    </ReceitasWrapper>
  );
}
