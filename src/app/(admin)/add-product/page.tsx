'use client'
import { useState } from 'react';

export default function AddProductForm() {
  const [formData, setFormData]:any = useState({
    mainTitle: '',
    topic: '',
    maxAge: '',
    issueAge: '',
    description: '',
    image: '',
  });

  const [errors, setErrors]:any = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.mainTitle) {
      newErrors.mainTitle = 'Main Title is required';
      isValid = false;
    }
    if (!formData.topic) {
      newErrors.topic = 'Topic is required';
      isValid = false;
    }
    if (!formData.maxAge || isNaN(formData.maxAge) || formData.maxAge <= 0) {
      newErrors.maxAge = 'Maximum Cover Ceasing Age must be a positive number';
      isValid = false;
    }
    if (!formData.issueAge || isNaN(formData.issueAge) || formData.issueAge <= 0) {
      newErrors.issueAge = 'Issue Age must be a positive number';
      isValid = false;
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Form submission logic
    }
  };

  const handleClear = () => {
    setFormData({
      mainTitle: '',
      topic: '',
      maxAge: '',
      issueAge: '',
      description: '',
      image: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-4 text-red-500">Add Products</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Left Side Inputs */}
              <div className="space-y-4">
                {/* Main Title */}
                <div>
                  <label className="block font-medium text-gray-700">Main Title</label>
                  <input
                    type="text"
                    name="mainTitle"
                    value={formData.mainTitle}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Main Title"
                  />
                  {errors.mainTitle && <p className="text-red-500 text-sm">{errors.mainTitle}</p>}
                </div>

                {/* Topic */}
                <div>
                  <label className="block font-medium text-gray-700">Topic</label>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Topic"
                  />
                  {errors.topic && <p className="text-red-500 text-sm">{errors.topic}</p>}
                </div>

                {/* Maximum Cover Ceasing Age */}
                <div>
                  <label className="block font-medium text-gray-700">Maximum Cover Ceasing Age</label>
                  <input
                    type="number"
                    name="maxAge"
                    value={formData.maxAge}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Maximum Age"
                  />
                  {errors.maxAge && <p className="text-red-500 text-sm">{errors.maxAge}</p>}
                </div>

                {/* Issue Age */}
                <div>
                  <label className="block font-medium text-gray-700">Issue Age</label>
                  <input
                    type="number"
                    name="issueAge"
                    value={formData.issueAge}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Issue Age"
                  />
                  {errors.issueAge && <p className="text-red-500 text-sm">{errors.issueAge}</p>}
                </div>
              </div>

              {/* Right Side Image Upload */}
              <div className="space-y-4">
                <div>
                  <label className="block font-medium text-gray-700">Add Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded h-40 flex items-center justify-center">
                    <p className="text-gray-500">Add image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows={4}
                placeholder="Description"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
