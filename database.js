const sql = require('mssql');

class Database {
    async Init() {
        try {
            await sql.connect('Server=127.0.0.1;Database=CryptographicFailureDemo;TrustServerCertificate=True;User Id=sa;Password=Strong!Password');
        } catch (err) {
            console.error(err);
        }
    }
    async ExecuteQuery(query, body = null) {
        const request = new sql.Request();
        if (body) {
            Object.keys(body).forEach(key => {
                console.log(key, body[key]);
                request.input(key, sql.VarChar, body[key]);
            });
        }
        let data = await request.query(query, body);
        console.log(data);
        return data.recordset;
    }
}

module.exports = Database;