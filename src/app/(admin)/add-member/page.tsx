'use client'
import { useState } from 'react';
import { useMutation } from 'react-query';
import { addTeamMember } from '@/app/api/team-member/api';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function MemberForm() {
  const router = useRouter();
  const [formData, setFormData]: any = useState({
    name: '',
    description: '',
    link1: '',
    link2: '',
    link3: '',
    image: '',
  });
  const [errors, setErrors]: any = useState({});

  const mutation = useMutation(addTeamMember, {
    onSuccess: () => {
      toast.success('Member added successfully');
      setFormData({ name: '', description: '', link1: '', link2: '', link3: '', image: '' });
    },
    onError: () => {
      toast.error('Failed to add member');
    },
  });

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.link1) newErrors.link1 = 'At least one link is required';
    if (!formData.image) newErrors.image = 'Image is required';
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const data = {
        name: formData.name,
        description: formData.description,
        link1: formData.link1,
        link2: formData.link2,
        link3: formData.link3,
        imagePath: '/images/frank.jpg',
        createdBy: 1,
      };

      mutation.mutate(data);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow w-full ">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-3xl mr-4">
            ⬅️
          </button>
          <h1 className="text-3xl font-bold text-[#D31145] text-center flex-grow">
            Member
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-lg font-semibold text-gray-700">Description</label>
              <textarea
                name="description"
                className={`w-full p-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none`}
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows={4}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            {[1, 2, 3].map((i) => (
              <div className="space-y-1" key={`link${i}`}>
                <label className="block text-lg font-semibold text-gray-700">Link {i}</label>
                <input
                  type="text"
                  name={`link${i}`}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  value={formData[`link${i}`]}
                  onChange={handleChange}
                  placeholder={`Enter link ${i}`}
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <label className="block text-lg font-semibold text-gray-700">Image</label>
            <div className="w-56 h-56 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              {formData.image ? (
                <img src={formData.image} alt="Selected" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-gray-400">Add Image</span>
              )}
            </div>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          <div className="col-span-full flex items-center justify-between mt-6">
            <button
              type="reset"
              className="bg-gray-400 hover:bg-gray-500 text-white py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => setFormData({ name: '', description: '', link1: '', link2: '', link3: '', image: '' })}
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-[#D31145] hover:bg-pink-700 text-white py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
