'use client'
import TeamMember from "@/app/components/TeamMember";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { getallTeamMembers } from "../api/team-member/api";
import Navbar from "../components/Navbar";

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
