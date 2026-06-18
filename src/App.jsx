import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getUsers, createUser, updateUser, deleteUser } from './api/users'
import UserForm from './components/UserForm'
import UserTable from './components/UserTable'
import Modal from './components/Modal'

export default function App() {
  const [users, setUsers]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [editUser, setEditUser] = useState(null)

  const fetchUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (err) {
      toast.error('Failed to fetch users: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchUsers() }, [])

  const handleAdd = async (form) => {
    try {
      const user = await createUser(form)
      setUsers((p) => [user, ...p])
      toast.success('User added!')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const handleUpdate = async (id, form) => {
    try {
      const updated = await updateUser(id, form)
      setUsers((p) => p.map((u) => (u.id === id ? updated : u)))
      toast.success('User updated!')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return
    try {
      await deleteUser(id)
      setUsers((p) => p.filter((u) => u.id !== id))
      toast.success('User deleted!')
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>React CRUD · Supabase</h1>
        <p>Manage your users with ease</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <span>Total Users</span>
          <span>{users.length}</span>
        </div>
      </div>

      <UserForm onAdd={handleAdd} />

      <div className="card">
        <h2>All Users</h2>
        {loading ? (
          <div className="spinner" />
        ) : (
          <UserTable
            users={users}
            onEdit={setEditUser}
            onDelete={handleDelete}
          />
        )}
      </div>

      {editUser && (
        <Modal
          user={editUser}
          onClose={() => setEditUser(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  )
}
