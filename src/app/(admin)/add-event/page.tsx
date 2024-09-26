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
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">
          ⬅️
        </button>
        <h1 className="text-3xl font-bold text-red-500 text-center flex-grow">Event</h1>
      </div>

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

        <div className="flex justify-between items-center">
          {/* Download Excel Button */}
          <button
            type="button"
            onClick={handleDownloadExcel}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Download Excel
          </button>

          {/* Clear and Upload Buttons */}
          <div className="space-x-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
