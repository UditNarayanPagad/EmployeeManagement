import React from "react";

const ActiveTask = ({value}) => {
  return (
    <div className="w-80 p-3 bg-green-600 flex-shrink-0 rounded-lg ">
      <div className="flex justify-between items-center">
        <h2 className="px-2 py-1 bg-red-500 rounded">{value.category}</h2>
        <h3>{value.date}</h3>
      </div>
      <div className="text-center p-2">
        <h1 className="text-2xl text-center font-bold">{value.title}</h1>
        <p>
          {value.description}
        </p>
      </div>
      <div className="w-full text-center">
        <button className="bg-purple-700 rounded-lg py-1 px-3">Finish Task</button>
      </div>
    </div>
  );
};

export default ActiveTask;
