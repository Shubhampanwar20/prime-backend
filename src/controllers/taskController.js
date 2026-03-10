import pool from "../config/db.js";

/*
CREATE TASK
POST /api/v1/tasks
*/
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query(
      "INSERT INTO tasks (title, description, user_id) VALUES ($1,$2,$3) RETURNING *",
      [title, description, req.user.id]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/*
GET TASKS
GET /api/v1/tasks
*/
export const getTasks = async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM tasks WHERE user_id=$1 ORDER BY created_at DESC",
      [req.user.id]
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/*
UPDATE TASK
PUT /api/v1/tasks/:id
*/
export const updateTask = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description } = req.body;

    const result = await pool.query(
      `UPDATE tasks
       SET title=$1, description=$2
       WHERE id=$3 AND user_id=$4
       RETURNING *`,
      [title, description, id, req.user.id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/*
DELETE TASK
DELETE /api/v1/tasks/:id
*/
export const deleteTask = async (req, res) => {
  try {

    const { id } = req.params;

    await pool.query(
      "DELETE FROM tasks WHERE id=$1 AND user_id=$2",
      [id, req.user.id]
    );

    res.json({ message: "Task deleted" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/*
TOGGLE COMPLETE
PATCH /api/v1/tasks/:id/complete
*/
export const toggleComplete = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `UPDATE tasks
       SET completed = NOT completed
       WHERE id=$1 AND user_id=$2
       RETURNING *`,
      [id, req.user.id]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};