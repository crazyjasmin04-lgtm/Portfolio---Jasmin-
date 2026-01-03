
import React from 'react';

const Education: React.FC = () => {
  const languages = [
    { name: "Tamil", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Conversational" },
    { name: "Urdu", level: "Conversational" },
  ];

  return (
    <section id="education" className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-12 flex items-center">
              <span className="w-12 h-1 bg-teal-400 mr-4 rounded-full"></span>
              Academic Foundation
            </h2>
            
            <div className="space-y-12">
              <div className="relative pl-10 border-l border-blue-800">
                <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
                <p className="text-teal-400 font-bold text-sm tracking-widest uppercase mb-2">Post Graduation</p>
                <h3 className="text-2xl font-bold mb-1">MBA (Human Resources)</h3>
                <p className="text-blue-200 text-lg">Tamil Nadu Open University</p>
                <p className="mt-4 text-slate-300 font-medium">GPA: 8.3 | First Class with Distinction</p>
              </div>

              <div className="relative pl-10 border-l border-blue-800">
                <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full"></div>
                <p className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-2">Graduation</p>
                <h3 className="text-2xl font-bold mb-1">BBA (Computer Applications)</h3>
                <p className="text-blue-200 text-lg">St. Joseph’s College of Arts & Science</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold mb-8">Languages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <p className="font-bold text-lg">{lang.name}</p>
                    <p className="text-slate-400 text-sm uppercase tracking-tighter">{lang.level}</p>
                  </div>
                  <div className="w-10 h-10 bg-teal-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-teal-400">✓</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-900/40 rounded-2xl border border-blue-800">
              <h4 className="font-bold text-xl mb-4 text-teal-400">Career Goal</h4>
              <p className="text-slate-300 leading-relaxed italic">
                "To leverage my dual expertise in HR Management and Academic Mentoring to build high-performance organizations and future-ready talent."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
