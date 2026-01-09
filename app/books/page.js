'use client'

import { useState } from 'react'
import Image from 'next/image' 

const books = [
  {
    id: 1,
    title: "Modern CSS with Tailwind",
    author: "Noel Rappin",
    description: "Flexible Styling Without the Fuss. This second edition covers Tailwind 3.0 and teaches you how to design modern web interfaces efficiently.",
    image: "/images/book1.png" 
  },
  {
    id: 2,
    title: "The Next.js Handbook",
    author: "Flavio Copes",
    description: "A comprehensive guide to building server-side rendered React applications. Master the framework that powers the modern web.",
    image: "/images/book2.png"
  },
  {
    id: 3,
    title: "Mindset",
    author: "Carol S. Dweck, Ph.D.",
    description: "The New Psychology of Success. Discover how the 'growth mindset' can foster achievement in school, work, sports, and relationships.",
    image: "/images/book3.jpg"
  },
  {
    id: 4,
    title: "A Million To One",
    author: "Tony Faggioli",
    description: "The Fasano Trilogy: Book Two. A gripping tale about the demons you never see coming and the struggle to overcome impossible odds.",
    image: "/images/book4.jpg"
  },
  {
    id: 5,
    title: "The Imperfections of Memory",
    author: "Angelina Aludo",
    description: "In purgatory, a soul must piece together jumbled memories to find the truth. A haunting story about the fragments of our past.",
    image: "/images/book5.jpg"
  },
  {
    id: 6,
    title: "Business Strategy 2025",
    author: "Dollar Inc",
    description: "The best way to predict the future is to create it. Essential strategies for navigating the upcoming business landscape.",
    image: "/images/book6.jpg"
  }
]

export default function BooksPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? books.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === books.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="min-h-screen pt-16 md:pt-10 pb-24 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-12 text-center">
        Featured Setup & Reads
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-150 md:h-150 bg-black/50 backdrop-blur-md rounded-2xl p-4 md:p-8 flex items-center shadow-2xl">
        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-4 z-10 p-2 rounded-full bg-white/20 hover:bg-amber-600 text-white transition-all backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-8 md:px-16 transition-all duration-500 ease-in-out">
          
          {/* Book Cover Image */}
          <div className="shrink-0 relative group">
             {/* Simple shadow/glow effect behind the book */}
             <div className="absolute -inset-1 bg-white/20 blur-md rounded-lg group-hover:bg-amber-500/30 transition-all duration-500"></div>
             <img 
               src={books[currentIndex].image} 
               alt={books[currentIndex].title}
               className="relative w-40 md:w-64 h-auto rounded-lg shadow-2xl rotate-2 md:rotate-3 object-cover border border-white/10"
             />
          </div>

          {/* Book Details */}
          <div className="text-white text-center md:text-left max-w-lg">
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-2 text-amber-100">
              {books[currentIndex].title}
            </h2>
            <p className="text-amber-400 font-medium text-lg mb-4 italic">
              by {books[currentIndex].author}
            </p>
            <p className="text-gray-200 leading-relaxed font-light text-sm md:text-base mb-6">
              {books[currentIndex].description}
            </p>
            
            <button className="px-8 py-3 bg-linear-to-r from-amber-600 to-orange-600 hover:brightness-110 text-white rounded-full font-medium transition-all shadow-lg transform hover:-translate-y-1">
              Read Details
            </button>
          </div>

        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-amber-600 text-white transition-all backdrop-blur-sm"
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {books.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-amber-500 w-6 md:w-8' : 'bg-gray-400/50 hover:bg-white/50'}`}
            ></div>
          ))}
        </div>

      </div>
    </div>
  )
}