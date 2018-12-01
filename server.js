const express = require('express');

const app = express();

app.get('/jasmine', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, () => console.log(`Server started on port ${port}`));
