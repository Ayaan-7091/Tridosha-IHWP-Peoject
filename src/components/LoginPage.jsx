import React, { useState } from 'react';
import logo from './logo.png';

export default function LoginPage({ users, addUser, setCurrentUser, setPage }) {
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setPage('home');
  };

  const handleNewUser = () => {
    if (name.trim()) {
      const newUser = addUser({
        name: name.trim(),
        prakriti: null,
        dietPreferences: [],
        schedule: null,
        updates: []
      });
      setPage('home');
      setName('');
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">Welcome to Tridosha</h1>

        {!showForm ? (
          <div className="space-y-4">
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold mb-6">
              Create New Profile
            </button>

            <div>
              <h2 className="text-lg font-bold text-green-900 mb-4">Existing Users ({users.length})</h2>
              {users.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No users yet. Create a new profile to get started!</p>
              ) : (
                <div className="space-y-2">
                  {users.map(user => (
                    <button
                      key={user.id}
                      onClick={() => handleLogin(user)}
                      className="w-full p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left border border-green-200">
                      <div className="font-semibold text-green-900">{user.name}</div>
                      <div className="text-sm text-gray-600">Prakriti: {user.prakriti || 'Not analyzed'}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              onClick={handleNewUser}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-semibold">
              Create Profile
            </button>
            <button
              onClick={() => { setShowForm(false); setName(''); }}
              className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
