// const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('./build'));

app.get('*', (req, res) => {
    res.sendFile(`${process.env.pwd()}/build/index.html`);
});

app.listen(port, () => {
    console.log(`serverlistening to port ${port}`);
});

