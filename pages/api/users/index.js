import { users } from '@/data/users';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET: Return the list of users
    res.status(200).json(users);
  } 
  else if (req.method === 'POST') {
    // POST: Optional (for testing only via Postman or cURL)
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: "Name is required." });
      return;
    }

    const newUser = {
      id: users.length + 1,
      name
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } 
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
