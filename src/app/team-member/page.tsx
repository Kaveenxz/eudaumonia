'use client'
import TeamMember from "@/app/components/TeamMember";
import avt1 from '@/app/images/Avatar-1.png'
import avt2 from '@/app/images/Avatar-2.png'
import avt3 from '@/app/images/Avatar-3.png'
import avt4 from '@/app/images/Avatar-4.png'
import avt5 from '@/app/images/Avatar-5.png'
import avt6 from '@/app/images/Avatar-6.png'
import avt7 from '@/app/images/Avatar-7.png'
import avt8 from '@/app/images/Avatar.png'
import { Twitter } from "lucide";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    id:1,
    name: "Olivia Rhye",
    title: "Co-founder of Opendoor",
    description: "Early staff at Spotify and Clearbit.",
    image: avt1, // Replace with actual images or links
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:2,
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: avt2,
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:3,
    name: "Olivia Rhye",
    title: "Co-founder of Opendoor",
    description: "Early staff at Spotify and Clearbit.",
    image: avt8, // Replace with actual images or links
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:4,
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: avt3,
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:5,
    name: "Olivia Rhye",
    title: "Co-founder of Opendoor",
    description: "Early staff at Spotify and Clearbit.",
    image: avt4, // Replace with actual images or links
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:6,
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: avt5,
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:7,
    name: "Olivia Rhye",
    title: "Co-founder of Opendoor",
    description: "Early staff at Spotify and Clearbit.",
    image: avt6, // Replace with actual images or links
    socials: [
      { icon: <FaTwitter />, link: "#" },
      { icon: <FaLinkedin />, link: "#" },
      { icon: <FaGithub />, link: "#" },
    ],
  },
  {
    id:8,
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: avt7,
    socials: [
      { icon: "<FaTwitter />", link: "#" },
      { icon: "<FaLinkedin />", link: "#" },
      { icon: "<FaGithub />", link: "#" },
    ],
  },
  
];
export default function MeetOurTeam() {
    const route = useRouter()
    const handleClick = (id:any) => {
        route.push('/team-member/'+id)
    }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet our team</h2>
        <p className="text-center text-gray-600 mb-12">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member}/>
          ))}
        </div>
      </div>
    </section>
  );
}
