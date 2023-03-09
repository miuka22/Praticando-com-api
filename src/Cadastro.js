const express = require ('express');
const cadastro = express();

cadastro.use (express.json)
cadastro.listen(9000,() => {
    console.log('servidor rodando')
})
