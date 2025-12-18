import React from 'react';

const ProyekModal = ({ isVisible, onClose, proyek }) => {
  if (!isVisible || !proyek) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Box dengan scroll internal & pembatas tinggi */}
      <div className="relative bg-zinc-800 border border-zinc-700 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black rounded-full flex items-center justify-center text-white transition shadow-lg"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {/* Scrollable Area */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Gambar Proyek */}
          <div className="w-full h-64 sm:h-80 overflow-hidden bg-zinc-900">
            <img 
              src={proyek.gambar} 
              alt={proyek.nama} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Konten Detail */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-900/30 px-3 py-1 rounded-full border border-violet-500/30">
                {proyek.kategori}
              </span>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-white leading-tight">{proyek.nama}</h2>
            
            {/* Menggunakan deskLengkap untuk penjelasan detail */}
            <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-700/50 mb-8">
               <h4 className="text-[10px] font-bold uppercase text-zinc-500 mb-2 tracking-widest">Tentang Proyek</h4>
               <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                 {proyek.deskLengkap || proyek.desk}
               </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-3 tracking-widest">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-zinc-900 text-violet-300 border border-zinc-700 rounded-xl text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            {proyek.link && proyek.link !== "#" && (
              <a
                href={proyek.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-2xl transition shadow-lg shadow-violet-900/40"
              >
                Kunjungi Proyek <i className="ri-external-link-line"></i>
              </a>
            )}
            
            <button 
              onClick={onClose}
              className="w-full mt-3 text-zinc-500 hover:text-white transition text-sm font-medium py-2"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyekModal;