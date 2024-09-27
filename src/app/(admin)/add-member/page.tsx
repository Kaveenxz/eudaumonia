'use client';
import { useState } from 'react';

export default function MemberForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link1: '',
    link2: '',
    link3: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Preview for selected image

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      setPreviewImage(URL.createObjectURL(file)); // Set image preview
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.link1) newErrors.link1 = 'At least one link is required';
    if (!formData.image) newErrors.image = 'Image is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Form submitted');
      console.log(formData);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Member</h2>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left side: Form fields */}
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <input
                type="text"
                name="description"
                className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            {[1, 2, 3].map((i) => (
              <div className="mb-4" key={`link${i}`}>
                <label className="block text-gray-700">Link</label>
                <input
                  type="text"
                  name={`link${i}`}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData[`link${i}`]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          {/* Right side: Image uploader */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-64 h-64 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100 relative">
              <label
                htmlFor="image"
                className="cursor-pointer flex items-center justify-center text-gray-500 text-center p-2 bg-white border border-gray-300 rounded-md w-full h-full absolute top-0 left-0"
              >
                {previewImage ? (
                  <img src={previewImage} alt="Selected" className="object-cover w-full h-full rounded-md" />
                ) : (
                  <span>Click to add image (Rectangle)</span>
                )}
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
        </div>

        {/* Clear and Upload Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="reset"
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
            onClick={() => {
              setFormData({ name: '', description: '', link1: '', link2: '', link3: '', image: null });
              setPreviewImage(null);
            }}
          >
            Clear
          </button>
          <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded-md">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
