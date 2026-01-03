
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-12 lg:p-20 text-white space-y-10">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-blue-200 text-lg">Let's discuss collaborations in HR, Recruitment, or Career Training.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-xl font-medium">+91 9150361688</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">Email</p>
                  <p className="text-xl font-medium">crazyjasmin04@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">Location</p>
                  <p className="text-xl font-medium">Cuddalore, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                  🔗
                </div>
                <div>
                  <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">LinkedIn</p>
                  <p className="text-xl font-medium">jasmin-sheik-abdulla-84852619b</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-slate-50 p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/5 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Recruitment" 
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/5 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Your message here..." 
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-navy focus:ring-2 focus:ring-navy/5 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-navy text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
