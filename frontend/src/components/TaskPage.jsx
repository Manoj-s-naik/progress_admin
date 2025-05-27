// import React from 'react';
// import { ListChecks, CheckCircle, Clock ,Plus} from 'lucide-react';

// function TaskPage() {
//   return (
//     <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
//       <h1 className="text-2xl font-bold mb-6">Task Management</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <TaskCard icon={<Clock className="w-5 h-5" />} title="Pending Tasks" count={24} />
//         <TaskCard icon={<CheckCircle className="w-5 h-5" />} title="Completed Tasks" count={41} />
//         <TaskCard icon={<ListChecks className="w-5 h-5" />} title="Total Tasks" count={65} />
//       </div>

//       <div className="mt-10 text-sm text-gray-600">
//         *This page will allow admins to view, assign, and track tasks for employees and managers.
//       </div>
//     </div>
//   );
// }

// function TaskCard({ icon, title, count }) {
//   return (
//     <div className="bg-white shadow rounded-xl p-6">
//       <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
//         {icon}
//         {title}
//       </h3>
//       <p className="text-2xl font-bold text-gray-700">{count}</p>
//     </div>
//   );
// }

// export default TaskPage;

import React, { useState } from "react";
import { ListChecks, CheckCircle, Clock, Plus } from "lucide-react";

function TaskPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectdeFile, setSelectedFile] = useState("");
  const [task, setTask] = useState({
    taskName: "",
    projectName: "",
    priorityLevel: "easy",
    userId: "",
    deadLine: "",
    assignedBy: "Admin",
    resources: "",
  });

  

  const selectedResourceHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData();
  formData.append("taskName", task.taskName);
  formData.append("projectName", task.projectName);
  formData.append("priorityLevel", task.priorityLevel);
  formData.append("userId", task.userId);
  formData.append("deadLine", task.deadLine);
  formData.append("assignedBy", task.assignedBy);
  formData.append("resources", selectdeFile);

    try {
      const res = await fetch("http://localhost:3000/api/admin/create", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      setShowForm(false); // close the form
    } catch (error) {
      console.error("Error creating task:", error.message);
    }
  };

  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <button
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus className="mr-2" /> Add Task
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="taskName"
            onChange={handleChange}
            placeholder="Task Name"
            required
            className="border p-2 rounded"
          />
          <input
            name="projectName"
            onChange={handleChange}
            placeholder="Project Name"
            required
            className="border p-2 rounded"
          />
          <select
            name="priorityLevel"
            onChange={handleChange}
            required
            className="border p-2 rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input
            name="userId"
            onChange={handleChange}
            placeholder="User ID"
            required
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="deadLine"
            onChange={handleChange}
            required
            className="border p-2 rounded"
            placeholder="enter a date of deadline"
          />

          <input
            type="file"
            id="fileUpload"
            name="resources"
            onChange={selectedResourceHandler}
            className="hidden"
          />

          <label
            htmlFor="fileUpload"
            className="cursor-pointer px-4 py-2 text-black rounded hover:bg-blue-700 border"
          >
            Upload Resources
          </label>

          <button
            type="submit"
            className="col-span-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Create Task
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskCard
          icon={<Clock className="w-5 h-5" />}
          title="Pending Tasks"
          count={24}
        />
        <TaskCard
          icon={<CheckCircle className="w-5 h-5" />}
          title="Completed Tasks"
          count={41}
        />
        <TaskCard
          icon={<ListChecks className="w-5 h-5" />}
          title="Total Tasks"
          count={65}
        />
      </div>

      <div className="mt-10 text-sm text-gray-600">
        *This page will allow admins to view, assign, and track tasks for
        employees and managers.
      </div>
    </div>
  );
}

function TaskCard({ icon, title, count }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-700">{count}</p>
    </div>
  );
}

export default TaskPage;
