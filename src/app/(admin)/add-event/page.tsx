'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventForm() {
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleDownloadExcel = () => {
    // Implement Excel download logic here
    console.log('Download Excel clicked');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ description });
    // Implement upload logic here
  };

  const handleClear = () => {
    setDescription('');
  };

  return (
    <div className="max-w-3xl mx-auto p-8 sm:p-6 md:p-8 lg:p-12">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">
          ⬅️
        </button>
        <h1 className="text-3xl font-bold text-red-500 text-center flex-grow">
          Event
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Description */}
        <div className="border border-gray-300 p-4 rounded">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Description"
            rows={5}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4 space-y-4 md:space-y-0">
          {/* Download Excel Button */}
          <button
            type="button"
            onClick={handleDownloadExcel}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full md:w-auto"
          >
            Download Excel
          </button>

          {/* Clear and Upload Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full sm:w-auto"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full sm:w-auto"
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
