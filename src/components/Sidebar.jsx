import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const Sidebar = ({ setSelectPage }) => {
  return (
    <div className="webmain">
      <div className="sidebar">
        <ul className="links">
          <h4>Task Manager</h4>
          <li>
            <span className="material-symbols-outlined">Home</span>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setSelectPage("Home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined">
              {" "}
              <MdOutlineAddToPhotos />
            </span>
            <a
              href="/"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setSelectPage("Add");
              }}
            >
              Add Task
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined">
              <MdOutlinePreview />
            </span>
            <a
              href="/"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setSelectPage("Urgent");
              }}
            >
              Urgent Tasks
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined">
              <MdIncompleteCircle />
            </span>
            <a
              href="/"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setSelectPage("Completed");
              }}
            >
              Completed Tasks
            </a>
          </li>
          <li>
            <span className="material-symbols-outlined">
              <PiDotsThreeOutlineFill />
            </span>
            <a
              href="/"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setSelectPage("Pending");
              }}
            >
              Pending Tasks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
