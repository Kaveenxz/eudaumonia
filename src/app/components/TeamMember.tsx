import Image from "next/image";
import { useRouter } from "next/navigation";
export default function TeamMember({ name, title, description, image, socials, id }:any) {
        const route = useRouter()
        const handleClick = (id:any) => {
            route.push('/team-member/'+id)
        }
    return (
      <div className="bg-[#F9FAFB] p-6 rounded-lg text-center" onClick={()=> {handleClick(id)}}>
        <Image src={image} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" width={96} height={96}/>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex justify-center space-x-3">
          {socials.map(({ icon, link }:any, index:any) => (
            <a href={link} key={index} className="text-gray-600 hover:text-gray-800">
              {icon}
            </a>
          ))}
        </div>
      </div>
    );
  }
  