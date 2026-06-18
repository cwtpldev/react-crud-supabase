import { useState, useEffect } from 'react'
import { X, Save } from 'lucide-react'

export default function Modal({ user, onClose, onSave }) {
  const [form, setForm] = useState({ name: '', email: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) setForm({ name: user.name, email: user.email })
  }, [user])

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await onSave(user.id, form)
    setLoading(false)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row" style={{ flexDirection: 'column' }}>
            <div className="form-group">
              <label htmlFor="edit-name">Name</label>
              <input
                id="edit-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-email">Email</label>
              <input
                id="edit-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-actions" style={{ marginTop: '1.5rem' }}>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              <Save size={16} />
              {loading ? 'Saving…' : 'Save Changes'}
            </button>
            <button className="btn btn-ghost" type="button" onClick={onClose}>
              <X size={16} />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
