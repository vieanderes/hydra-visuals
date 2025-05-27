const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const sketchesDir = path.join(__dirname, 'public/sketches');

app.use(express.static('public'));

app.get('/sketches', (req, res) => {
  fs.readdir(sketchesDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Cannot read sketches directory' });
    const jsFiles = files.filter(f => f.endsWith('.js'));
    res.json(jsFiles);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
