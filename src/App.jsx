import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Locations from './pages/Locations';
import SingleLocation from './pages/SingleLocation'; 
import About from './pages/About';
import Contact from './pages/Contact'; 


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} /> 

            {/* TODO: Set up authication to access routes below */}
            <Route path="locations" element={<Locations />} />
            <Route
              path="locations/new"
              element={<h1>Add new location page</h1>}
            />
            <Route
              path="locations/:locationId"
              element={<SingleLocation />}
            />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
