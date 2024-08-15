// components/TeamMember.js
export default function TeamMember({ name, title, description, image, socials }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src={image} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-4" />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex justify-center space-x-3">
          {socials.map(({ icon, link }, index) => (
            <a href={link} key={index} className="text-gray-600 hover:text-gray-800">
              {icon}
            </a>
          ))}
        </div>
      </div>
    );
  }
  