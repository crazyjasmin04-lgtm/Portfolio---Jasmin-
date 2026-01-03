
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-50">
      {/* Animated Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[120px] animate-drift-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-teal-50/50 rounded-full blur-[140px] animate-drift-reverse"></div>
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-navy/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3E")` }}></div>

      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 5%) scale(1.1); }
          66% { transform: translate(-5%, 10%) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift-reverse {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10%, -5%) scale(0.9); }
          66% { transform: translate(5%, -10%) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-drift-slow {
          animation: drift 25s infinite ease-in-out;
        }
        .animate-drift-reverse {
          animation: drift-reverse 30s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Background;
