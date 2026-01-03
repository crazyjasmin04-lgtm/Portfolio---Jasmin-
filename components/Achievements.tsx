
import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-teal-50 text-teal-700 font-black text-xs uppercase tracking-[0.2em] border border-teal-100">
            Impact Metrics
          </div>
          <h2 className="text-navy text-5xl md:text-7xl font-bold tracking-tight">Measurable Success</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">A track record of driving institutional growth and individual student success through strategic HR intervention and dedicated placement coordination.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {ACHIEVEMENTS.map((item, index) => (
            <div 
              key={index} 
              className="relative group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:bg-navy hover:text-white"
            >
              <div className="text-5xl md:text-6xl font-black mb-4 tabular-nums text-teal-600 group-hover:text-white transition-colors">
                {item.value}
              </div>
              <h3 className="text-lg font-black mb-4 uppercase tracking-tighter group-hover:text-teal-400">
                {item.label}
              </h3>
              <p className="text-slate-500 font-medium text-sm group-hover:text-blue-100 leading-relaxed">
                {item.description}
              </p>
              <div className="absolute -bottom-2 right-10 opacity-10 text-8xl font-black group-hover:opacity-20 transition-opacity">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Video / Visual Impact Section */}
        <div className="relative rounded-[4rem] bg-navy overflow-hidden shadow-2xl p-12 lg:p-24">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'white', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8 text-white">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Institutional Impact Highlights</h3>
              <p className="text-blue-100 text-lg font-light leading-relaxed">
                Watch how we transform the campus environment through structured placement drives and high-impact soft-skill training seminars. Our goal is 100% professional readiness for every student.
              </p>
              <ul className="space-y-4">
                {['Direct industry connections for 200+ students', 'Reduced hiring TAT by 30% for corporate partners', 'Enhanced soft skills for 500+ female engineering students'].map((point, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="font-medium text-blue-50">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative group/vid cursor-pointer">
                <div className="absolute -inset-4 bg-teal-400/20 rounded-[3rem] blur-2xl group-hover/vid:bg-teal-400/30 transition-all"></div>
                <div className="relative aspect-video bg-blue-900/50 rounded-[2.5rem] border-2 border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Visualizing a video placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-navy opacity-60"></div>
                  <div className="relative z-20 text-center space-y-4">
                    <div className="w-24 h-24 bg-white text-navy rounded-full flex items-center justify-center mx-auto shadow-2xl transform transition-transform group-hover/vid:scale-110">
                      <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Play Impact Showreel</p>
                  </div>
                  {/* Subtle moving lines for tech/video effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scan pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
