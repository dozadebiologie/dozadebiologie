
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../App';

interface VideosProps {
  user: User | null;
}

const Videos: React.FC<VideosProps> = ({ user }) => {
  const navigate = useNavigate();
  
  const categories = [
    { 
      id: 'biologie-corint',
      title: 'Biologie - Corint', 
      image: 'https://edituracorint.ro/pub/media/catalog/product/cache/6675ff74a1d8426a9a906824e3cf45ba/m/a/manual_biologie_xi_cristescu_3.jpg' 
    },
  ];

  const handleCourseClick = (id: string) => {
    if (!user) {
      // Dacă nu e logat, îl trimitem la login
      navigate('/login');
    } else {
      // Dacă e logat, intră pe curs
      navigate(`/cursuri/${id}`);
    }
  };

  return (
    <div className="pt-32 pb-20 px-10 max-w-7xl mx-auto">
      <div className="mb-16 animate-fade-up">
        <h2 className="text-4xl font-bold mb-4">Cursuri Video</h2>
        <p className="text-gray-500 max-w-2xl">
          Explicații clare, diagrame interactive și sinteze video create pentru a-ți ușura învățarea. Conectează-te pentru a accesa conținutul.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div 
            key={cat.id} 
            onClick={() => handleCourseClick(cat.id)}
            className={`group cursor-pointer animate-zoom delay-${(index + 1) * 100}`}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-sm border border-gray-100 bg-white">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              />
              {!user && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">Necesită Logare</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none">
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-500 transition-colors">{cat.title}</h3>
            <p className="text-gray-400 text-sm">
              {user ? 'Vizualizează cursurile →' : 'Loghează-te pentru acces →'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-gray-50 rounded-[40px] flex flex-col md:flex-row items-center gap-10 animate-fade-up delay-200">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Ești gata să înveți diferit?</h3>
          <p className="text-gray-600">
            Peste 100 de ore de conținut video de înaltă calitate te așteaptă să le descoperi după autentificare.
          </p>
        </div>
        <div className="flex-1">
            <div className="bg-white p-4 rounded-2xl shadow-xl relative transform rotate-2 animate-zoom delay-300">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Video preview" />
                    <svg className="w-16 h-16 text-white absolute drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168l4.74 3.555a.5.5 0 010 .894l-4.74 3.555A.5.5 0 018 14.718V7.49a.5.5 0 01.755-.448l.8 1.126z" />
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
