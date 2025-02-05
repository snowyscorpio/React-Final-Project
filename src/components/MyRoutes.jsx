import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import About from './About';
import Contact from './Contact';
import SinglePage from './SinglePage';
import Header from './Header';
import Footer from './Footer';

function MyRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/editpost/:id' element={<EditPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post/:id' element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyRoutes;
