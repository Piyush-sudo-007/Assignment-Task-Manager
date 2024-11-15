import React from "react";

const ViewTask = ({ task, onClose }) => {
  const dueDate = new Date(task.date);
  const now = new Date();
  const timeDifference = dueDate - now;
  const daysRemaining = Math.floor(timeDifference / (1000 * 3600 * 24));

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>
          {task.title}
        </h1>
        <hr />
        <p>
          <strong>Description:</strong> {task.body}
        </p>
        <p>
          <strong>Due Date:</strong> {task.date}
        </p>
        <p>
          <strong>Remaining Time:</strong> {daysRemaining} days
        </p>
        <p>
          <strong>Priority:</strong> {task.priority}
        </p>
        <button className="btn btn-danger" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewTask;
