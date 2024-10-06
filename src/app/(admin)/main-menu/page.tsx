import Image from "next/image";
import Link from "next/link";
import img from "@/app/images/pexels-ron-lach-9034660 2.png";

export default function Sidebar() {
  return (
    <div className="flex h-screen">
      <div className="sm:w-1/3 bg-white flex flex-col justify-between p-8 max-sm:w-full">
        <div className="space-y-4">
          {[
            { name: "Products", path: "/add-product" },
            { name: "Activities", path: "/add-activity" },
            { name: "Event", path: "/add-event" },
            { name: "Blog", path: "/add-blog" },
            { name: "Member", path: "/add-member" }
          ].map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <p className="w-full mb-3 block bg-[#D31145] text-white py-3 rounded-full text-center text-lg font-semibold hover:bg-red-600 transition-colors">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <div>
          <button className="w-full bg-[#D31145] text-white py-3 rounded-full text-center text-lg font-semibold hover:bg-red-600 transition-colors">
            Log Out
          </button>
        </div>
      </div>

      <div className="sm:w-3/4 max-sm:hidden">
        <Image
          src={img}
          alt="Sidebar Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
