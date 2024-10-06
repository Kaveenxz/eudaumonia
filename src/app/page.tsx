import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Activities from "./components/Activities";
import UpCommingEvents from "./components/UpCommingEvents";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-4 md:mx-10 lg:mx-20 my-10 lg:my-20">
        <div>
        <Navbar/>
        </div>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about" className="mt-10 lg:mt-20">
          <AboutUs />
        </div>
        <div id="products" className="mt-10 lg:mt-20">
          <Products />
        </div>
        <div id="activities" className="mt-10 lg:mt-20">
          <Activities />
        </div>
        <div id="events" className="mt-10 lg:mt-20">
          <UpCommingEvents />
        </div>
        <div id="blog" className="mt-10 lg:mt-20">
          <Blog />
        </div>
        <div id="contact" className="mt-10 lg:mt-20">
          <ContactUs />
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <Footer />
      </div>
    </>
  );
}
