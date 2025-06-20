import { useState, useEffect } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    fetch('/api/users')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ marginBottom: '20px', marginTop: '20px'}}>User List</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul style={{ listStyleType: 'none' , marginTop: '20px', marginBottom: '20px'}}>
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '10px', marginTop: '10px', padding: '10px', border: '8px solid #ccc',  borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
              ID: {user.id}, Name: {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
