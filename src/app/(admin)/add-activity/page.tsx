'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addActivity, getallActivities, getActivityById, updateActivity, deleteActivity } from '@/app/api/activities/api';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function ActivitiesForm() {
  const [activityId, setActivityId] = useState(null);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [images, setImages] = useState([null, null, null, null, null]); // For 5 image slots
  const [imagePreviews, setImagePreviews] = useState(['/images/placeholder.jpg']); // Preview for each image
  const [error, setError] = useState('');
  const router = useRouter();
  const queryClient = useQueryClient();

  // Fetch all activities
  const { data: activities, refetch } = useQuery('activities', getallActivities);

  // Handle image upload for multiple images
  const handleImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      const newImages = [...images];
      newImages[index] = base64Image;
      setImages(newImages);

      const newPreviews = [...imagePreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setImagePreviews(newPreviews);
    }
  };

  const validateForm = () => {
    if (!topic || !description || !images[0]) {
      setError('Topic, Description, and at least one Image are required!');
      return false;
    }
    setError('');
    return true;
  };

  // Add or Update activity
  const mutation = useMutation(
    (formData) => (activityId ? updateActivity(activityId, formData) : addActivity(formData)),
    {
      onSuccess: () => {
        toast.success(activityId ? 'Activity updated successfully' : 'Activity added successfully');
        queryClient.invalidateQueries('activities');
        handleClear();
      },
      onError: () => {
        toast.error('Failed to save activity. Please try again.');
        setError('Failed to upload activity. Please try again.');
      },
    }
  );

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const activityData = {
        topic,
        description,
        details,
        images : "test.img", // Updated to send all images
        createdBy: 2, // Example user ID; replace as needed
      };
      mutation.mutate(activityData);
    }
  };

  // Clear form
  const handleClear = () => {
    setActivityId(null);
    setTopic('');
    setDescription('');
    setDetails('');
    setImages([null, null, null, null, null]);
    setImagePreviews(['/images/placeholder.jpg']);
    setError('');
  };

  // Load activity for editing
  const handleEdit = async (id) => {
    const activity = await getActivityById(id);
    setActivityId(activity.id);
    setTopic(activity.topic);
    setDescription(activity.description);
    setDetails(activity.details);
    setImagePreviews(activity.images || ['/images/placeholder.jpg']);
  };

  // Delete activity
  const deleteMutation = useMutation(({ id, adminId }) => deleteActivity(id, adminId), {
    onSuccess: () => {
      toast.success("Activity deleted successfully");
      queryClient.invalidateQueries('activity');
    },
    onError: () => {
      toast.error("Error deleting Activity");
    },
  });

  return (
    <div className="w-screen p-6 bg-gradient-to-b flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-3xl mr-4 hover:text-red-500 transition duration-300">⬅️</button>
          <h1 className="text-2xl font-bold text-[#D31145]">Activities</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="topic" className="block text-gray-700 font-medium">Topic</label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter the topic"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter description"
            />
          </div>

          {/* Image Upload Section */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Images (1 Required, 4 Optional)</label>
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative cursor-pointer"
                  onClick={() => document.getElementById(`fileInput${index}`).click()}
                >
                  {imagePreviews[index] ? (
                    <img src={imagePreviews[index]} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded" />
                  ) : (
                    <span className="text-gray-500">Click to Add Image</span>
                  )}
                  <input
                    type="file"
                    id={`fileInput${index}`}
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#D31145] text-white rounded hover:bg-red-600 transition duration-300"
            >
              {activityId ? 'Update' : 'Upload'}
            </button>
          </div>
        </form>

        {/* Display Activity List */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Current Activities</h2>
          <ul className="space-y-4 mt-4">
            {activities && activities.map((activity) => (
              <li key={activity.id} className="flex justify-between items-center border-b pb-2">
                <div onClick={() => handleEdit(activity.id)} className="cursor-pointer">
                  <h3 className="font-medium text-gray-800">{activity.topic}</h3>
                  <p className="text-gray-500">{activity.description}</p>
                </div>
                <button onClick={() => deleteMutation.mutate({ id: activity.id, adminId: 1 })} className="text-red-500 hover:text-red-700">
                  <AiFillDelete className="text-red-600 cursor-pointer" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
