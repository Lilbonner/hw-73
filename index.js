const express = require('express')
const app = express();
const port = 7000;

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})