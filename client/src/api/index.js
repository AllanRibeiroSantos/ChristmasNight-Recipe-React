import axios from "axios"
import { db } from "../../db"
// Não estarei utilizando o axios ou fetch para pegar informações da API porque o JSONserver está dando problemas de CORS

// export function getRecipe(state) {
//   state(db.receitas)
// }

export function getSingleRecipe(id, state) {
  state(db.receitas.id)
}

export function getBannerNews(state) {
  state(db.Banner.novidades)
}

export function getRecipe(state) {
  axios.get("http://localhost:3000/receitas", )
  .then(resp => {
    state(resp.data);
  })
  .catch(error => console.log(error))
}
