export default function TopBar() {
  return (
    <div className="p-4 flex flex-wrap items-center gap-2 justify-between">
      <div className="flex gap-2 flex-wrap items-center">
        <input type="text" placeholder="Search jobs..." className="border px-2 py-1 text-sm" />
        <select className="border px-2 py-1 text-sm"><option>skill</option></select>
        <select className="border px-2 py-1 text-sm"><option>urgency</option></select>
        <select className="border px-2 py-1 text-sm"><option>pay</option></select>
        <select className="border px-2 py-1 text-sm"><option>location</option></select>
      </div>
      <button className="bg-gray-700 text-white px-4 py-1 text-sm rounded">Search</button>
    </div>
  );
}
