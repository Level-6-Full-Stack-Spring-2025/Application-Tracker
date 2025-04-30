interface Props {
    label?: string;
  }
  
  export default function JobCard({ label }: Props) {
    return (
      <div className="relative w-40 h-24 bg-gray-200 rounded">
        {label && (
          <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">
            {label}
          </span>
        )}
      </div>
    );
  }
  