// src/components/ui/AppSidebar.tsx
import { List, X, Briefcase, FileText, LayoutList } from "lucide-react";
import { useState } from "react";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { label: "Job Search", icon: LayoutList },
    { label: "My Jobs", icon: Briefcase },
    { label: "Resume Builder", icon: FileText },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out h-screen bg-[#e0e0e0] flex flex-col justify-between ${
        collapsed ? "w-14" : "w-48"
      }`}
    >
      {/* Logo */}
      <div className="bg-white text-center py-3 font-bold text-sm">
        {!collapsed ? "Logo" : "L"}
      </div>

      {/* Navigation */}
      <div className="flex-1">
        <nav className="flex flex-col">
          {navItems.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center px-4 py-2 hover:bg-gray-300 ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <Icon className="w-4 h-4" />
              {!collapsed && <span className="ml-2">{label}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className="p-2 hover:bg-gray-300 transition-colors text-black w-full"
      >
        {collapsed ? <List className="mx-auto h-5 w-5" /> : <X className="mx-auto h-5 w-5" />}
      </button>
    </div>
  );
}
