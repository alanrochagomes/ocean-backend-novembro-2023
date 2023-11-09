const express = require('express')
const app = express()

// Registrar um Middleware
// indica que todas as requisições podem receber
// Body em JSON. A partir disso, o Express aplica
// um JSON.parse para o conteúdo recebido
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
 res.send("Olá, mundo!")
})

const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]
//                0                 1              2
// Read by ID - [GET] /item
app.get("/item", function (req, res) {
  res.send(lista)
})

// Read by ID - [GET] /item/:id
app.get("/item/:id", function (req, res) {
  // Pegamos o ID de rota e subtraímos 1 para ficar
  // equivale ao indice da lista que começa em 0
  const id = req.params.id - 1
  
  // Acessamos o item na lista, usando o indice corrigindo
  const item = lista[id]

  // Enviamos o item como resposta do endpoint
  res.send(item)
})

// Create - [POST] /item
app.post("/item", function (req, res) {
  // Extraímos o nome do Body da Requisição
  const item = req.body.nome

  //adicionamos o item recebido na lista
  lista.push(item)

  // Exibimos uma mensagem de sucesso
  res.send("item adicionado com sucesso!")
})

// Update - [PUT] /item/:id
app.put("/item/:id", function (req, res) {
  // Obtemos o ID do parâmetro de rota e fazemos 
  // a correção de índice
  const id = req.params.id - 1

  // Obtemos o novo item a ser atualizado
  const novoItem = req.body.nome

 // enviamos uma mensagem de sucesso
  lista[id] = novoItem

  res.send("Item atualizado com sucesso!")
}) 


app.listen(3000)