class Tables {

    init (connection) {
        this.criarConnection = connection
        this.createTableCliente()
    }
    
    async createTableCliente () {

        const sql = 
            `CREATE TABLE IF NOT EXISTS clientes(
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                nome VARCHAR (100) NOT NULL,
                email VARCHAR (100) NOT NULL UNIQUE,        
                telefone VARCHAR (15),
                data_de_nascimento DATE,
                data_cadastro DATE
            );
            `

        const connection = await this.criarConnection()

        connection.query(sql)
        .catch(err => console.error(err))

    }
}

module.exports = new Tables()