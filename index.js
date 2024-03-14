const express = require('express')
const app = express();
const port = 7000;

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});

const Vigenere = require('vigenere')

app.get('/encode/:password',(req,res) => {
    const password = req.params.password;
    const encodePassword = Vigenere.encode(password, 'hax0rk3y')
    res.send(encodePassword)
})

app.get('/decode/:password',(req,res) => {
    const password = req.params.password;
    const decodePassword = Vigenere.decode(password, 'hax0rk3y')
    res.send(decodePassword)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})