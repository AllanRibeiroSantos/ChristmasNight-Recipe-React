export function pegaReceitas(state) {
  fetch('http://localhost:5174/receitas', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(resposta => resposta.json())
    .then(data => console.log(data))
    .catch(erro => console.log(erro))
}

export function pegaBannerInfo(state) {
  fetch('http://localhost:5174/Banner', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(resposta => resposta.json())
    .then(data => console.log(data))
    .catch(erro => console.log(erro))
}
