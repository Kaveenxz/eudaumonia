'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { addUpCOmiingEvent } from '@/app/api/upcommingEvent/api';

export default function EventForm() {
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  // Mutation to submit event data
  const { mutate, isLoading, isError } = useMutation(addUpCOmiingEvent, {
    onSuccess: () => {
      console.log('Event successfully uploaded!');
    },
    onError: (error) => {
      console.error('Error uploading event:', error);
    },
  });

  const handleClear = () => {
    setTopic('');
    setDate('');
    setLocation('');
    setDescription('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      topic,
      date: new Date(date), // Convert date string to Date object
      location,
      description,
      adminId: 1, // Pass adminId as 1
    };
    mutate(eventData); // Call mutation
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
        {/* Topic */}
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Event Topic"
            required
          />
        </div>

        {/* Date */}
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Location */}
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Event Location"
            required
          />
        </div>

        {/* Description */}
        <div className="border border-gray-300 p-4 rounded">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Event Description"
            rows={5}
            required
          />
        </div>

        {/* Clear and Upload Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
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
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        {isError && (
          <div className="text-red-500 mt-4">
            There was an error uploading the event. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
