const express = require('express');
const app = express();

const PORT = 3000;

app.get('/get-user', (req, res) => {
    res.json({
        message: 'Heleo'
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})