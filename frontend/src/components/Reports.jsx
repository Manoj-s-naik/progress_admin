import React from 'react';
import { BarChart3, FileText } from 'lucide-react';

function Reports() {
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportCard title="Weekly Task Report" description="Summary of tasks completed and pending this week." />
        <ReportCard title="Employee Performance" description="Insights into employee productivity and output." />
        <ReportCard title="Project Progress" description="Track ongoing project completion rates." />
        <ReportCard title="System Usage Logs" description="Logs of user login and activity." />
      </div>
    </div>
  );
}

function ReportCard({ title, description }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
        <FileText className="w-5 h-5" />
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default Reports;
