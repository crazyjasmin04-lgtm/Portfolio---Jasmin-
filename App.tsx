
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { IMAGE_CONFIGS } from './constants';
import { generateAIImage } from './services/gemini';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [aiImages, setAiImages] = useState<Record<string, string | null>>({
    hero: null,
    teaching: null,
    placement: null,
    corporate: null,
    skills_header: null
  });

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = IMAGE_CONFIGS.map(async (cfg) => {
        const url = await generateAIImage(cfg.prompt);
        return { id: cfg.id, url };
      });

      const results = await Promise.all(imagePromises);
      const newImages: Record<string, string | null> = {};
      results.forEach(res => {
        newImages[res.id] = res.url;
      });
      setAiImages(newImages);
    };

    loadImages();
  }, []);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Hero image={aiImages.hero} onCtaClick={() => setActiveTab('experience')} />;
      case 'about':
        return (
          <div className="pt-20 animate-in fade-in zoom-in-95 duration-700">
            <About />
            <Education />
          </div>
        );
      case 'skills':
        return (
          <div className="pt-20 animate-in fade-in zoom-in-95 duration-700">
            <Skills headerImage={aiImages.skills_header} />
          </div>
        );
      case 'experience':
        return (
          <div className="pt-20 animate-in fade-in zoom-in-95 duration-700">
            <Experience 
              teachingImage={aiImages.teaching} 
              corporateImage={aiImages.corporate} 
              placementImage={aiImages.placement} 
            />
          </div>
        );
      case 'impact':
        return (
          <div className="pt-20 animate-in fade-in zoom-in-95 duration-700">
            <Achievements />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20 animate-in fade-in zoom-in-95 duration-700">
            <Contact />
          </div>
        );
      default:
        return <Hero image={aiImages.hero} onCtaClick={() => setActiveTab('experience')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-teal-100 selection:text-navy">
      <Background />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-grow relative z-10">
        {renderPage()}
      </main>
      
      <footer className="py-20 bg-white/40 backdrop-blur-xl border-t border-slate-200/50 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-3xl font-bold text-navy font-serif">Jasmin S. A</span>
            <p className="text-slate-500 mt-2 font-light">Leading with Purpose, Mentoring with Heart.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {['home', 'about', 'skills', 'experience', 'impact', 'contact'].map(tab => (
              <button 
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  window.scrollTo(0,0);
                }}
                className={`text-sm uppercase tracking-[0.2em] font-black transition-all hover:text-navy ${activeTab === tab ? 'text-navy border-b-2 border-teal-500' : 'text-slate-400'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} Jasmin S. A. Professional Academic-Corporate Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
