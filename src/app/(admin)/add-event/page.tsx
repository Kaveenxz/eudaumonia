'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addUpCOmiingEvent, getAllUpCOmiingEvent, getEventById, updateEvent, deleteEvent } from '@/app/api/upcommingEvent/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EventForm() {
  const [eventId, setEventId] = useState(null);
  const [topic, setTopic] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const queryClient = useQueryClient();

  // Fetch all events
  const { data: events, refetch } = useQuery('events', getAllUpCOmiingEvent);

  // Add or Update event
  const mutation = useMutation(eventId ? (data) => updateEvent(eventId, data) : addUpCOmiingEvent, {
    onSuccess: () => {
      toast.success(eventId ? 'Event updated successfully!' : 'Event uploaded successfully!');
      queryClient.invalidateQueries('events');
      handleClear();
    },
    onError: () => {
      toast.error('Error processing event');
    },
  });

  const handleClear = () => {
    setEventId(null);
    setTopic('');
    setDate('');
    setLocation('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      topic,
      date: new Date(date),
      location,
      description,
      adminId: 1,
      createdBy: 1,
    };
    mutation.mutate(eventData);
  };

  // Load event for editing
  const handleEdit = async (id) => {
    const event = await getEventById(id);
    setEventId(event.id);
    setTopic(event.topic);
    setDate(new Date(event.date).toISOString().slice(0, 10));
    setLocation(event.location);
    setDescription(event.description);
  };

  // Delete event
  const deleteMutation = useMutation(({ id, adminId }) => deleteEvent(id, adminId), {
    onSuccess: () => {
      toast.success('Event deleted successfully');
      queryClient.invalidateQueries('events');
    },
    onError: () => {
      toast.error('Error deleting event');
    },
  });

  return (
    <div className=" mx-auto p-8 sm:p-6 md:p-8 lg:p-12">
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">⬅️</button>
        <h1 className="text-3xl font-bold text-[#D31145] text-center flex-grow">Event</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="bg-[#D31145] text-white py-2 px-4 rounded hover:bg-red-600 w-full sm:w-auto"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? 'Processing...' : eventId ? 'Update' : 'Upload'}
          </button>
        </div>

        {mutation.isError && (
          <div className="text-red-500 mt-4">
            Error processing the event. Please try again.
          </div>
        )}
      </form>

      {/* Display Event List */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
        {events && events.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {events.map((event) => (
              <li key={event.id} className="flex justify-between items-center border-b pb-2">
                <div onClick={() => handleEdit(event.id)} className="cursor-pointer">
                  <h3 className="font-medium text-gray-800">{event.topic}</h3>
                  <p className="text-gray-500">{event.description}</p>
                </div>
                <button onClick={() => deleteMutation.mutate({ id: event.id, adminId: 1 })} className="text-red-500 hover:text-red-700">
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-4">No upcoming events available.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
