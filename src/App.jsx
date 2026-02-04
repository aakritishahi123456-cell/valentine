import React from 'react';
import FallingHearts from './components/FallingHearts';
import VirtualEnvelope from './components/VirtualEnvelope';
import MusicPlayer from './components/MusicPlayer';
import Countdown from './components/Countdown';
import ValentinesQuestion from './components/ValentinesQuestion';
import PoemGenerator from './components/PoemGenerator';
import PhotoGallery from './components/PhotoGallery';
import MemoryMap from './components/MemoryMap';

function App() {
  return (
    <div className="relative min-h-screen pb-20 overflow-x-hidden text-center">
      {/* Background Animation */}
      <FallingHearts />

      {/* Music Player */}
      <MusicPlayer />

      {/* Hero Section: Centered vertically */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-heading text-rose-600 drop-shadow-sm mb-4">
            Happy Valentine's Day
          </h1>
          <p className="text-xl text-rose-800 font-body italic">
            A special surprise, just for you.
          </p>
        </header>

        {/* Countdown */}
        <section className="mb-8">
          <Countdown />
        </section>

        {/* Valentine Question */}
        <section>
          <ValentinesQuestion />
        </section>
      </div>

      {/* Main Content: Envelope */}
      <main className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-20">
        <section className="w-full flex justify-center py-10">
          <VirtualEnvelope />
        </section>

        {/* Poem Generator */}
        <section className="w-full">
          <PoemGenerator />
        </section>

        {/* Gallery */}
        <section className="w-full">
          <PhotoGallery />
        </section>

        {/* Map */}
        <section className="w-full">
          <MemoryMap />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 py-8 text-center text-rose-400 font-body">
        <p>Made with Love & Code ❤</p>
      </footer>
    </div>
  );
}

export default App;
