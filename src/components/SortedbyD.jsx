import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";

const SortedbyD = () => {
  const { taskList } = useContext(TaskList);

  const sortedTasks = taskList
    .map((task) => ({
      ...task,
      dueDateTime: new Date(`${task.date}T${task.time}`),
    }))
    .sort((a, b) => a.dueDateTime - b.dueDateTime);

  return (
    <div className="task-section">
      <div className="task-list">
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => <TaskCard key={task.Id} task={task} />)
        ) : (
          <p style={{ color: "red", fontSize: "25px" }}>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default SortedbyD;
