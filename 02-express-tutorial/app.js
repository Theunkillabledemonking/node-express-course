const express = require('express');
const path = require('path');
const app = express();

const { products } = require('./data')
// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('/', (req,res) => {
    res.send('<h1><My Page/h1><a href="/api/products">products</a>')
})



app.all('*', (req,res) => {
    res.status(404).send('404 not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})
