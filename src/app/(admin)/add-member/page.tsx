'use client'
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addTeamMember, getallTeamMembers, getTeamMemberById, updateTeamMember, deleteTeamMember } from '@/app/api/team-member/api';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function MemberForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [memberId, setMemberId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link1: '',
    link2: '',
    link3: '',
    image: '',
  });
  const [errors, setErrors] = useState({});

  // Fetch all team members
  const { data: teamMembers } = useQuery('teamMembers', getallTeamMembers);

  // Add or Update mutation
  const mutation = useMutation(memberId ? updateTeamMember : addTeamMember, {
    onSuccess: () => {
      toast.success(memberId ? 'Member updated successfully' : 'Member added successfully');
      queryClient.invalidateQueries('teamMembers');
      handleClear();
    },
    onError: () => {
      toast.error('Failed to process member');
    },
  });

  const deleteMutation = useMutation(({ id, adminId }) => deleteTeamMember(id, adminId), {
    onSuccess: () => {
      toast.success('Member deleted successfully');
      queryClient.invalidateQueries('teamMembers');
    },
    onError: () => {
      toast.error('Failed to delete member');
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      const data = {
        name: formData.name,
        description: formData.description,
        link1: formData.link1,
        link2: formData.link2,
        link3: formData.link3,
        imagePath: '/images/frank.jpg', // Placeholder path
        createdBy: 1,
      };
  
      if (memberId) {
        mutation.mutate({ id: memberId, ...data });
      } else {
        mutation.mutate(data);
      }
    }
  };
  

  const handleClear = () => {
    setMemberId(null);
    setFormData({
      name: '',
      description: '',
      link1: '',
      link2: '',
      link3: '',
      image: '',
    });
    setErrors({});
  };

  const handleEdit = async (id) => {
    const member = await getTeamMemberById(id);
    setMemberId(member.id);
    setFormData({
      name: member.name,
      description: member.description,
      link1: member.link1,
      link2: member.link2,
      link3: member.link3,
      image: member.image, // Assuming the image is stored as a URL or base64 string
    });
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow w-full">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-3xl mr-4">⬅️</button>
          <h1 className="text-3xl font-bold text-[#D31145] text-center flex-grow">Member</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Fields */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
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
                className={`w-full p-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
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
                  className="w-full p-3 border border-gray-300 rounded-lg"
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
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>
          
          <div className="col-span-full flex items-center justify-between mt-6">
            <button
              type="reset"
              className="bg-gray-400 hover:bg-gray-500 text-white py-3 px-6 rounded-lg"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-[#D31145] hover:bg-pink-700 text-white py-3 px-6 rounded-lg"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Processing...' : memberId ? 'Update' : 'Upload'}
            </button>
          </div>
        </form>
        
        {/* Display Team Member List */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Team Members</h2>
          <ul className="space-y-4 mt-4">
            {teamMembers && teamMembers.map((member) => (
              <li key={member.id} className="flex justify-between items-center border-b pb-2">
                <div onClick={() => handleEdit(member.id)} className="cursor-pointer">
                  <h3 className="font-medium text-gray-800">{member.name}</h3>
                  <p className="text-gray-500">{member.description}</p>
                </div>
                <button onClick={() => deleteMutation.mutate({ id: member.id, adminId: 1 })} className="text-red-500 hover:text-red-700">
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
}
