import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef, useEffect } from 'react';
import Blogs from "./Blogs"
import Hero from "./Hero"
import Project from "./Project"
import ScrollToTopButton from "./ScrollToTopButton"
import Layout from "./Layout";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Trusted from "./Trusted";
import Reviews from "./Reviews";
import BlogDetail from "./Blogdetail";
import Teams from "./Teams";
import Login from "./Login";
import Signup from "./Signup";
import According from "./According";

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the container ref is available
    if (containerRef.current) {
      import('locomotive-scroll').then((locomotiveModule) => {
        const scroll = new locomotiveModule.default({
          el: containerRef.current,
          smooth: true,
          multiplier: 0.8,
          lerp: 0.1,
          smoothMobile: true,
          touchMultiplier: 2,
          smartphone: {
            smooth: true,
            multiplier: 0.5
          },
          tablet: {
            smooth: true,
            multiplier: 0.8
          }
          // Add other Locomotive Scroll options here
        });

        // Clean up the scroll instance when the component unmounts
        return () => scroll.destroy();
      });
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={
          <div data-scroll-container ref={containerRef}>
            <Hero />
            <Trusted />
            <Teams />
            <Reviews/>
            <According/>
          </div>
        } />
        <Route path="/projects" element={<Project/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogdetail" element={<BlogDetail/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contactUs" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App
