// importando o modulo
let express = require('express');
let port = 3000;
//IMPORTAR O BANCO
const db = require('./bd');

// criar um objeto
let app = express();
app.use(express.json());

// criar uma rota(metodo)  simples 
app.get("/", async (req, resp) => {
    try {
        const [rows] = await db.query("SELECT * FROM ALUNO");
        resp.json(rows);
    } catch (error) {
        resp.status(500).json({ error: error.message })
    }

});


//  inserir dados

app.post("/Alunos", async (req, resp) => {
    try {
        const { nome, email } = req.body;
        const sql = " INSERT INTO ALUNO ( NOME, EMAIL) VALUES ( ? , ?) ";
        const resutado = await db.query(sql, [nome, email]);
        resp.json({
            "servidor": "cadastrado"
        });
    } catch (error) {
        resp.json({
            erro: error.message
        })
    }
})

// para alterar dados
app.put("/update/:id", (req, resp) => {
    // pegar o id 
    let id = req.params.id
    resp.json({
        "update": "alterado",
        "id": id
    });
})

// deletar
app.delete("/delete/:id", async (req, resp) => {
    try {
        let id = req.params.id;
        const sql = "delete from aluno where id = ?";
        const resultado = await db.query(sql, [id])
        resp.json({
            "status": "deletado",
            "id": id
        })
    }catch(error){
        resp.json({
            erro : error.message
        })
    }
})

// criar o servidor
app.listen(port, () => {
    console.log(`executar o servidor endereço \n
                  http://localhost:${port} `);
});