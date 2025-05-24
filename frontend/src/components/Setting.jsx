import React from "react";
import { Settings, Lock, Bell, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "./AuthContext";
function Setting() {
  const { logoutHandler } = useAuth();
  return (
    <div className="p-6 bg-[#f9fafb] text-gray-800 h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingCard
          icon={<UserCircle className="w-5 h-5" />}
          title="Profile Settings"
          description="Update your profile information and password."
        />
        <SettingCard
          icon={<Bell className="w-5 h-5" />}
          title="Notifications"
          description="Manage how you receive alerts and updates."
        />
        <SettingCard
          icon={<Lock className="w-5 h-5" />}
          title="Security"
          description="Set up 2FA, change password, and view login history."
        />
        <SettingCard
          icon={<Settings className="w-5 h-5" />}
          title="System Preferences"
          description="Control theme, layout, and language settings."
        />
        <SettingCard
          icon={<LogOut className="w-5 h-5"      onClick={logoutHandler} />}
          title="Logout"
          description="Logout the current account."
        />
      </div>
    </div>
  );
}

function SettingCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default Setting;
