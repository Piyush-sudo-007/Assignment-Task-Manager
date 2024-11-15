import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";
import { useContext } from "react";

const Sortedbyp = () => {
  const { taskList } = useContext(TaskList);
  const highPriorityTask = taskList.filter((task) => task.priority === "high");
  const mediumPriorityTask = taskList.filter(
    (task) => task.priority === "medium"
  );
  const lowPriorityTask = taskList.filter((task) => task.priority === "low");

  return (
    <div className="task-section">
      <h2>High Priority Tasks</h2>
      <div className="task-list">
        {highPriorityTask.length > 0 ? (
          highPriorityTask.map((task) => <TaskCard key={task.Id} task={task} />)
        ) : (
          <p style={{ color: "red", fontSize: "25px" }}>
            No high priority tasks.
          </p>
        )}
      </div>
      <h2>Medium Priority Tasks</h2>
      <div className="task-list">
        {mediumPriorityTask.length > 0 ? (
          mediumPriorityTask.map((task) => (
            <TaskCard key={task.Id} task={task} />
          ))
        ) : (
          <p style={{ color: "red", fontSize: "25px" }}>
            No medium priority tasks.
          </p>
        )}
      </div>
      <h2>Low Priority Tasks</h2>
      <div className="task-list">
        {lowPriorityTask.length > 0 ? (
          lowPriorityTask.map((task) => <TaskCard key={task.Id} task={task} />)
        ) : (
          <p style={{ color: "red", fontSize: "25px" }}>
            No low priority tasks.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sortedbyp;
