const Footer = () =>{
    
    // Data terstruktur untuk ikon sosial media
    const socialLinks = [
        // Ganti URL_xxx dengan link asli Anda
        { icon: "ri-instagram-fill", url: "URL_INSTAGRAM" }, 
        { icon: "ri-linkedin-box-fill", url: "URL_LINKEDIN" }, // Tambahkan LinkedIn (penting untuk portofolio)
        { icon: "ri-youtube-fill", url: "URL_YOUTUBE" },
        { icon: "ri-github-fill", url: "URL_GITHUB" },
    ];

    return (
        <footer className="w-full bg-zinc-900 text-white"> 
            <div className="container mx-auto px-4">
                <div className="mt-24 pt-12 border-t border-zinc-800 
                              grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 justify-between 
                              items-start text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <h1 className="text-4xl font-extrabold"><span className="text-violet-500">Dic</span>ha.</h1>
                        <p className="text-sm text-zinc-400">Desainer dan Pengembang Web.</p>
                        <a href="mailto:wichamahardicha@gmail.com" className="text-base font-medium text-zinc-300 hover:text-violet-400 transition-colors pt-2">
                            wichamahardicha@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <h3 className="text-lg font-semibold text-white mb-2">Peta Situs</h3>
                        <a href="#beranda" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm">Beranda</a>
                        <a href="#tentang" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm">Tentang</a>
                        <a href="#proyek" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm">Proyek</a>
                        <a href="#kontak" className="text-zinc-400 hover:text-violet-400 transition-colors text-sm">Kontak</a>
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-1">Hubungi Saya</h3>
                        <div className="flex items-center gap-5">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-3xl text-zinc-400 hover:text-violet-500 transition-colors duration-200"
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="my-12 border-t border-zinc-800"></div>
                <p className="text-center text-xs text-zinc-500 pb-10">
                    Dirancang & Dikodekan oleh Astrophile | &copy; {new Date().getFullYear()} Hak Cipta Dilindungi.
                </p>
            </div>
        </footer>
    );
}

export default Footer;