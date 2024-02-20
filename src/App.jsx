import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';

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
            <Route path="contact" element={<h1>Contact Page</h1>} />

            {/* TODO: Set up authication to access routes below */}
            <Route path="locations" element={<h1>All locations</h1>} />
            <Route
              path="locations/new"
              element={<h1>Add new location page</h1>}
            />
            <Route
              path="locations/:locationId"
              element={<h1>One location page</h1>}
            />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
