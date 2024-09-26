'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ActivitiesForm() {
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // For preview
    }
  };

  const validateForm = () => {
    if (!description || !details || !image) {
      setError('All fields are required!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle the upload process here
      console.log({ description, details, image });
    }
  };

  const handleClear = () => {
    setDescription('');
    setDetails('');
    setImage(null);
    setImagePreview(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Heading */}
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-3xl mr-4 hover:text-red-500 transition duration-300">⬅️</button>
          <h1 className="text-2xl font-bold text-red-500">Activities</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Description */}
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter description"
              rows={4}
            />
          </div>

          {/* More Details */}
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="details" className="block text-gray-700 font-medium">More Details</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              placeholder="Enter more details"
              rows={4}
            />
          </div>

          {/* Image Upload */}
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="image" className="block text-gray-700 font-medium">Add Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 w-full text-gray-600"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Selected Preview"
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-green-600 mt-2">{image.name} selected</p>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="col-span-2 text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
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
