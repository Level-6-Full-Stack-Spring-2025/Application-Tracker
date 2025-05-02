import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import { Button } from './button';

export default function JobForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    salary: '',
    jobType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-lg"
    >
      <h2 className="text-xl font-semibold mb-6 text-center">Create Job Listing</h2>
      <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} />
      <InputField label="Salary Range" name="salary" value={formData.salary} onChange={handleChange} />
      <SelectField
        label="Job Type"
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
        options={['Full-time', 'Part-time', 'Contract', 'Internship']}
      />
      <TextAreaField label="Description" name="description" value={formData.description} onChange={handleChange} />
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
}
