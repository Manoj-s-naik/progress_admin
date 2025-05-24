import React from 'react';
import { ListChecks, CheckCircle, Clock } from 'lucide-react';

function TaskPage() {
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Task Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskCard icon={<Clock className="w-5 h-5" />} title="Pending Tasks" count={24} />
        <TaskCard icon={<CheckCircle className="w-5 h-5" />} title="Completed Tasks" count={41} />
        <TaskCard icon={<ListChecks className="w-5 h-5" />} title="Total Tasks" count={65} />
      </div>

      <div className="mt-10 text-sm text-gray-600">
        *This page will allow admins to view, assign, and track tasks for employees and managers.
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
