import Achievement from "@/components/Achivement/Achivement";
import CourseCategory from "@/components/CourseCategory/CourseCategory";
import Courses from "@/components/Courses/Courses";
import CustomerTestimonial from "@/components/CustomerTestimonials/CoustomerTestimonial";
import Footer from "@/components/Footer/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OurTeam from "@/components/OurTeam/OurTeam";


export default function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <Navbar/>
      <HeroSection/>
      <CourseCategory/>
      <Achievement/>
      <Courses/>
      <OurTeam/>
      <CustomerTestimonial/>
      <Footer/>
    </div>
    
  );
}
