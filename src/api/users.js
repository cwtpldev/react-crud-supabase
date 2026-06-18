import { supabase } from '../lib/supabaseClient'

const TABLE = 'users'

export async function getUsers() {
  const { data, error } = await supabase
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function createUser({ name, email }) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert([{ name, email }])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateUser(id, { name, email }) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({ name, email })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteUser(id) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq('id', id)
  if (error) throw error
}
