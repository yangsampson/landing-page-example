'use client';

import React, { useEffect } from 'react';
import { CheckCircle, Star, Phone, MapPin, Clock, Heart, Leaf, Microscope } from 'lucide-react';

export default function LandingPage() {
  
  // Load Elfsight Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/image/LogoBBRx.png" 
              alt="BBRx Plus Pharmacy Logo" 
              className="h-16 w-auto rounded-xl object-contain"
            />
            <div className="text-2xl font-bold tracking-tight text-emerald-600 uppercase">
              BBRx Plus Pharmacy
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-emerald-600 transition">Services</a>
            <a href="#about" className="hover:text-emerald-600 transition">Our Tradition</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+17188510817" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone size={18} className="text-emerald-600" /> (718) 851-0817
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section id="about" className="relative py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 rounded-full">
                Sunset Park's Community Partner
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                A tradition of care, <span className="text-emerald-600">tailored to you.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                At BBRx Plus Pharmacy, we understand that behind every prescription, there's a patient. We provide quality, value, and exceptional individualized care to our neighbors.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <img 
                src="Image/StoreBBRx.jpg" 
                alt="BBRx Plus Pharmacy Storefront" 
                className="rounded-3xl h-full w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* CORE PROMISE SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Rooted in the Community</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Conveniently located a few strides from several walk-in clinics, senior daycare centers, and dental offices, BBRx Plus Pharmacy continues our established tradition of doing what we know best: serving you.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Specialty Services</h2>
              <p className="text-slate-600 text-lg">Professional service designed to exceed your expectations.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Microscope className="text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pharmaceutical Care</h3>
                <p className="text-slate-600">A full-range of medications managed by friendly pharmacists dedicated to your health journey.</p>
              </div>

              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Leaf className="text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Herbal Remedies</h3>
                <p className="text-slate-600">Expertly sourced imported herbal products and remedies to support your holistic wellness.</p>
              </div>

              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition group">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Heart className="text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessible Info</h3>
                <p className="text-slate-600">Expert drug information and advice. We bridge the gap between treatment and understanding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS WIDGET */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <div 
              className="elfsight-app-613edab7-a57c-4aff-a6e0-b531398c9a9e" 
              data-elfsight-app-lazy 
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-xl font-bold mb-4 uppercase text-emerald-600">BBRx Plus</div>
            <p className="text-slate-500 text-sm">
              Firmly established in the Sunset Park community, prioritizing your well-being through professional pharmaceutical services.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Our Locations</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>BBRx Pharmacy (Flagship)</li>
              <li>BBRx Plus Pharmacy</li>
              <li className="pt-2 italic">A Multi-Chain Community Pharmacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Sunset Park</h4>
            <div className="text-slate-500 text-sm space-y-3">
              <p className="flex items-center gap-2"><MapPin size={16} /> 5223 7th Ave, Brooklyn, NY 11220</p>
              <p className="flex items-center gap-2"><Phone size={16} /> (718) 851-0817</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-2 font-semibold text-slate-900 pt-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <p>Mon-Fri: 9:30 AM – 6:00 PM</p>
                  <p>Sat-Sun: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-400 text-xs border-t border-slate-100 pt-8">
          © {new Date().getFullYear()} BBRx Plus Pharmacy. Your partner in health.
        </div>
      </footer>
    </div>
  );
}
