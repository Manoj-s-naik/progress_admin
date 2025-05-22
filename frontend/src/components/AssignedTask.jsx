import React, { useState } from "react";

function AssignTaskForm() {
  const [task, setTask] = useState({
    taskName: "",
    projectName: "",
    priorityLevel: "medium",
    userId: "",
    assignedBy: "Manager", // Optional: Can be dynamic
    status: "pending",
    deadLine: "",
    resourceTitle: "",
    resourceDescription: "",
  });

  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Task Data:", {
      ...task,
      resources: [
        {
          title: task.resourceTitle,
          description: task.resourceDescription,
          pdfFile: pdfFile ? pdfFile.name : null,
        },
      ],
    });

    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Assign Task</h2>

        <input
          type="text"
          name="taskName"
          placeholder="Task Name"
          value={task.taskName}
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={task.projectName}
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="text"
          name="userId"
          placeholder="Employee User ID"
          value={task.userId}
          onChange={handleChange}
          required
          className="input"
        />

        <select
          name="priorityLevel"
          value={task.priorityLevel}
          onChange={handleChange}
          className="input"
        >
          <option value="hard">Hard</option>
          <option value="medium">Medium</option>
          <option value="easy">Easy</option>
        </select>

        <label className="block text-sm text-gray-700">Deadline</label>
        <input
          type="date"
          name="deadLine"
          value={task.deadLine}
          onChange={handleChange}
          className="input"
        />

        <hr className="my-2" />

        <h3 className="text-lg font-semibold">Attach PDF Resource</h3>

        <input
          type="text"
          name="resourceTitle"
          placeholder="PDF Title"
          value={task.resourceTitle}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="resourceDescription"
          placeholder="PDF Description"
          value={task.resourceDescription}
          onChange={handleChange}
          className="input"
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="input"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
}

export default AssignTaskForm;
