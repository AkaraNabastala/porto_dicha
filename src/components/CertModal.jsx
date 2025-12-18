import React from 'react';

const CertModal = ({ isVisible, onClose, cert }) => {
  if (!isVisible || !cert) return null;

  return (
    // Tambahkan items-center dan justify-center agar benar-benar di tengah
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      
      {/* Box Modal: Tambahkan max-h-[90vh] dan overflow-y-auto */}
      <div className="relative bg-zinc-800 border border-zinc-700 w-full max-w-2xl rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        {/* Tombol Close Tetap di Posisi Atas */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black rounded-full text-white transition flex items-center justify-center"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        {/* Container Scroll: Membungkus konten agar bisa di-scroll jika kepanjangan */}
        <div className="overflow-y-auto w-full custom-scrollbar">
          <div className="flex flex-col">
            {/* Bagian Gambar */}
            <div className="w-full bg-zinc-900 p-4 pt-12 sm:pt-4">
              <img 
                src={cert.gambar} 
                alt={cert.nama} 
                className="w-full h-auto max-h-[50vh] object-contain mx-auto rounded-lg shadow-lg" 
              />
            </div>

            {/* Bagian Informasi */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{cert.nama}</h2>
              <p className="text-violet-400 font-medium mb-4">{cert.penerbit}</p>
              
              <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-700/50 mb-6">
                <h4 className="text-[10px] font-bold uppercase text-zinc-500 mb-2 tracking-widest">Deskripsi Kompetensi</h4>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {cert.desk || "Detail kompetensi untuk sertifikat ini belum ditambahkan."}
                </p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row gap-3">
                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-center py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm"
                  >
                    Verifikasi Sertifikat <i className="ri-external-link-line"></i>
                  </a>
                )}
                <button 
                  onClick={onClose} 
                  className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-xl font-bold transition text-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertModal;