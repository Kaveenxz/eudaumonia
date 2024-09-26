// pages/sidebar.js
import Image from "next/image";
import img from '@/app/images/pexels-ron-lach-9034660 2.png'

export default function Sidebar() {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/3 bg-white flex flex-col justify-between p-8">
          <div className="space-y-4">
            {["Products", "Activities", "Event", "Blog", "Member"].map((item) => (
              <button
                key={item}
                className="w-full bg-[#D31145] text-white py-3 rounded-full text-center text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <button className="w-full bg-[#D31145] text-white py-3 rounded-full text-center text-lg font-semibold hover:bg-red-600 transition-colors">
              Log Out
            </button>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="w-3/4">
          <Image
            src={img} // replace with your image path
            alt="Beach Cleanup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  