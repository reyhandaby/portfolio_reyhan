'use client';
import React from 'react';
import Navbar from './components/navbar';
import Image from 'next/image';



export default function Home() {
  // Function onclick scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="top" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m <span className="text-blue-600">Reyhandra Abyonas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
                I create beautiful, functional websites and applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/assets/CV_Reyhandra.pdf" download>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Download CV
                  </button>
                </a>
                <button
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/foto.jpeg"
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                I love creating innovative solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With a strong foundation in both frontend and backend development, 
                I bring ideas to life through clean code and intuitive design.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Image src="/assets/react.svg" alt="React" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/next.svg" alt="React" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/firebase.png" alt="Firebase" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">Firebase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/mongodb.png" alt="MongoDB" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/node_js.png" alt="Node.js" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/work-1.png"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">E-Commerce Website</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Full-stack e-commerce platform with React and Node.js
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">Node.js</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/work-2.png"
                alt="Project 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mobile App UI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Beautiful mobile application interface design
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">Figma</span>
                  <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded">UI/UX</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/work-3.png"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dashboard Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Real-time analytics dashboard with data visualization
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded">Next.js</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">Chart.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/email_icon.png" alt="Email" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">reyhandabyonas@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/assets/mob_icon.png" alt="Phone" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/assets/loc_icon.png" alt="Location" width={24} height={24} />
                  <span className="text-gray-600 dark:text-gray-300">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Reyhandra Abyonas. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

