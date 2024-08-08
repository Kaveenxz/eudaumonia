import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Activities from "./components/Activities";
import UpCommingEvents from "./components/UpCommingEvents";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-20 my-20">
      <div>
        <HeroSection />
      </div>
      <div className="mt-20">
        <AboutUs />
      </div>
      <div className="mt-20">
        <Products/>
      </div>
      <div className="mt-20">
        <Activities/>
      </div>
      <div className="mt-20">
        <UpCommingEvents/>
      </div>
      <div className="mt-20">
        <Blog/>
      </div>
      <div className="mt-20">
        <ContactUs/>
      </div>
      <div className="mt-20">
        <Footer/>
      </div>
    </div>
  );
}
