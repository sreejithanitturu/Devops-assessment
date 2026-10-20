const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from my DevOps assessment!',
    author: 'Sreejitha'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
