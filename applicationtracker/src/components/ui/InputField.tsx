import React from 'react';

interface Props {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, name, type = 'text', value, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-sm">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}
