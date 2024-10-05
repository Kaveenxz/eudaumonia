'use client'
import { useQuery } from 'react-query';
import { getBlogById } from '@/app/api/blog/api'; // Create this API call to fetch a single blog by ID

function BlogDetails(param:any) {
  const  id  = param.params.id;
  console.log(id)
  const { data: blog, isLoading, isError } = useQuery(
    ['getBlogById', id],
    () => getBlogById(id),
    { enabled: !!id }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading blog details</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold">{blog?.topic}</h1>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: blog?.description }}
      />
      {/* Render the images if they exist */}
      {blog?.blogImages?.map((image: any, index: number) => (
        <Image key={index} src={image.url} alt={blog.topic} width={300} height={200} />
      ))}
    </div>
  );
}

export default BlogDetails;
