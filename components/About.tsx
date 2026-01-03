
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
             <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-navy/5 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl">
                   <h3 className="text-3xl font-serif font-bold text-navy mb-4">A Bridge Between Worlds</h3>
                   <p className="text-slate-700 leading-relaxed italic">
                    "I believe in creating a synergy where industrial excellence meets academic rigor to prepare the leaders of tomorrow."
                   </p>
                </div>
             </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-navy/10 text-navy font-bold text-sm uppercase tracking-wider">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">Transforming HR & Education</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                With over <span className="font-bold text-navy">3+ years of intensive experience</span> in HR, recruitment, and employee engagement, I have successfully navigated the complexities of talent acquisition and business development.
              </p>
              <p>
                Currently serving as an <span className="font-bold text-navy">Assistant Professor & Training and Placement Officer</span>, I am dedicated to bridging the gap between industry expectations and academic learning. My passion lies in management education, where I empower students to transition seamlessly into professional roles.
              </p>
              <p>
                My multifaceted background allows me to bring a unique perspective to institutional growth, focusing on leadership development, professional readiness, and strategic employability training.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-3xl font-bold text-navy">3.5+</p>
                <p className="text-slate-600 font-medium">Years in HR & Strategy</p>
              </div>
              <div className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-3xl font-bold text-teal-700">8.3</p>
                <p className="text-slate-600 font-medium">GPA - MBA (HR)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
