'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createAdmin, deleteAdmin, updatePassword, getAllAdmins } from '@/app/api/admin/api';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editAccount, setEditAccount] = useState(null);
  const router = useRouter();
  const queryClient = useQueryClient();

  // Check if the user is a super admin
  // useEffect(() => {
  //   const userRole = localStorage.getItem('userRole');
  //   if (userRole !== 'super-admin') {
  //     router.push('/login');
  //   }
  // }, [router]);

  // Fetch all accounts
  const { data: accounts, isLoading } = useQuery(['admins'], getAllAdmins);
  console.log()

  // Create or update account mutation
  const saveAccountMutation = useMutation(createAdmin, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admins']);
      alert(editAccount ? 'Account updated successfully!' : 'Account created successfully!');
      setUsername('');
      setPassword('');
      setEditAccount(null);
    },
  });

  // Delete account mutation
  const deleteAccountMutation = useMutation(deleteAdmin, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admins']);
      alert('Account deleted successfully');
    },
  });

  // Handle save account
  const handleSaveAccount = (e) => {
    e.preventDefault();

    if (username && password) {
      const accountData = { username, password, isSuperAdmin: false };
      saveAccountMutation.mutate(accountData);
    } else {
      alert('Please fill in all fields');
    }
  };

  // Handle edit account
  const handleEditAccount = (account) => {
    setUsername(account.username);
    setPassword(account.password);
    setEditAccount(account);
  };

  // Handle delete account
  const handleDeleteAccount = (id) => {
    deleteAccountMutation.mutate(id);
  };

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {editAccount ? 'Update Account' : 'Create New Account'}
        </h2>

        <form onSubmit={handleSaveAccount}>
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D31145] text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            {editAccount ? 'Update Account' : 'Create Account'}
          </button>
          {editAccount && (
            <button
              type="button"
              onClick={() => {
                setUsername('');
                setPassword('');
                setEditAccount(null);
              }}
              className="w-full mt-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </form>

        <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Existing Accounts</h3>
        <ul className="space-y-4">
          {accounts?.map((account) => (
            <li key={account.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
              <div>
                <p className="font-semibold">{account.username}</p>
                <p className="text-sm text-gray-600">Role: {account.isSuperAdmin ? 'Super Admin' : 'Admin'}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditAccount(account)}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAccount(account.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
