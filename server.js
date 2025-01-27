import app from './src/app.js';

import conexao from './infra/conexao.js';

const PORT = 3000

// fazer a conexão
conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log(`Conexão realizada com sucesso`)
        // escutar a porta 3000

        app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
})
    }
})

