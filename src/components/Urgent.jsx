import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";
import { useContext } from "react";

const Urgent = () => {
  const { taskList } = useContext(TaskList);
  const highPriorityTask = taskList.filter((task) => task.priority === "high");

  return (
    <div className="task-section">
      <h2>Urgent Tasks</h2>
      <div className="task-list">
        {highPriorityTask.map((task) => (
          <TaskCard key={task.Id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Urgent;
