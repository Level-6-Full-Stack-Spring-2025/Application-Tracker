import JobCard from "./JobCard";

export default function JobGrid() {
  const jobs = [
    "New", "Popular", "Expiring", "Urgent", "", "", "", "", ""
  ];

  return (
    <div className="p-4 grid grid-cols-5 gap-4">
      {jobs.map((label, index) => (
        <JobCard key={index} label={label} />
      ))}
    </div>
  );
}
