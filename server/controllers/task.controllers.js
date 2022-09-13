import {pool} from '../db.js'

export const getTasks = (req, res) => {
  res.send('Oteniendo tareas')
};

export const getTask = (req, res) => {
  res.send('Obteniendo una tarea')
}

export const deleteTask = (req, res) => {
  res.send('Borrando tarea')
}

export const createTask = async (req, res) => {
  const {title, description} = (req.body);
  const [result] = await pool.query(
    'INSERT INTO task (title, description) VALUES (?, ?)',
  [title, description]
  )
  console.log(result)
  res.json({
    id: result.id,
    title,
    description
  })
}

export const updateTask = (req, res) => {
  res.send('actualizando tarea');
}