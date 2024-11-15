import { useContext, useState } from "react";
import { TaskList } from "../utility/Task-manager";
import ViewTask from "./ViewTask";

const TaskCard = ({ task }) => {
  const { deleteTask, updateTaskStatus } = useContext(TaskList);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDelete = () => {
    deleteTask(task.Id);
  };

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCheckboxChange = (e) => {
    const completed = e.target.checked;
    updateTaskStatus(task.Id, completed);
  };

  const checkboxId = `checkbox-${task.Id}`;

  const priorityClass =
    task.priority === "high"
      ? "high-priority"
      : task.priority === "medium"
      ? "medium-priority"
      : "low-priority";

  return (
    <div>
      <div
        className={`task-card ${priorityClass} ${
          task.completed ? "completed" : "pending"
        }`}
      >
        <div className="check-container">
          <input
            type="checkbox"
            id={checkboxId}
            checked={task.completed}
            onChange={handleCheckboxChange}
            style={{ display: "none" }}
            className="cbx2"
          />
          <label htmlFor={checkboxId} className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </label>
        </div>
        <div className="task-title" onClick={handleCardClick}>
          {task.title}
        </div>
        <div className="task-date">{task.date}</div>
        <div className="task-time">{task.time}</div>
        <button
          type="button"
          className="btn btn-danger pi-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

      {isPopupOpen && <ViewTask task={task} onClose={handleClosePopup} />}
    </div>
  );
};

export default TaskCard;
