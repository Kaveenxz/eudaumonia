'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogForm() {
  const [mainTitle, setMainTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleClear = () => {
    setMainTitle('');
    setDescription('');
    setImage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ mainTitle, description, image });
    // Implement the upload logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Back Button and Title */}
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">
          ⬅️
        </button>
        <h1 className="text-3xl font-bold text-red-500 text-center flex-grow">Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Title */}
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="text"
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            placeholder="Main Title"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div className="border border-gray-300 p-4 rounded">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 border border-gray-300 rounded"
            rows={5}
          />
        </div>

        {/* Add Image */}
        <div className="border border-gray-300 p-4 rounded">
          <label htmlFor="image" className="block text-gray-700">
            Add Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 mt-2 rounded"
          />
          {image && <p className="mt-2 text-green-600">{image.name} selected</p>}
        </div>

        {/* Clear and Upload Buttons */}
        <div className="flex justify-end space-x-4">
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
      </form>
    </div>
  );
}
