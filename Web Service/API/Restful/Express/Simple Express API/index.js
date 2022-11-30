const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my express API :D')
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});