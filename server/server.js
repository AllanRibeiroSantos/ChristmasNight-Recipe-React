import { app } from "./src/app.js";
import { db } from "./dbConnect.js";
const port = process.env.PORT || 3000;

//Iniciando o servidor backend
app.listen(port, ()=> {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

//Iniciando banco de dados
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.on('open', ()=> console.log('Conexão com o banco feita com sucesso.'));