// File: components/ToolModal.jsx

import React from 'react';

const ToolModal = ({ isVisible, onClose, tool }) => {
    
    if (!isVisible || !tool) return null;

    const handleBackdropClick = (e) => {
        if (e.target.id === 'tool-modal-backdrop') {
            onClose();
        }
    };

    return (
        <div 
            id="tool-modal-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-[9000] flex items-center justify-center p-4 transition-opacity duration-300"
        >
            <div 
                className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col transform scale-100 opacity-100 transition-transform duration-300"
            >
                {/* Header Modal */}
                <div className="flex justify-between items-center p-5 border-b border-zinc-800">
                    <h3 className="text-xl font-semibold text-violet-400">Detail Tools: {tool.nama}</h3>
                    <button 
                        onClick={onClose} 
                        className="text-zinc-400 hover:text-white transition"
                        aria-label="Tutup Modal"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>
                
                {/* Body Modal */}
                <div className="flex-grow p-6 overflow-y-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <img 
                            src={tool.gambar} 
                            alt={tool.nama} 
                            className="w-16 h-16 bg-zinc-700 p-3 rounded-xl"
                        />
                        <div>
                            <p className="text-sm font-medium text-zinc-400">{tool.ket}</p>
                            <h4 className="text-2xl font-bold">{tool.nama}</h4>
                        </div>
                    </div>

                    <p className="text-zinc-300 mt-4 leading-relaxed">
                        {/* Menampilkan deskripsi lengkap (deskripsiLengkap harus ada di data.js) */}
                        {tool.deskripsiLengkap || "Deskripsi lebih detail mengenai penggunaan tools ini oleh Wicha belum tersedia."}
                    </p>
                </div>

                {/* Footer Modal (Opsional, bisa diisi link dokumentasi, dsb.) */}
                <div className="p-5 border-t border-zinc-800 flex justify-center">
                    <button
                        onClick={onClose}
                        className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-7 py-3 rounded-full font-medium transition"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToolModal;