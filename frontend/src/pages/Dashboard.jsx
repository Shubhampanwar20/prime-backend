import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setTasks(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "6px"
          }}>
            <p><strong>{task.title}</strong></p>
            <p>{task.description}</p>
            <p>Status: {task.completed ? "✅ Completed" : "❌ Pending"}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Dashboard;