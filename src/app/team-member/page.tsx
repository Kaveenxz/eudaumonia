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
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { getallTeamMembers } from "../api/team-member/api";
import Navbar from "../components/Navbar";

// const teamMembers = [
//   {
//     id:1,
//     name: "Olivia Rhye",
//     title: "Co-founder of Opendoor",
//     description: "Early staff at Spotify and Clearbit.",
//     image: avt1, // Replace with actual images or links
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:2,
//     name: "Phoenix Baker",
//     title: "Lead engineering teams",
//     description: "Worked at Figma, Pitch, and Protocol Labs.",
//     image: avt2,
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:3,
//     name: "Olivia Rhye",
//     title: "Co-founder of Opendoor",
//     description: "Early staff at Spotify and Clearbit.",
//     image: avt8, // Replace with actual images or links
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:4,
//     name: "Phoenix Baker",
//     title: "Lead engineering teams",
//     description: "Worked at Figma, Pitch, and Protocol Labs.",
//     image: avt3,
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:5,
//     name: "Olivia Rhye",
//     title: "Co-founder of Opendoor",
//     description: "Early staff at Spotify and Clearbit.",
//     image: avt4, // Replace with actual images or links
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:6,
//     name: "Phoenix Baker",
//     title: "Lead engineering teams",
//     description: "Worked at Figma, Pitch, and Protocol Labs.",
//     image: avt5,
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:7,
//     name: "Olivia Rhye",
//     title: "Co-founder of Opendoor",
//     description: "Early staff at Spotify and Clearbit.",
//     image: avt6, // Replace with actual images or links
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },
//   {
//     id:8,
//     name: "Phoenix Baker",
//     title: "Lead engineering teams",
//     description: "Worked at Figma, Pitch, and Protocol Labs.",
//     image: avt7,
//     socials: [
//       { icon: <FaTwitter />, link: "#" },
//       { icon: <FaLinkedin />, link: "#" },
//       { icon: <FaGithub />, link: "#" },
//     ],
//   },

// ];
export default function MeetOurTeam() {
  const route = useRouter()

  const { data: teamMembers, isLoading, isError, error } = useQuery('teamMembers', getallTeamMembers);
  console.log(teamMembers)

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (isError) {
    route.push('not-found')
  }

  const handleClick = (id: any) => {
    route.push('/team-member/' + id)
  }

  return (
    <section id="meetourteam" className="bg-gray-100 py-16">
      <div>
      <Navbar/>
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold my-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member: any) => (
            <TeamMember
              id={member.id}
              name={member.name}
              title={member.description}
              imageUrl={member.imagePath}
              githubLink={member.link2}
              linkedinLink={member.link1}
              twitterLink={member.link3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
