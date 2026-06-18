import { Pencil, Trash2, Users } from 'lucide-react'

export default function UserTable({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="empty">
        <Users size={48} />
        <p>No users yet. Add one above!</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id}>
              <td><span className="badge">{idx + 1}</span></td>
              <td>{user.name}</td>
              <td style={{ color: 'var(--muted)' }}>{user.email}</td>
              <td style={{ color: 'var(--muted)', fontSize: '.8rem' }}>
                {new Date(user.created_at).toLocaleDateString()}
              </td>
              <td>
                <div className="td-actions">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => onEdit(user)}
                    title="Edit"
                  >
                    <Pencil size={14} /> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(user.id)}
                    title="Delete"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
