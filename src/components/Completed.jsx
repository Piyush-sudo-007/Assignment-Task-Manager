import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";
import { useContext } from "react";

const Completed = () => {
  const { taskList } = useContext(TaskList);

  const completedTasks = taskList.filter((task) => task.completed);

  return (
    <div className="task-section">
      <h2>Completed Tasks</h2>
      <div className="task-list">
        {completedTasks.map((task) => (
          <TaskCard key={task.Id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Completed;
