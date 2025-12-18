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
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-[9000] flex items-center justify-center p-4"
        >
            <div 
                className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-zinc-800">
                    <div>
                        <h3 className="text-lg font-bold text-white">Curriculum Vitae</h3>
                        <p className="text-xs text-zinc-400">Pratinjau Dokumen</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition"
                        aria-label="Tutup Modal"
                    >
                        <i className="ri-close-line text-xl"></i>
                    </button>
                </div>

                {/* PDF Container - Dioptimalkan untuk Rasio A4 */}
                <div className="flex-grow p-2 bg-zinc-950 flex justify-center overflow-hidden">
                    {cvUrl ? (
                        <iframe
                            src={cvUrl}
                            title="Curriculum Vitae Preview"
                            // h-[65vh] menjaga agar footer tombol tetap terlihat di atas taskbar
                            className="w-full h-[65vh] border-none rounded-lg bg-zinc-800"
                        >
                            <p className="p-4 text-center text-zinc-500">Browser tidak mendukung pratinjau. Silakan unduh.</p>
                        </iframe>
                    ) : (
                        <div className="p-20 text-center">
                            <i className="ri-error-warning-line text-4xl text-zinc-700 mb-2"></i>
                            <p className="text-zinc-500">URL tidak ditemukan.</p>
                        </div>
                    )}
                </div>

                {/* Footer / Download Button */}
                <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex flex-col sm:flex-row gap-3">
                    <a
                        href={downloadUrl}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-bold transition shadow-lg shadow-violet-800/40 text-sm"
                    >
                        Download PDF <i className="ri-download-2-line"></i>
                    </a>
                    <button 
                        onClick={onClose}
                        className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-3 rounded-xl font-medium transition text-sm"
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CVModal;