"use client";
import { useState } from "react";

type Props = {
  initialData?: TripData;
  onSubmit: (data: TripData) => void;
  submitLabel?: string;
};

export interface TripData {
  title: string;
  destination: string;
  days: number;
  budget: number;
}

export default function TripForm({ initialData, onSubmit, submitLabel = "Submit" }: Props) {
  const [formData, setFormData] = useState<TripData>({
    title: "",
    destination: "",
    days: 1,
    budget: 1000,
    ...initialData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "days" || name === "budget" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };


return (
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Title */}
    <div className="space-y-2">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
        Trip Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black sm:text-sm"
      />
    </div>

    {/* Destination */}
    <div className="space-y-2">
      <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
        Destination
      </label>
      <input
        type="text"
        name="destination"
        id="destination"
        value={formData.destination}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black sm:text-sm"
      />
    </div>

    {/* Days & Budget */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label htmlFor="days" className="block text-sm font-medium text-gray-700">
          Days
        </label>
        <input
          type="number"
          name="days"
          id="days"
          value={formData.days}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
          Budget (INR)
        </label>
        <input
          type="number"
          name="budget"
          id="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black sm:text-sm"
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="pt-2">
      <button
        type="submit"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition"
      >
        {submitLabel}
      </button>
    </div>
  </form>
);
}