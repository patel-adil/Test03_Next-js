import { users } from '../../../data/users';

export default function handler(req, res) {
  const { id } = req.query;

  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json(user);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
