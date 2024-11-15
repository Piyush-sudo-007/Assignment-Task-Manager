import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskList } from "../utility/Task-manager";

const TaskListView = () => {
  const { taskList } = useContext(TaskList);

  return (
    <div className="task-cards">
      {taskList.length > 0 ? (
        taskList.map((task) => <TaskCard key={task.Id} task={task} />)
      ) : (
        <h1 style={{ color: "white", margin: "100px" }}>
          A Goal Without a Plan is just a wish...
        </h1>
      )}
    </div>
  );
};

export default TaskListView;
