export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-200 h-screen p-4 flex flex-col">
      <div className="text-center font-bold mb-6">Logo</div>
      <nav className="flex flex-col space-y-3 text-sm">
        <a href="#">Job Search</a>
        <a href="#">My Jobs</a>
        <a href="#">Resume Builder</a>
      </nav>
    </aside>
  );
}
