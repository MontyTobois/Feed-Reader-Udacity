const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {

  res.json("index")
});

const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, () => console.log(`Server started on port ${port}`));