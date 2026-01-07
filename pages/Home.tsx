
import React from 'react';
import { Link } from 'react-router-dom';

const DnaLogo = ({ size = 40 }: { size?: number }) => (
  <img 
    src="https://dozadebiologie.wordpress.com/wp-content/uploads/2023/02/2.profil.png" 
    alt="dozadebiologie logo" 
    style={{ width: size, height: size }}
    className="object-contain"
  />
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">
        {/* Left Side */}
        <div className="lg:w-1/2 p-10 pt-32 lg:pt-20 lg:p-20 flex flex-col justify-center items-start bg-white relative z-10">
          <div className="mb-20 animate-fade-down">
            <Link to="/" className="flex items-center gap-2 group">
               <div className="h-12 w-auto flex items-center gap-3">
                  <DnaLogo />
                  <span className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors">dozadebiologie</span>
               </div>
            </Link>
          </div>

          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-normal leading-[1.1] mb-8 text-slate-900 animate-fade-up delay-100">
              Drumul tău spre<br />medicină începe acum.
            </h1>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed animate-fade-up delay-200">
              Găsește cei mai buni profesori de biologie și chimie. Pregătește-te structurat, înțelege materia în profunzime și transformă-ți visul în realitate.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#72f68b] text-black px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md animate-fade-up delay-300"
            >
              Începe acum
            </Link>
          </div>
        </div>

        {/* Right Side - Image Static */}
        <div className="hidden lg:block lg:w-1/2 bg-black relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-zoom"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1767536091842-ab3ac829c08d?q=80&w=1200&auto=format&fit=crop')` 
            }}
          >
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-20 px-10 border-t border-gray-50 relative z-10 animate-fade-up delay-400">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-slate-400 text-lg font-normal">
            <Link to="/termeni" className="hover:text-black transition-colors">Termeni și condiții</Link>
            <Link to="/confidentialitate" className="hover:text-black transition-colors">Confidențialitate</Link>
            <Link to="/despre" className="hover:text-black transition-colors">Despre noi</Link>
            <Link to="/contact" className="hover:text-black transition-colors">Contactează-ne</Link>
          </div>

          {/* SOL Logo Centrat */}
          <div className="flex items-center justify-center">
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
               <div className="border border-slate-300 rounded-md px-5 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-tight text-center leading-tight">
                  Soluționarea<br/>Online a<br/>Litigiilor
               </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
