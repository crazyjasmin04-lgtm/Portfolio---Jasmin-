
import React, { useState, useEffect, useRef } from 'react';
import { editAIImage } from '../services/gemini';

interface HeroProps {
  image: string | null;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ image: initialImage, onCtaClick }) => {
  const [currentImage, setCurrentImage] = useState<string | null>(initialImage);
  const [isEditing, setIsEditing] = useState(false);
  const [editPrompt, setEditPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialImage && !currentImage) {
      setCurrentImage(initialImage);
    }
  }, [initialImage]);

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentImage || !editPrompt.trim()) return;

    setIsProcessing(true);
    const result = await editAIImage(currentImage, editPrompt);
    if (result) {
      setCurrentImage(result);
      setEditPrompt('');
      setIsEditing(false);
    } else {
      alert("Failed to edit image. Please try again.");
    }
    setIsProcessing(false);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md border border-navy/10 px-4 py-1 rounded-full text-navy font-bold text-xs uppercase tracking-widest shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                  <span>Available for Strategic Collaborations</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-navy leading-tight tracking-tight">
                  Jasmin S. A
                </h1>
                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <span className="text-teal-700 font-bold">HR Executive</span> | Assistant Professor | <span className="text-navy underline decoration-teal-400/30 underline-offset-8">Placement Officer</span>
                </p>
              </div>
              
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                “Driving institutional excellence by blending modern HR methodologies with academic mentoring to foster the next generation of global leaders.”
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <button 
                  onClick={onCtaClick}
                  className="group bg-navy text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-navy/20 hover:bg-blue-800 transition-all hover:-translate-y-1 flex items-center space-x-3"
                >
                  <span>Explore My Work</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                <button 
                  className="bg-white/60 backdrop-blur-md border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:border-navy hover:text-navy transition-all hover:-translate-y-1 shadow-sm"
                >
                  Download CV
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-navy/5 rounded-[3rem] blur-3xl group-hover:bg-navy/10 transition-colors"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group-hover:border-teal-50 transition-all duration-500">
                {currentImage ? (
                  <div className="relative group/img">
                    <img src={currentImage} alt="Jasmin S. A - Professional" className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110" />
                    
                    {/* Hidden File Input */}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      accept="image/*" 
                      className="hidden" 
                    />

                    {/* Hover Overlay for Edit/Upload Buttons */}
                    {!isEditing && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                        <button 
                          onClick={() => setIsEditing(true)}
                          className="bg-white/90 text-navy font-bold px-6 py-3 rounded-xl shadow-xl flex items-center space-x-2 hover:bg-white active:scale-95 transition-all w-48 justify-center"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          <span>Magic Edit</span>
                        </button>
                        <button 
                          onClick={handleUploadClick}
                          className="bg-teal-500/90 text-navy font-bold px-6 py-3 rounded-xl shadow-xl flex items-center space-x-2 hover:bg-teal-400 active:scale-95 transition-all w-48 justify-center"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                          <span>Upload Photo</span>
                        </button>
                      </div>
                    )}

                    {/* Edit Form Overlay */}
                    {isEditing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-navy/40 backdrop-blur-md p-6 animate-in zoom-in duration-300">
                        <form onSubmit={handleEditSubmit} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm space-y-4">
                          <h4 className="text-xl font-bold text-navy">Modify Professional Photo</h4>
                          <p className="text-slate-500 text-sm italic">Type what you'd like to change (e.g., "Add professional glasses", "Change background to a library")</p>
                          <textarea 
                            value={editPrompt}
                            onChange={(e) => setEditPrompt(e.target.value)}
                            placeholder="Describe changes..."
                            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent outline-none transition-all resize-none"
                            rows={3}
                          />
                          <div className="flex space-x-3">
                            <button 
                              type="button"
                              onClick={() => setIsEditing(false)}
                              className="flex-1 py-3 text-slate-500 font-bold hover:text-navy transition-colors"
                            >
                              Cancel
                            </button>
                            <button 
                              type="submit"
                              disabled={isProcessing}
                              className="flex-[2] bg-teal-500 text-navy font-black py-3 rounded-xl shadow-lg hover:bg-teal-400 transition-all flex items-center justify-center space-x-2"
                            >
                              {isProcessing ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                                  <span>Regenerating...</span>
                                </>
                              ) : (
                                <span>Apply Magic</span>
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[4/5] bg-slate-100 flex items-center justify-center">
                     <div className="text-center">
                        <div className="w-12 h-12 border-4 border-navy border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-400 font-medium font-serif italic">Generating AI Masterpiece...</p>
                     </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-10 pt-20 pointer-events-none">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="p-2 bg-teal-500 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">Industry Certified Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4 p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 hover:shadow-lg transition-all">
              <div className="text-4xl">🎯</div>
              <h3 className="text-2xl font-bold text-navy">The Vision</h3>
              <p className="text-slate-700 leading-relaxed">To be a transformative force in the educational landscape, ensuring every student has the professional tools to thrive in the corporate world.</p>
            </div>
            <div className="space-y-4 p-8 bg-navy text-white rounded-3xl shadow-xl transform md:-translate-y-8 shadow-navy/30">
              <div className="text-4xl">🤝</div>
              <h3 className="text-2xl font-bold">Core Mission</h3>
              <p className="text-blue-100 leading-relaxed">Bridging the critical gap between university textbooks and industry realities through practical pedagogy and industrial partnerships.</p>
            </div>
            <div className="space-y-4 p-8 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 hover:shadow-lg transition-all">
              <div className="text-4xl">⚖️</div>
              <h3 className="text-2xl font-bold text-navy">Key Values</h3>
              <p className="text-slate-700 leading-relaxed">Integrity in leadership, empathy in mentoring, and an unwavering commitment to excellence in HR and academic teaching.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
