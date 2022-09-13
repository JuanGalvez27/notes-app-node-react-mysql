import {pool} from '../db.js'

export const getTasks = async (req, res) => {
  try{
    const [result] = await pool.query(
      "SELECT * FROM task ORDER BY createdAT ASC"
      );
      
    res.json(result);
  } catch {
    return res.status(500).json({ message: "Concection error" });
  }
};

export const getTask = async (req, res) => {
    try {
      const id = Number(req.params.id);
      const [result] = await pool.query(
        "SELECT * FROM task WHERE id = ?", [id]
      )
      if(result.length === 0){
        return res.status(404).json({ message: "Task not found"});
      } else {
        res.json(result[0]);
      }
    } catch {
      return res.status(500).json({ message: "Connection error"})
    }
}

export const deleteTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [result] = await pool.query(
      "DELETE FROM task WHERE id = ?", [id]
    )
    if(result.affectedRows === 0){
      return res.status(404).json({ message: "Task not found"});
    } else {
      return res.status(204).end();
    }
  } catch {
    return res.status(500).json({ message: "Connection error" });
  }
}

export const createTask = async (req, res) => {
  try {
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
  } catch {
    return res.status(500).json({ message: "Connection error"});
  }
}

export const updateTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE task SET ? WHERE id = ?", [req.body, id]
    )
    res.json(result);
  } catch {
    return res.status(500).json({ message: "Connection error"});
  }
}