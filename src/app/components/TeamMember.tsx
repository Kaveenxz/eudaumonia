import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import avt1 from '@/app/images/Avatar-1.png'

export default function TeamMember({ id, name, title, imageUrl, githubLink, twitterLink, linkedinLink }:any) {
        const route = useRouter()
        const handleClick = (key:any) => {
            route.push('/team-member/'+key)            
        }
        
    return (
      <div className="bg-[#F9FAFB] p-6 rounded-lg text-center" onClick={()=> {handleClick(id)}}>
        <Image src={imageUrl || avt1} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" width={96} height={96}/>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 mt-2">{title}</p>
        <div className="mt-4 flex justify-center space-x-3">
            
              <a href={githubLink} key={githubLink} className="text-gray-600 hover:text-gray-800">
                <FaGithub/>
              </a>
              <a href={twitterLink} key={twitterLink} className="text-gray-600 hover:text-gray-800">
                <FaTwitter/>
              </a>
              <a href={linkedinLink} key={linkedinLink} className="text-gray-600 hover:text-gray-800">
                <FaLinkedin/>
              </a>
            
        </div>
      </div>
    );
  }
  