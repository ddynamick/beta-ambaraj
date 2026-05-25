
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Ambaraj Samaj Backend Running' });
});

app.get('/api/members', (req, res) => {
  res.json([
    { id: 1, name: 'Demo Member', city: 'Ahmedabad' }
  ]);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
