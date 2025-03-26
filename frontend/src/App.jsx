import React from 'react'
import Home from './home/Home'
import Courses from "../src/courses/Courses"
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from "./components/Signup.jsx"
import Contacts from "../src/contact/Contacts.jsx"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider.jsx"

function App() { 

  const[authUser, setAuthUser] = useAuth()
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />: <Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />      
      </Routes>
      <Toaster />
    </>
  )
}

export default App
