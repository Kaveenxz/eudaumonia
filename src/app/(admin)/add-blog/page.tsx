'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Quill styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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
    // Upload logic: Send data including the HTML description to the backend
    console.log({ mainTitle, description, image });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">
          ⬅️
        </button>
        <h1 className="text-3xl font-bold text-red-500 text-center flex-grow">Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="text"
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            placeholder="Main Title"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="border border-gray-300 p-4 rounded h-full ">
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Description"
            className="w-full h-full"  
          />
        </div>

        {/* Add Image */}
        <div className="border border-gray-300 p-4 rounded h-48 flex items-center justify-center bg-gray-100">  {/* Rectangle for image */}
          <label
            htmlFor="image"
            className="cursor-pointer text-gray-500 text-center p-2 bg-white border border-gray-300 rounded-md"
          >
            {image ? (
              <span>{image.name} selected</span>
            ) : (
              <span>Click to add an image</span>
            )}
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
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
