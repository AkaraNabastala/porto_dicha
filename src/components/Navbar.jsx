import { useState, useEffect } from "react";

const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang" },
    { href: "#proyek", label: "Proyek" },
    { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState ('beranda');
    // State baru untuk Smart Header
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // =========================================================
    // --- LOGIKA SMART HEADER & SCROLL SPY ---
    // =========================================================
    useEffect(() => {
        let isTicking = false;
        
        // Logika untuk mendeteksi arah scroll
        const updateVisibility = () => {
            const currentScrollY = window.scrollY;

            // Jangan sembunyikan jika masih di bagian atas halaman
            if (currentScrollY <= 80) { // Jika kurang dari 80px dari atas, selalu tampilkan
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scroll Down: Sembunyikan Navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scroll Up: Tampilkan Navbar
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
            isTicking = false;
        };

        // Logika untuk Scroll Spy (menentukan section aktif)
        const updateActiveSection = () => {
             const sections = document.querySelectorAll('section[id]'); 
             let currentActive = 'beranda';
             const scrollY = window.scrollY + 150; 
             
             for (let i = sections.length - 1; i >= 0; i--) {
                 const section = sections[i];
                 const sectionTop = section.offsetTop;
                 const sectionId = section.getAttribute('id');
                 if (scrollY >= sectionTop) {
                     currentActive = sectionId;
                     break;
                 }
             }
             if (window.scrollY === 0) {
                  currentActive = 'beranda';
             }

             setActiveSection(currentActive);
        };
        
        const handleScroll = () => {
            updateActiveSection(); // Update section aktif

            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    updateVisibility(); // Update visibilitas header (Smart Header)
                });
                isTicking = true;
            }
        };


        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Panggil saat mount
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },  [lastScrollY]); // Dependensi lastScrollY agar logika smart header berjalan
    
    // Logika handleLinkClick tetap sama
    const handleLinkClick = (href) => {
        const sectionId = href.substring(1);
        setActiveSection(sectionId);
    }
    // =========================================================

    // Kelas Tailwind untuk mengontrol transisi visibilitas
    const desktopTransformClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100px] opacity-0';
    // Kita hanya menerapkan ini pada desktop (md:flex)

    return (
    <>
        {/* =========================================================
            HEADER DESKTOP (MD:FLEX)
            Menggunakan kelas CSS dinamis untuk Smart Header
        ========================================================= */}
        <header className={`hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-8 pointer-events-none 
                            transition-all duration-300 ease-in-out ${desktopTransformClass}`}>
            
            {/* Logo Kiri */}
            <a href="#beranda" className="absolute top-8 left-40 text-4xl font-extrabold text-white pointer-events-auto transition hover:text-violet-500">
                <span className="text-violet-500">Dic</span>ha.
            </a>
            
            {/* Navbar Tengah */}
            <div className={`
                w-full max-w-xl p-3 rounded-full 
                bg-zinc-800/80 backdrop-blur-xl shadow-2xl border border-zinc-700 pointer-events-auto 
                transition-all duration-300
            `}>
                <nav>
                    <ul className="flex items-center justify-between gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`
                                        text-sm font-medium px-4 py-2 rounded-full transition-all duration-300
                                        ${activeSection === link.href.substring(1) 
                                            ? 'bg-violet-600 text-white shadow-md shadow-violet-800/50' 
                                            : 'text-zinc-300 hover:text-white hover:bg-zinc-700'}
                                    `}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            {/* Tombol Kontak Kanan */}
            <a
                href="#kontak"
                className="hidden lg:inline-flex items-center bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-full font-medium transition text-sm absolute top-8 right-40 pointer-events-auto"
            >
                Hubungi Saya <i className="ri-mail-line ml-2"></i>
            </a>

        </header>
        
        {/* =========================================================
            HEADER MOBILE (MD:HIDDEN)
            (Tidak diubah, karena Floating Bar mobile biasanya tetap)
        ========================================================= */}
        <header className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-700 py-3">
            <nav>
                <ul className="flex items-center justify-around gap-2 px-4">
                    {navLinks.map((link) => (
                        <li key={`mobile-${link.href}`} className="flex-1 text-center">
                            <a 
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`
                                    flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300
                                    ${activeSection === link.href.substring(1) 
                                        ? 'text-violet-500' 
                                        : 'text-zinc-500 hover:text-violet-300'}
                                `}
                            >
                                <i className={`
                                    ${link.href === '#beranda' ? 'ri-home-4-line' : 
                                      link.href === '#tentang' ? 'ri-user-line' : 
                                      link.href === '#proyek' ? 'ri-folder-open-line' : 
                                      'ri-mail-line'} text-xl
                                `}></i>
                                <span className="text-xs mt-1">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    </>
    );
};

export default Navbar;