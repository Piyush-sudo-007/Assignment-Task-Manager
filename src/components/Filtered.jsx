import { useContext } from "react";
import { TaskList } from "../utility/Task-manager";
import TaskCard from "./TaskCard";

const Filtered = () => {
  const { filteredTaskList } = useContext(TaskList);

  return (
    <div className="task-cards">
      {filteredTaskList.length > 0 ? (
        filteredTaskList.map((task) => <TaskCard key={task.Id} task={task} />)
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default Filtered;
