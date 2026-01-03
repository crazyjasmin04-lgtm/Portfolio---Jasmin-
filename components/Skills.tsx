
import React, { useState, useRef } from 'react';
import { SKILLS } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface SkillsProps {
  headerImage: string | null;
}

const Skills: React.FC<SkillsProps> = ({ headerImage }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleGenerateVideo = async () => {
    try {
      // 1. Check for API Key Selection (Mandatory for Veo)
      // @ts-ignore
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }

      setIsGenerating(true);
      setLoadingMsg("Initializing AI Video engine...");

      // 2. Initialize Gemini API (Always create a new instance right before use per guidelines)
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // 3. Start Video Generation
      const prompt = "A cinematic, modern professional animation showing corporate leadership transitioning into academic mentorship. Navy blue and teal accents, abstract data flowing into a mortarboard cap, empowering atmosphere, 1080p, high quality.";
      
      setLoadingMsg("Crafting your professional showcase... This may take a few minutes.");
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      // 4. Polling for completion
      const messages = [
        "Analyzing skill archetypes...",
        "Rendering corporate leadership visuals...",
        "Synthesizing academic excellence themes...",
        "Finalizing cinematic transitions...",
        "Applying professional color grading..."
      ];
      let msgIndex = 0;

      while (!operation.done) {
        setLoadingMsg(messages[msgIndex % messages.length]);
        msgIndex++;
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      // 5. Fetch result
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        if (videoUrl) URL.revokeObjectURL(videoUrl);
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      }
    } catch (error: any) {
      console.error("Video generation failed:", error);
      if (error.message?.includes("Requested entity was not found")) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }
      alert("Something went wrong with the video generation. Please ensure you have a valid paid API key selected.");
    } finally {
      setIsGenerating(false);
      setLoadingMsg("");
    }
  };

  const handleUploadClick = () => {
    videoInputRef.current?.click();
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const clearVideo = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
      setVideoUrl(null);
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-navy text-5xl md:text-6xl font-bold leading-tight">Expertise That Drives Results</h2>
            <p className="text-xl text-slate-700 font-light leading-relaxed">
              My skill set is built on the intersection of human psychology, organizational efficiency, and pedagogical excellence. Each area of expertise is meticulously developed to serve both institutional goals and student success.
            </p>
            <div className="w-24 h-2 bg-teal-500 rounded-full"></div>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 to-navy rounded-[2rem] blur-xl opacity-20"></div>
                {headerImage ? (
                  <img src={headerImage} alt="Professional Skillset Illustration" className="relative w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white" />
                ) : (
                  <div className="aspect-video bg-white/60 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-xl border border-white/30">
                     <div className="text-center p-8">
                        <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-400 font-serif">Visualizing Expertise...</p>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Video Presentation Section */}
        <div className="mb-24 bg-navy/95 backdrop-blur-xl rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6 text-white">
              <div className="flex items-center space-x-3 text-teal-400 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span className="text-sm font-bold uppercase tracking-[0.2em]">Showcase Reel</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Skill Presentation Video</h3>
              <p className="text-blue-100 text-lg font-light leading-relaxed">
                Elevate your professional profile with a cinematic video. Choose to generate a unique, AI-powered animation with Veo or upload your own career highlight reel.
              </p>
              
              <input 
                type="file" 
                ref={videoInputRef} 
                onChange={handleVideoFileChange} 
                accept="video/*" 
                className="hidden" 
              />

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGenerateVideo}
                  disabled={isGenerating}
                  className={`bg-teal-500 text-navy px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 flex-1 ${isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-400'}`}
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                      <span>AI Generate</span>
                    </>
                  )}
                </button>

                <button 
                  onClick={handleUploadClick}
                  disabled={isGenerating}
                  className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl transition-all hover:bg-white/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <span>Upload Reel</span>
                </button>
              </div>

              {videoUrl && (
                <button 
                  onClick={clearVideo}
                  className="text-xs text-red-400 hover:text-red-300 font-bold uppercase tracking-widest flex items-center space-x-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  <span>Remove current video</span>
                </button>
              )}

              <div className="text-xs text-blue-200/50 max-w-sm leading-tight italic">
                * AI generation utilizes Google Veo 3.1 technology and requires a paid API key via the selector. Processing may take up to 3 minutes.
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-black/60 border-2 border-white/10 flex items-center justify-center group/vid shadow-2xl">
                {videoUrl ? (
                  <video 
                    src={videoUrl} 
                    controls 
                    autoPlay 
                    loop 
                    className="w-full h-full object-cover"
                  />
                ) : isGenerating ? (
                  <div className="text-center p-8 relative z-20">
                    <div className="relative w-28 h-28 mx-auto mb-8">
                      <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute inset-4 border-4 border-blue-400/30 border-b-transparent rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-teal-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Neural Rendering Engine</p>
                    <p className="text-blue-100/70 text-sm font-light italic h-5">{loadingMsg}</p>
                  </div>
                ) : (
                  <div className="text-center p-8 space-y-6 relative z-20">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 group-hover/vid:bg-white/10 group-hover/vid:scale-110 transition-all duration-500">
                      <svg className="w-12 h-12 text-white/10 group-hover/vid:text-teal-400/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white font-bold text-lg">Professional Video Showcase</p>
                      <p className="text-white/30 text-sm max-w-[200px] mx-auto">Upload your own or let AI craft a vision for you</p>
                    </div>
                  </div>
                )}
                {/* Scanning line animation when generating */}
                {isGenerating && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-teal-500/40 animate-scan pointer-events-none z-30 shadow-[0_0_15px_rgba(20,184,166,0.8)]"></div>
                )}
                
                {/* Background ambient light */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-blue-500/5 transition-opacity duration-1000 ${isGenerating ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-sm border border-white/40 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-navy group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-teal-700 transition-colors">
                {skill.name}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow font-light">
                {skill.description}
              </p>
              <div className="pt-6 border-t border-slate-200/50 flex items-center text-navy font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Advanced Proficiency</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
