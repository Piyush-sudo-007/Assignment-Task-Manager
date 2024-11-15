import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";
import { useContext } from "react";

const Pending = () => {
  const { taskList } = useContext(TaskList);

  const pendingTasks = taskList.filter((task) => !task.completed);

  return (
    <div className="task-section">
      <h2>Pending Tasks</h2>
      <div className="task-list">
        {pendingTasks.map((task) => (
          <TaskCard key={task.Id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Pending;
