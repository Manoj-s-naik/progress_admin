import React from "react";
import { Users, FolderOpen, ListChecks, BarChart3, CalendarDays } from "lucide-react";

function Dashboard() {
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="Employees" value="42" Icon={Users} />
        <Card title="Projects" value="10" Icon={FolderOpen} />
        <Card title="Pending Tasks" value="38" Icon={ListChecks} />
        <Card title="Completed Tasks" value="64" Icon={BarChart3} />
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Section title="User Management" content="Add, edit, or manage users and assign roles." />
        <Section title="Project Overview" content="Track active projects and assignments." />
        <Section title="Task Overview" content="Manage and monitor all tasks assigned to employees and teams." />
        <Section title="Reports & Performance" content="Generate reports, see charts, track team and user productivity." />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <CalendarDays className="inline w-4 h-4 mr-1" />
        Last updated: Just now
      </div>
    </div>
  );
}

function Card({ title, value, Icon }) {
  return (
    <div className="bg-white shadow rounded-xl p-5 flex items-center gap-4">
      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

export default Dashboard;
