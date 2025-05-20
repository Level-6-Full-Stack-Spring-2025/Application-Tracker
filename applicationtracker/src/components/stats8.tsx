
interface Stats8Props {
  heading?: string;
  description?: string;
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats8 = ({
  heading = "Application source insights",
  description = "Application count per job search platform",
  stats = [
    {
      id: "stat-1",
      value: "13",
      label: "Found on Glassdoor",
    },
    {
      id: "stat-2",
      value: "10",
      label: "Found on LinkedIn",
    },
    {
      id: "stat-3",
      value: "15",
      label: "Found on Indeed",
    },
    {
      id: "stat-4",
      value: "20",
      label: "Found right here!",
    },
  ],
}: Stats8Props) => {
  return (
      <div className="container bg-card p-5 rounded-lg text-indigo-100 max-w-250 max-h-70 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export { Stats8 };
