import React from 'react';
import { FolderOpen, Users, CalendarDays } from 'lucide-react';

function Projects() {
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Website Redesign"
          team="Design Team"
          due="2025-06-10"
        />
        <ProjectCard
          title="Mobile App Development"
          team="Frontend Team"
          due="2025-07-01"
        />
        <ProjectCard
          title="Backend API Integration"
          team="Backend Team"
          due="2025-06-25"
        />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <CalendarDays className="inline w-4 h-4 mr-1" />
        Last updated: Just now
      </div>
    </div>
  );
}

function ProjectCard({ title, team, due }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3 text-blue-600">
        <FolderOpen className="w-6 h-6" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Users className="w-4 h-4" />
        Team: {team}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <CalendarDays className="w-4 h-4" />
        Due: {due}
      </div>
    </div>
  );
}

export default Projects;
