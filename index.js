const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/oi", function (req, res) {
 res.send("Olá, mundo!")
})

const lista = ["Rick Sanchez", "Morty Smith", "Summer Smith"]
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

app.listen(3000)