const express = require('express')

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello World Ignite" })
})

const port = 3333;
app.listen(port)
//listen, é uma função para startar nossa apl

console.log("Servidor rodando na porta: " + port)