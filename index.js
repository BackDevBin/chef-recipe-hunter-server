const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})


app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(n => n._id === parseInt(id));
    res.send(chef);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})