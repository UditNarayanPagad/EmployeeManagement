import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData, setLoggedIn, loggedIn } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.name === asignTo) {
        const updatedTasks = [
          ...emp.tasks,
          { title, description, category, date, active: false, completed: false, newTask: true, failed: false },
        ];
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });
    const updatedUserData = {
      ...userData,
      employees: updatedEmployees,
    };
  
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setTitle("");
    setAsignTo("");
    setCategory("");
    setDate("");
    setDescription("");
    // setLoggedIn((prev) => !prev);
  };
  

  return (
    <div className="w-full px-8">
      <form
        action=""
        className="flex w-full justify-between items-center"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="w-[50%] flex flex-col gap-1">
          <h1>Task title</h1>
          <input
            type="text"
            placeholder="Eg: Make a UI design"
            className="w-full px-3 py-2 rounded-lg bg-black outline-none border-gray-100 border-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h1>Date</h1>
          <input
            type="date"
            className="w-full px-3 py-2 rounded-lg bg-black outline-none border-gray-100 border-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h1>Assign to</h1>
          <select name="cars" id="cars" className="bg-black text-white border-2 border-gray-100 px-3 py-2 rounded-lg" value={asignTo} onChange={(e) => setAsignTo(e.target.value)}>
          <option value="">Select an employee</option>
            {userData.employees.map((emp, indx) => {
              return <option key={indx} >{emp.name}</option>
            })}
          </select>
          <h1>Category</h1>
          <input
            type="text"
            placeholder="Eg: Design, Development etc."
            className="w-full px-3 py-2 rounded-lg bg-black outline-none border-gray-100 border-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="w-[40%] flex flex-col gap-2">
          <h1>Description</h1>
          <textarea
            name=""
            placeholder="Description.."
            id=""
            className="h-40 outline-none rounded-lg p-2 bg-black border-2 border-zinc-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="bg-green-700 px-3 py-2 rounded-lg hover:bg-green-600 ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
