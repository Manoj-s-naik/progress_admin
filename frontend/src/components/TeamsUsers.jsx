import React from 'react';
import { Users, User, UserPlus, Shield } from 'lucide-react';

function TeamsUsers() {
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Teams / Users</h1>

      {/* Teams Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" /> Teams
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamCard name="Frontend Team" members={5} />
          <TeamCard name="Backend Team" members={4} />
          <TeamCard name="Design Team" members={3} />
        </div>
      </div>

      {/* Users Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="w-5 h-5" /> Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UserCard name="John Doe" role="Manager" />
          <UserCard name="Alice Smith" role="Employee" />
          <UserCard name="David Lee" role="Admin" />
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, members }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{members} Members</p>
    </div>
  );
}

function UserCard({ name, role }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex items-center gap-4">
      <div className="bg-blue-100 p-3 rounded-full text-blue-600">
        {role === "Admin" ? <Shield className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-700">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default TeamsUsers;
