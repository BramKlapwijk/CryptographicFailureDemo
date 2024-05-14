const express = require('express')
const database = require('./database');
const app = express()
const port = 3000;

const DatabaseObject = new database();
await DatabaseObject.Init();

app.get('/users', async (req, res) => {
    await DatabaseObject.ExecuteQuery("SELECT * FROM [Users]")
    res.send('Hello World!');
});

app.post('/users', async (req, res) => {
    const postBody = {
      Password: req.query.password,
      Email: req.query.email,
      CreditcardNumber: req.query.creditcard,
      CreditcardPin: req.query.creditpin,
      PasswordHint: req.query.passwordhint
    };

    await DatabaseObject.ExecuteQuery(
      "INSERT INTO [Users] (Password, Email, CreditcardNumber, CreditcardPin, PasswordHint) VALUES ?",
      postBody
    );

    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})