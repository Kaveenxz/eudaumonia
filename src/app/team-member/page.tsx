// components/MeetOurTeam.js
import TeamMember from "@/app/components/TeamMember";

const teamMembers = [
  {
    name: "Olivia Rhye",
    title: "Co-founder of Opendoor",
    description: "Early staff at Spotify and Clearbit.",
    image: "/olivia.jpg", // Replace with actual images or links
    socials: [
      { icon: "<FaTwitter />", link: "#" },
      { icon: "<FaLinkedin />", link: "#" },
      { icon: "<FaGithub />", link: "#" },
    ],
  },
  {
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: "/phoenix.jpg",
    socials: [
      { icon: "<FaTwitter />", link: "#" },
      { icon: "<FaLinkedin />", link: "#" },
      { icon: "<FaGithub />", link: "#" },
    ],
  },
  {
    name: "Phoenix Baker",
    title: "Lead engineering teams",
    description: "Worked at Figma, Pitch, and Protocol Labs.",
    image: "/phoenix.jpg",
    socials: [
      { icon: "<FaTwitter />", link: "#" },
      { icon: "<FaLinkedin />", link: "#" },
      { icon: "<FaGithub />", link: "#" },
    ],
  },
  
  // Add more team members here
];

export default function MeetOurTeam() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet our team</h2>
        <p className="text-center text-gray-600 mb-12">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
