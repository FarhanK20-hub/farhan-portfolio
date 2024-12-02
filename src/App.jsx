import React, { useState, useRef } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/about';
import Projects from './sections/Projects';
import ProjectsCinema from './sections/ProjectsCinema';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import Software from './sections/Software';
import Services from './sections/Services';
import manOrMonster from '/assets/manOrMonster.mp3';

const App = () => {
  const audioRef = useRef(new Audio(manOrMonster)); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const [isMuted, setIsMuted] = useState(false); 

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
      <Software />
      <Projects />
      <ProjectsCinema />
      <Experience />
      <Clients />
      <Services />
      <Contact />
      <Footer />

      <div className="fixed bottom-5 left-5 flex gap-4">
        <button
          onClick={isPlaying ? pauseAudio : playAudio}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>

      <div className="fixed bottom-5 right-5 flex gap-4">
        <button
          onClick={toggleMute}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          {isMuted ? '🔊 Unmute' : '🔇 Mute'}
        </button>
      </div>
    </main>
  );
};

export default App;
