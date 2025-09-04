const express = require('express');
const app = express();
// req => middleware => res
const logger = require('./logger');
const authorize = require('./autorize');
app.use('/api', [logger, authorize])

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})
