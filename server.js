const express = require('express');
const morgan = require('morgan');

const app = express()
const port = process.env.port || 3333

app.use(morgan('dev'));
app.use(express.static('public'))

app.listen(port, () => console.log(`Proxy server running from port ${port}!`))
