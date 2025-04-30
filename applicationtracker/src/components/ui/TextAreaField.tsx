import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaField({ label, name, value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2 text-sm"
        rows={4}
      />
    </div>
  );
}
