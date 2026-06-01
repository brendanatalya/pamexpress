//importando o módulo express
let  express = require('express');
let port = 3000; //porta de conexao, igual o xampp
//add pasta de de plugins e front
//criar um objeto
let app = express();

//criar uma rota(metodo) simples

//o primeiro parametro é a requisição, oque vc vai enviar, entendeu? quanod chegar la no servidor essa resposta vai ser tratada.
app.get( "/",( req, resp )=> {
    resp.json("Pagina de resposta"); //a resposta que o servidor vai enviar para o cliente
});

app.post( "/alunos", (req, resp) => {
    let dadoshttp = req.body.nome;
    resp.json({
        "servidor" : "inserir",
        "dados" : dadoshttp
    });
});

//criar o servidor
app.listen(port, () => {
    console.log(`Executar o servidor endereço\n http://localhost:${port}`);
});
