import "./App.css";
import Sidebar from "./components/Sidebar";
import Front from "./components/Front";
import TaskListView from "./components/TaskList";
import TaskListProvider from "./utility/Task-manager";
import { useState } from "react";
import Add from "./components/Add";
import Completed from "./components/Completed";
import Pending from "./components/Pending";
import Urgent from "./components/Urgent";
import Sortedbyp from "./components/SortedbyP";
import SortedbyD from "./components/SortedbyD";
import Filtered from "./components/Filtered";

function App() {
  const [selectPage, setSelectPage] = useState("Home");
  const [filter, setFilter] = useState(false);

  return (
    <TaskListProvider>
      <Sidebar setSelectPage={setSelectPage} />
      {selectPage === "Home" && (
        <div className="main">
          <Front setSelectPage={setSelectPage} setFilter={setFilter} />
          {filter && <Filtered />}
          <hr style={{ height: "5px", color: "white" }} />
          <TaskListView />
        </div>
      )}

      {selectPage === "priority" && (
        <div className="main">
          <Front setSelectPage={setSelectPage} />
          <Sortedbyp />
        </div>
      )}
      {selectPage === "date" && (
        <div className="main">
          <Front setSelectPage={setSelectPage} />
          <SortedbyD />
        </div>
      )}
      {selectPage === "Add" && <Add setSelectPage={setSelectPage}></Add>}
      {selectPage === "Completed" && <Completed></Completed>}
      {selectPage === "Pending" && <Pending></Pending>}
      {selectPage === "Urgent" && <Urgent></Urgent>}
    </TaskListProvider>
  );
}

export default App;
