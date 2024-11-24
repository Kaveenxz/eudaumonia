'use client';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addProduct, getAllProducts, updateProduct, deleteProduct } from '@/app/api/product/apit';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from 'react-icons/ai';

export default function AddProductForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    id: null,
    mainTitle: '',
    topic: '',
    coverAge: '', // Expecting an integer
    issueAge: '', // Expecting an integer
    description: '',
    image: null,
    categoryId: '',
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const categories = [
    { id: 1, name: 'Health' },
    { id: 2, name: 'Retirement' },
    { id: 3, name: 'Savings' },
    { id: 4, name: 'Protection' },
  ];

  const { data: products } = useQuery('products', getAllProducts);

  const productMutation = useMutation({
    mutationFn: (data) => (isUpdating ? updateProduct(data.id, data) : addProduct(data)),
    onSuccess: () => {
      toast.success(isUpdating ? 'Product updated successfully!' : 'Product added successfully!');
      setFormData({ id: null, mainTitle: '', topic: '', coverAge: '', issueAge: '', description: '', image: null, categoryId: '' });
      setImagePreview(null);
      setIsUpdating(false);
      queryClient.invalidateQueries('products');
    },
    onError: () => {
      toast.error('Operation failed. Please try again.');
    },
  });

  const deleteMutation = useMutation(({ id, adminId }) => deleteProduct(id, adminId), {
    onSuccess: () => {
      toast.success('Product deleted successfully!');
      queryClient.invalidateQueries('products');
    },
    onError: () => {
      toast.error('Failed to delete product. Please try again.');
    },
  });

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    if (!formData.mainTitle) newErrors.mainTitle = 'Main Title is required';
    if (!formData.topic) newErrors.topic = 'Topic is required';
    if (!formData.coverAge || isNaN(Number(formData.coverAge)) || Number(formData.coverAge) <= 0) newErrors.coverAge = 'Cover Age must be a positive number';
    if (!formData.issueAge || isNaN(Number(formData.issueAge)) || Number(formData.issueAge) <= 0) newErrors.issueAge = 'Issue Age must be a positive number';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.categoryId) newErrors.categoryId = 'Please select a category';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'coverAge' || name === 'issueAge' ? parseInt(value) || '' : value, // Convert to integer
    });
  };

  const handleCategoryChange = (categoryId) => setFormData({ ...formData, categoryId });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const productData = {
        ...formData,
        coverAge: parseInt(formData.coverAge), // Ensure integer conversion before submission
        issueAge: parseInt(formData.issueAge), // Ensure integer conversion before submission
        name: formData.mainTitle,
        createdBy: 1,
      };
      productMutation.mutate(productData);
    }
  };

  const handleClear = () => {
    setFormData({ id: null, mainTitle: '', topic: '', coverAge: '', issueAge: '', description: '', image: null, categoryId: '' });
    setImagePreview(null);
    setErrors({});
    setIsUpdating(false);
  };

  const handleDelete = (productId:any) => deleteMutation.mutate({ id: productId, adminId: 1 });
  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      mainTitle: product.mainTitle,
      topic: product.topic,
      coverAge: product.coverAge.toString(), // Display as string for input
      issueAge: product.issueAge.toString(), // Display as string for input
      description: product.description,
      categoryId: product.categoryId,
    });
    setImagePreview(product.image);
    setIsUpdating(true);
  };

  return (
    <div className="p-4 bg-gradient-to-b flex items-center justify-center">
      <div className="container w-screen-md mx-auto">
        <div className="bg-white rounded-lg p-6 space-y-6">
          <div className="flex items-center mb-6">
            <button onClick={() => router.back()} className="text-3xl mr-4">
              ⬅️
            </button>
            <h1 className="text-3xl font-bold text-[#D31145] text-center flex-grow">
              {isUpdating ? 'Update Product' : 'Add Product'}
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    name="coverAge"
                    value={formData.coverAge}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter Maximum Age"
                  />
                  {errors.coverAge && <p className="text-red-500 text-sm">{errors.coverAge}</p>}
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
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
                placeholder="Enter Description"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {isUpdating ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
          <h2 className="text-2xl mt-8 font-bold">Current Products</h2>
          <div className="mt-4">
            {products?.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-100 rounded mb-2">
                <span onClick={() => handleEdit(product)} className="cursor-pointer">{product.mainTitle}</span>
                <AiFillDelete
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDelete(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
