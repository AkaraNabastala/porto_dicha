import React from 'react';

const CVModal = ({ isVisible, onClose, cvUrl, downloadUrl }) => {
    
    if (!isVisible) return null;

    const handleBackdropClick = (e) => {
        if (e.target.id === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <div 
            id="modal-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-[9000] flex items-center justify-center p-4 transition-opacity duration-300"
        >
            <div 
                className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform scale-100 opacity-100 transition-transform duration-300"
            >
                <div className="flex justify-between items-center p-5 border-b border-zinc-800">
                    <h3 className="text-xl font-semibold text-violet-400">Pratinjau Curriculum Vitae</h3>
                    <button 
                        onClick={onClose} 
                        className="text-zinc-400 hover:text-white transition"
                        aria-label="Tutup Modal"
                    >
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>
                <div className="flex-grow p-4 overflow-y-auto">
                    {cvUrl ? (
                        <iframe
                            src={cvUrl}
                            title="Curriculum Vitae Preview"
                            className="w-full h-[70vh] border-none rounded-lg bg-zinc-800"
                            style={{ minHeight: '500px' }}
                        >
                            <p className="p-4 text-center text-zinc-500">Browser Anda tidak mendukung pratinjau PDF. Silakan unduh langsung.</p>
                        </iframe>
                    ) : (
                        <p className="text-center text-red-400 p-10">URL CV tidak ditemukan.</p>
                    )}
                </div>
                <div className="p-5 border-t border-zinc-800 flex justify-center">
                    <a
                        href={downloadUrl}
                        download
                        onClick={onClose}
                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-7 py-3 rounded-full font-medium transition shadow-lg shadow-violet-800/50"
                    >
                        Download CV <i className="ri-download-line text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CVModal;