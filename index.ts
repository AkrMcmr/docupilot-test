// Simple Express API server
import express from 'express';

const app = express();
const PORT = 3000;

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', express.json(), (req, res) => {
  const user: User = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
