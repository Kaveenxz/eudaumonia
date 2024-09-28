'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { addActivity } from '@/app/api/activities/api';

export default function ActivitiesForm() {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setImage(base64Image);
      setImagePreview(URL.createObjectURL(file)); // For preview
    }
  };

  const validateForm = () => {
    if (!topic || !description || !image) {
      setError('Topic, Description, and Image are required!');
      return false;
    }
    setError('');
    return true;
  };

  const submitData = useMutation({
    mutationFn: async (activityData) => addActivity(activityData),
    onSuccess: () => {
      console.log('Activity added successfully');
    },
    retry: 3,
    retryDelay: 5000,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const activityData = {
        topic,
        description,
        details,
        imagePath: image,
        createdBy: "2", 
      };

      submitData.mutate(activityData);
    }
  };

  const handleClear = () => {
    setTopic('');
    setDescription('');
    setDetails('');
    setImage(null);
    setImagePreview(null);
    setError('');
  };

  return (
    <div className="min-h-screen w-screen p-6 bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-3xl mr-4 hover:text-red-500 transition duration-300">⬅️</button>
          <h1 className="text-2xl font-bold text-red-500">Activities</h1>
        </div>

        <form onSubmit={handleSubmit} className="sm:grid grid-cols-1 lg:grid-cols-2 gap-6 max-sm:flex max-sm:flex-col">
          <div className="space-y-6">
            {/* Topic Input */}
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

            {/* Description */}
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

            {/* More Details */}
            <div>
              <label htmlFor="details" className="block text-gray-700 font-medium">More Details</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full h-40 mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                placeholder="Enter more details"
              />
            </div>
          </div>

          <div className="space-y-6">
            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-gray-700 font-medium">Add Image</label>
              <div
                className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative cursor-pointer"
                onClick={() => document.getElementById('fileInput').click()}
                style={{ aspectRatio: '4 / 3' }}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected Preview"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <span className="text-gray-500">Click to Add Image</span>
                )}
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              {imagePreview && (
                <p className="text-green-600 mt-2">{image?.name} selected</p>
              )}
            </div>
          </div>

          {error && (
            <div className="col-span-2 text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="col-span-2 flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
