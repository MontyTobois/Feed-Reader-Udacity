const express = require('express');

const app = express();

app.get('/index.html', (req, res) => {
  res.json("app");
});

app.get('/jamsine', (req, res) => {
  res.json("jasmine");
});


const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, () => console.log(`Server started on port ${port}`));
