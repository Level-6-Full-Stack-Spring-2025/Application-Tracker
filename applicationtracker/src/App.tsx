import { AppSidebar } from "./components/ui/AppSidebar"

function App() {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-[#f9f9f9]">
        {/* Top Row: Search Bar + Filters + Search Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search jobs..."
              className="border border-gray-400 rounded px-2 py-1"
            />
            <select className="border border-gray-400 rounded px-2 py-1 text-sm">
              <option>skill</option>
            </select>
            <select className="border border-gray-400 rounded px-2 py-1 text-sm">
              <option>urgency</option>
            </select>
            <select className="border border-gray-400 rounded px-2 py-1 text-sm">
              <option>pay</option>
            </select>
            <select className="border border-gray-400 rounded px-2 py-1 text-sm">
              <option>location</option>
            </select>
          </div>

          <button className="bg-gray-700 text-white px-4 py-1 rounded">Search</button>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-gray-300 rounded relative flex items-center justify-center text-sm text-gray-600"
            >
              <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                {["New", "Popular", "Expiring", "Urgent"][i % 4]}
              </span>
              Job Card {i + 1}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
