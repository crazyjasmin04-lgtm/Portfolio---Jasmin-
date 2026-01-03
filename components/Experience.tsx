
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

interface ExperienceProps {
  teachingImage: string | null;
  placementImage: string | null;
  corporateImage: string | null;
}

const Experience: React.FC<ExperienceProps> = ({ teachingImage, placementImage, corporateImage }) => {
  const images = [teachingImage, corporateImage, placementImage]; // Mapping roughly to the indices

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy">Professional Journey</h2>
          <p className="text-lg text-slate-500 mt-4">Merging corporate expertise with academic leadership.</p>
        </div>

        <div className="space-y-24">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-bold text-white bg-teal-600 px-4 py-1 rounded-full uppercase tracking-tighter shadow-md">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-navy">{exp.company}</h3>
                <p className="text-xl font-medium text-teal-700">{exp.role}</p>
                
                <ul className="space-y-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-700 leading-relaxed">
                      <span className="text-teal-600 mr-3 mt-1.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full lg:w-1/2 relative">
                <div className={`absolute -inset-4 bg-navy/5 rounded-3xl -z-10 ${index % 2 === 1 ? 'translate-x-4' : '-translate-x-4'}`}></div>
                {images[index] ? (
                  <img 
                    src={images[index]!} 
                    alt={exp.company} 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-slate-200 object-cover aspect-[4/3]"
                  />
                ) : (
                  <div className="w-full h-64 md:h-80 bg-slate-100 rounded-2xl flex items-center justify-center animate-pulse">
                     <p className="text-slate-400">Visualizing Experience...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
