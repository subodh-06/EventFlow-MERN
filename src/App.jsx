import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/layout/Navbar'

import Footer from './components/layout/Footer'
import Faq from './components/ui/Faq'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import SearchBar from './components/ui/Searchbar'

function App() {
  const events = [
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1590,h-900/zedd-4-collection-202502270602.jpg",
      title: "Music Festival 2025",
      date: "March 20, 2025",
      location: "New York, USA",
      description: "Experience the biggest music festival with top artists from around the world!",
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1590,h-900/zedd-4-collection-202502270602.jpg",
      title: "Tech Summit 2025",
      date: "April 15, 2025",
      location: "San Francisco, USA",
      description: "Join industry leaders and innovators at the global tech summit!",
    },
    {
      image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1590,h-900/zedd-4-collection-202502270602.jpg",
      title: "Tech Summit 2025",
      date: "April 15, 2025",
      location: "San Francisco, USA",
      description: "Join industry leaders and innovators at the global tech summit!",
    },
  ];

  return (
    <>
   <Navbar/>

   <section className=" bg-[#141413] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center text-center bg-zinc-800 rounded-xl py-20 px-6 mt-1">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-50">Find Your Next Event</h1>
      <p className="text-lg text-gray-200 mt-4 mb-1.5 max-w-xl">Discover and attend amazing events happening near you!</p>
  
    <SearchBar/>
      </div>
    </section>



<Footer/>
    </>
  )
}

export default App
