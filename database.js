const sql = require('mssql');

class Database {
    async Init() {
        this.config = {
            server: 'localhost',
            authentication: {
              type: 'default',
              options: {
                userName: 'sa',
                password: 'Strong!Password'
                }
            }
        }
        try {
            await sql.connect('Server=127.0.0.1;Database=CryptographicFailureDemo;TrustServerCertificate=True;User Id=sa;Password=Strong!Password');
        } catch (err) {
            console.error(err);
        }
    }
    async ExecuteQuery(query, body) {
        const request = new sql.Request()
        request.input('myval', sql.VarChar, '-- commented')
        let data = await request.query(query, body);
        console.log(data);
        return data;
    }
}

module.exports = Database;