'use client';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { addProduct } from '@/app/api/product/apit';
import { useRouter } from 'next/navigation';

export default function AddProductForm() {
  const router = useRouter()
  const [formData, setFormData]:any = useState({
    mainTitle: '',
    topic: '',
    maxAge: '',
    issueAge: '',
    description: '',
    image: null,
    categoryId: '',
  });
  const [errors, setErrors]:any = useState({});
  const [imagePreview, setImagePreview]:any = useState(null);

  const categories = [
    { id: 1, name: 'Health' },
    { id: 2, name: 'Retirement' },
    { id: 3, name: 'Savings' },
    { id: 4, name: 'Protection' },
  ];

  const validateForm:any = () => {
    let newErrors:any = {};
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
    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a category';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (categoryId:any) => {
    setFormData({ ...formData, categoryId });
  };

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      alert('Product added successfully');
    },
    onError: () => {
      alert('Failed to add product');
    },
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      const productData = {
        name: formData.mainTitle,
        description: formData.description,
        categoryId: formData.categoryId,
        createdBy: 1,
      };
      mutation.mutate(productData);
    }
  };

  const handleClear = () => {
    setFormData({
      mainTitle: '',
      topic: '',
      maxAge: '',
      issueAge: '',
      description: '',
      image: null,
      categoryId: '',
    });
    setImagePreview(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
      <div className="container w-screen-md mx-auto ">
        <div className="bg-white rounded-lg  p-6 space-y-6">
        <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">
          ⬅️
        </button>
        <h1 className="text-3xl font-bold text-red-500 text-center flex-grow">
          Add Product
        </h1>
      </div>          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Main Title</label>
                  <input
                    type="text"
                    name="mainTitle"
                    value={formData.mainTitle}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter Main Title"
                  />
                  {errors.mainTitle && <p className="text-red-500 text-sm">{errors.mainTitle}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Topic</label>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter Topic"
                  />
                  {errors.topic && <p className="text-red-500 text-sm">{errors.topic}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Maximum Cover Ceasing Age</label>
                  <input
                    type="number"
                    name="maxAge"
                    value={formData.maxAge}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter Maximum Age"
                  />
                  {errors.maxAge && <p className="text-red-500 text-sm">{errors.maxAge}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Issue Age</label>
                  <input
                    type="number"
                    name="issueAge"
                    value={formData.issueAge}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter Issue Age"
                  />
                  {errors.issueAge && <p className="text-red-500 text-sm">{errors.issueAge}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-gray-700">Add Image</label>
                <div
                  className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative cursor-pointer"
                  onClick={() => document.getElementById('fileInput').click()}
                  style={{ aspectRatio: '4 / 3' }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected"
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
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Select Category</label>
              <div className="flex sm:space-x-4 max-sm:grid max-sm:grid-cols-2">
                {categories.map((category) => (
                  <div key={category.id}>
                    <input
                      type="radio"
                      name="categoryId"
                      value={category.id}
                      checked={formData.categoryId === category.id}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    <label className="ml-2">{category.name}</label>
                  </div>
                ))}
              </div>
              {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
            </div>

            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
                rows={4}
                placeholder="Enter Description"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
