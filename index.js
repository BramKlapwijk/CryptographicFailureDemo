const express = require('express')
const database = require('./database');
const app = express()
const port = 3000;

const DatabaseObject = new database();
DatabaseObject.Init();

app.get('/users', async (req, res) => {
    let data = await DatabaseObject.ExecuteQuery("SELECT * FROM [Users]")
    res.send(data);
});

app.get('/users/insert', async (req, res) => {
    const postBody = {
      Password: req.query.password,
      Email: req.query.email,
      CreditcardNumber: req.query.creditcard,
      CreditcardPin: req.query.creditpin,
      PasswordHint: req.query.passwordhint
    };

    await DatabaseObject.ExecuteQuery(
      "INSERT INTO [Users] (Password, Email, CreditcardNumber, CreditcardPin, PasswordHint) VALUES (@Password, @Email, @CreditcardNumber, @CreditcardPin, @PasswordHint)",
      postBody
    );

    res.send(postBody);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})