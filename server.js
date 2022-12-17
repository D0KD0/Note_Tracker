const express = require ('express');
const path = require ("path");
const {json} = require ('express');
const api = require ('./routes/index')

const PORT = process.env.PORT || 3010;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () =>
  console.log(`Now it runs at http://localhost:${PORT} `)
);
