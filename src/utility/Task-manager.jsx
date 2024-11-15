import { createContext, useReducer, useState } from "react";

export const TaskList = createContext({
  taskList: [],
  addTask: () => {},
  deleteTask: () => {},
  updateTaskStatus: () => {},
  handleSearchChange: () => {},
  filteredTaskList: [],
});

const taskListReducer = (currentTaskList, action) => {
  if (!Array.isArray(currentTaskList)) {
    currentTaskList = [];
  }

  let newTaskList = [...currentTaskList];

  switch (action.type) {
    case "ADD_TASK":
      newTaskList = [
        ...currentTaskList,
        {
          Id: Date.now() + Math.random() * 1000,
          title: action.payload.title,
          body: action.payload.body,
          date: action.payload.dueDate,
          time: action.payload.dueTime,
          priority: action.payload.priority,
          completed: false,
        },
      ];
      break;

    case "DELETE_TASK":
      newTaskList = currentTaskList.filter(
        (task) => task.Id !== action.payload.taskId
      );
      break;

    case "UPDATE_TASK_STATUS":
      newTaskList = currentTaskList.map((task) =>
        task.Id === action.payload.taskId
          ? { ...task, completed: action.payload.completed }
          : task
      );
      break;

    default:
      return currentTaskList;
  }

  localStorage.setItem("taskList", JSON.stringify(newTaskList));

  return newTaskList;
};

const TaskListProvider = ({ children }) => {
  const savedTasks = localStorage.getItem("taskList");
  const initialTask = savedTasks ? JSON.parse(savedTasks) : [];

  const [taskList, dispatchTaskList] = useReducer(taskListReducer, initialTask);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTaskList = Array.isArray(taskList)
    ? taskList.filter((task) =>
        task.title.toUpperCase().includes(searchTerm.toUpperCase())
      )
    : [];

  const addTask = (title, body, dueDate, dueTime, priority) => {
    console.log("Adding task:", { title, body, dueDate, dueTime, priority });
    dispatchTaskList({
      type: "ADD_TASK",
      payload: { title, body, dueDate, dueTime, priority },
    });
  };

  const deleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    dispatchTaskList({
      type: "DELETE_TASK",
      payload: { taskId },
    });
  };

  const updateTaskStatus = (taskId, completed) => {
    console.log(
      "Updating task status for ID:",
      taskId,
      "to completed:",
      completed
    );
    dispatchTaskList({
      type: "UPDATE_TASK_STATUS",
      payload: { taskId, completed },
    });
  };

  return (
    <TaskList.Provider
      value={{
        taskList,
        addTask,
        deleteTask,
        updateTaskStatus,
        handleSearchChange,
        filteredTaskList,
      }}
    >
      {children}
    </TaskList.Provider>
  );
};

export default TaskListProvider;
