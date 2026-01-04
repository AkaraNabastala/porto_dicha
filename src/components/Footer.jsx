import React from 'react';

const Footer = () => {
    const socialLinks = [
        { icon: "ri-instagram-line", url: "https://www.instagram.com/dicha16_/" }, 
        { icon: "ri-linkedin-box-line", url: "https://linkedin.com/in/mahardicha" },
        { icon: "ri-youtube-line", url: "https://www.youtube.com/@mahardicha16" },
        { icon: "ri-github-line", url: "https://github.com/AkaraNabastala" },
    ];

    return (
        <footer className="w-full bg-[#09090b] text-white font-['Poppins']"> 
            <div className="container mx-auto px-8 lg:px-16">
                
                {/* --- Main Content --- */}
                <div className="pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-800/50">
                    
                    {/* Brand Section (Span 5) */}
                    <div className="md:col-span-5 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl font-bold tracking-tighter">
                            <span className="text-violet-500">Dic</span>ha.
                        </h1>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
                            Membangun pengalaman digital yang bermakna melalui desain visual yang bersih dan pengembangan web yang efisien.
                        </p>
                        <div className="pt-2">
                            <a href="mailto:wichamahardicha@gmail.com" 
                               className="group flex items-center justify-center md:justify-start gap-2 text-zinc-300 hover:text-violet-400 transition-all duration-300">
                                <i className="ri-mail-send-line text-lg"></i>
                                <span className="text-sm border-b border-transparent group-hover:border-violet-400">wichamahardicha@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Section (Span 3) */}
                    <div className="md:col-span-3 space-y-6 text-center md:text-left">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Peta Situs</h3>
                        <nav className="flex flex-col space-y-4">
                            {['Beranda', 'Tentang', 'Proyek', 'Kontak'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} 
                                   className="text-zinc-400 hover:text-white transition-colors text-sm font-light w-fit mx-auto md:mx-0">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Social Section (Span 4) */}
                    <div className="md:col-span-4 space-y-6 text-center md:text-left">
                        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Terhubung Kembali</h3>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
                                >
                                    <i className={`${link.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* --- Bottom Section --- */}
                <div className="py-10 border-t border-zinc-800/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                        © {new Date().getFullYear()} Dicha. Hak Cipta Dilindungi.
                    </p>
                    
                    <div className="flex items-center gap-2 group">
                        <span className="text-zinc-600 text-[9px] uppercase tracking-widest">Crafted by</span>
                        <span className="text-zinc-300 text-xs font-serif italic tracking-widest group-hover:text-violet-400 transition-colors">
                            Naba<span className="not-italic font-bold font-sans text-violet-500 tracking-tighter">stala</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;