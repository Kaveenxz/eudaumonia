'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addBlog, getAllBlog, getBlogById, updateBlog, deleteBlog } from '@/app/api/blog/api';
import 'react-quill/dist/quill.snow.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function BlogForm() {
  const [blogId, setBlogId] = useState(null);
  const [mainTitle, setMainTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: blogs } = useQuery('blogs', getAllBlog);

  const mutation = useMutation({
    mutationFn: (blogData) => (blogId ? updateBlog(blogId, blogData) : addBlog(blogData)),
    onSuccess: () => {
      toast.success(blogId ? "Blog updated successfully!" : "Blog added successfully!");
      queryClient.invalidateQueries('blogs');
      handleClear();
    },
    onError: () => {
      toast.error("Error processing blog");
    },
  });

  const deleteMutation = useMutation(({ id, adminId }) => deleteBlog(id, adminId), {
    onSuccess: () => {
      toast.success("Blog deleted successfully");
      queryClient.invalidateQueries('blogs');
    },
    onError: () => {
      toast.error("Error deleting blog");
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
    }
  };

  const handleClear = () => {
    setBlogId(null);
    setMainTitle('');
    setDescription('');
    setImage(null);
    setImageBase64(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      id: blogId,
      topic: mainTitle,
      description,
      adminId: 1,
      createdBy: 1,
      blogImage: "image/path"
    };

    mutation.mutate(blogData);
  };

  const handleEdit = async (id) => {
    const blog = await getBlogById(id);
    setBlogId(blog.id);
    setMainTitle(blog.topic);
    setDescription(blog.description);
    setImageBase64(blog.blogImage); // Assuming this is the image URL or base64
  };

  return (
    <div className=" mx-auto p-8">
      <div className="flex items-center mb-6">
        <button onClick={() => router.back()} className="text-3xl mr-4">⬅️</button>
        <h1 className="text-3xl font-bold text-[#D31145] text-center flex-grow">Blog</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="border border-gray-300 p-4 rounded">
          <input
            type="text"
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            placeholder="Main Title"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="border border-gray-300 p-4 rounded h-80">
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Description"
            className="w-full h-[70%]"
          />
        </div>

        <div className="border border-gray-300 p-4 rounded h-48 flex items-center justify-center bg-gray-100">
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
            className="bg-[#D31145] text-white py-2 px-4 rounded hover:bg-red-600"
          >
            {mutation.isLoading ? 'Processing...' : blogId ? 'Update' : 'Upload'}
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Blog Posts</h2>
        <ul className="space-y-4 mt-4">
          {blogs && blogs.map((blog) => (
            <li key={blog.id} className="flex justify-between items-center border-b pb-2">
              <div onClick={() => handleEdit(blog.id)} className="cursor-pointer">
                <h3 className="font-medium text-gray-800">{blog.topic}</h3>
                <p className="text-gray-500">{blog.description}</p>
              </div>
              <button onClick={() => deleteMutation.mutate({ id: blog.id, adminId: 1 })} className="text-red-500 hover:text-red-700">
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer/>
    </div>
  );
}
