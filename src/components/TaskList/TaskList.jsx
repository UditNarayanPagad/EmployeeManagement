import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = () => {
  const [loggedEmployee, setLoggedEmployee] = useState(null);
  const data = useContext(AuthContext);
  useEffect(() => {
    setLoggedEmployee(data.loggedInEmployeeData);
  }, [data,loggedEmployee]);
  return (
    <div
      id="taskList"
      className="h-[50vh] flex gap-3 justify-start items-center w-full py-4 px-2 overflow-x-auto"
    >
      {JSON.parse(localStorage.getItem("loggedInEmployeeData"))?.tasks.map(
        (elem, indx) => {
          if (elem?.active) {
            return <ActiveTask value={elem} key={indx} />;
          }
          if (elem?.failed) {
            return <FailedTask value={elem} key={indx} />;
          }
          if (elem?.completed) {
            return <CompletedTask value={elem} key={indx} />;
          }
          if (elem?.newTask) {
            return <NewTask value={elem} key={indx} />;
          }
        }
      )}
    </div>
  );
};

export default TaskList;
