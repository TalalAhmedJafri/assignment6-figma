import Achivements from '@/components/Achivement/Achivement';
import Category from '@/components/CourseCategory/Category';
import Courses from '@/components/Courses/Courses';
import Testimonials from '@/components/CustomerTestimonials/Testimonial';
import Footer from '@/components/Footer/Footer/Footer';
import Header from '@/components/Header/Header';
import Banner from '@/components/Hero/Banner';
import Logo from '@/components/Logo/Logo';
import Team from '@/components/OurTeam/Team';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Logo />
      <Category />
      <Achivements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;