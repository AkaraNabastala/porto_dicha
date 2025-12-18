import { useState } from 'react';

import DataImage, { listTools, listProyek, listSertifikat } from "./data";
import CVModal from "./components/CVModal";
import ToolModal from "./components/ToolModal";
import ProyekModal from "./components/ProyekModal";
import CertModal from "./components/CertModal";

const CV_PREVIEW_URL = "/assets/cv_dicha.pdf#toolbar=0&navpanes=0&scrollbar=0"; 
const CV_DOWNLOAD_URL = "/assets/cv_dicha.pdf";

const categories = ['Semua', 'Web Development', 'Desain Visual', 'Multimedia', 'Infrastruktur/Sistem']; 
// function App() {
//   // const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [activeCategory, setActiveCategory] = useState('Semua');
  
//   //   const openModal = (e) => {
//   //       e.preventDefault(); 
//   //       setIsModalOpen(true);
//   //   };
  function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Semua'); 
    const [isToolModalOpen, setIsToolModalOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState(null);
    const [isProyekModalOpen, setIsProyekModalOpen] = useState(false);
    const [selectedProyek, setSelectedProyek] = useState(null);
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const openProyekModal = (proyek) => {
        setSelectedProyek(proyek);
        setIsProyekModalOpen(true);
    };
    
    const openToolModal = (tool) => {
        setSelectedTool(tool);
        setIsToolModalOpen(true);
    };

    const openModal = (e) => {
        e.preventDefault(); 
        setIsModalOpen(true);
    };
    const openCertModal = (cert) => {   
        setSelectedCert(cert);
        setIsCertModalOpen(true);
    };
  return (
    <main className="bg-zinc-900 text-white">
      <section className="min-h-[calc(100vh-6rem)] flex items-center" id="beranda">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="400"> 
            <div className="flex items-center gap-4 bg-zinc-800/80 backdrop-blur-sm px-5 py-3 rounded-full w-fit border border-violet-600/50"> 
              <img
                src={DataImage.HeroImage}
                alt="Hero Icon"
                className="w-12 h-12 rounded-xl object-cover border-2 border-violet-400" 
                loading="lazy"
              />
              <q className="text-sm text-zinc-300">
                Tidak apa mengeluh, tapi jangan berhenti dan menyerah.
              </q>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, perkenalkan saya <br />
              <span className="text-violet-500">Wicha Mahardicha</span>
            </h1>
            <p className="text-zinc-400 max-w-xl leading-relaxed text-lg">
              Saya seorang Full Stack Developer, Desainer Visual, dan Kreator Multimedia.
              Saat ini juga aktif sebagai Mahasiswa Sistem Informasi di salah satu Universitas, yang memberi saya wawasan 
              holistik tentang teknologi dan proses bisnis. Sudah saya tekuni lebih dari 4 tahun.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/1f5ecykpsxoVj8y4uyQrN3ewW60w6oEAF/view?usp=sharing" 
                onClick={openModal} 
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-7 py-3 rounded-full font-medium transition shadow-lg shadow-violet-800/50"
              >
                Lihat CV <i className="ri-eye-line text-lg"></i>
              </a>
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-7 py-3 rounded-full font-medium transition"
              >
                Lihat Proyek <i className="ri-arrow-down-line text-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="600">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-full max-w-sm lg:max-w-md 
                         rounded-[3rem] 
                         object-cover 
                         border border-zinc-700/50 
                         shadow-[5px_5px_15px_rgba(0,0,0,0.4),_-5px_-5px_15px_rgba(255,255,255,0.05)] 
                         transform hover:scale-[1.02] transition-all duration-300" 
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-24" id="tentang">
        <div className="container mx-auto px-6 space-y-32">
          <div className="bg-zinc-800 rounded-3xl p-8 lg:p-12 space-y-10 border border-zinc-700" data-aos="fade-up">
            <div className="flex items-center gap-4">
              <img
                src={DataImage.HeroImage}
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover border-2 border-violet-500"
              />
              <h2 className="text-2xl md:text-3xl font-semibold">
                Tentang Saya
              </h2>
            </div>

            <p className="text-zinc-300 leading-relaxed text-lg">
              Hi, perkenalkan saya Wicha Mahardicha. Saya berfokus pada pembangunan solusi digital 
              yang fungsional (Web Development), didukung dengan kemampuan Desain, Fotografi, dan Video Editing. 
              Diperkuat dengan latar belakang akademis dari Jurusan Sistem Informasi, saya juga 
              tertarik pada Administrasi Server dan infrastruktur Home Lab.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-700">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-violet-500">45+</h3>
                <p className="text-zinc-400 text-lg">Proyek Selesai</p>
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-violet-500">4+</h3>
                <p className="text-zinc-400 text-lg">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          <div className="tools">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up">Tools yang Dipakai</h3>
            <p className="max-w-3xl text-zinc-400 mb-12 text-lg" data-aos="fade-up" data-aos-delay="200">
              Beberapa tools yang biasa saya gunakan untuk pengembangan, desain, multimedia, dan server.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {listTools.map((tool) => (
                <div
                  key={tool.id} onClick={() => openToolModal(tool)}
                  className="flex gap-4 bg-zinc-800 p-5 rounded-2xl border border-zinc-800 hover:bg-zinc-700 hover:border-violet-600 cursor-pointer transition duration-300 transform hover:-translate-y-1" // <-- Tambahkan cursor-pointer
                  data-aos="fade-up" data-aos-delay={tool.dad || 0}
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-12 h-12 bg-zinc-700 p-2 rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{tool.nama}</h4>
                    <p className="text-sm text-zinc-400">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="proyek" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-3 mb-12" data-aos="fade-up" data-aos-delay="300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition text-sm
                  ${activeCategory === cat 
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-800/50' 
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProyek
              .filter(proyek => activeCategory === 'Semua' || proyek.kategori === activeCategory)
              .map((proyek) => (
                <div
                  key={proyek.id}
                  onClick={() => openProyekModal(proyek)} // Klik kartu untuk buka modal
                  className="group bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700 hover:border-violet-500 transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                  data-aos="fade-up" 
                  data-aos-delay={proyek.dad || 0}
                >
                  <div className="relative overflow-hidden">
                      <img
                        src={proyek.gambar}
                        alt={proyek.nama}
                        className="w-full h-52 object-cover transition duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-sm font-medium">
                              Klik untuk Detail
                          </span>
                      </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-1">{proyek.nama}</h2>
                    <span className="text-xs font-medium text-violet-400 bg-violet-900/40 px-2 py-0.5 rounded mb-3 inline-block">
                        {proyek.kategori}
                    </span>
                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                      {proyek.desk}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proyek.tools.slice(0, 3).map((tool, index) => ( // Tampilkan 3 tool saja di kartu
                        <span key={index} className="px-2 py-1 text-[10px] bg-zinc-700 text-violet-300 rounded-md">
                          {tool}
                        </span>
                      ))}
                      {proyek.tools.length > 3 && <span className="text-[10px] text-zinc-500">+{proyek.tools.length - 3}</span>}
                    </div>

                    {/* Tombol pemicu Modal */}
                    <button
                      className="w-full bg-zinc-700 group-hover:bg-violet-600 text-white py-3 rounded-xl transition font-medium text-sm"
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section id="sertifikat" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2" data-aos="fade-up">Sertifikat</h1>
            <p className="text-zinc-400 text-lg" data-aos="fade-up" data-aos-delay="200">
              Penghargaan dan sertifikasi kompetensi yang telah saya raih.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listSertifikat.map((cert) => (
              <div 
                key={cert.id} 
                // --- BARIS INI YANG MEMPERBAIKI ERROR ---
                onClick={() => openCertModal(cert)} 
                // ----------------------------------------
                className="bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden hover:border-violet-500 transition duration-300 group cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={cert.dad || 0}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.gambar} 
                    alt={cert.nama} 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-2">
                    <div className="bg-violet-600 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <i className="ri-zoom-in-line text-xl text-white"></i>
                    </div>
                    <span className="text-white text-xs font-medium">Klik untuk Detail</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 line-clamp-1 group-hover:text-violet-400 transition">
                    {cert.nama}
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium">{cert.penerbit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="kontak" className="py-24">
        <div className="container mx-auto px-6">
          <div className="kontak max-w-lg mx-auto">
            {/* Header Kontak */}
            <div className="text-center mb-10">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2" data-aos="fade-up">
                Kontak
              </h1>
              <p className="text-zinc-400" data-aos="fade-up" data-aos-delay="200">
                Mari terhubung dengan saya.
              </p>
            </div>

            {/* Form Kontak */}
            <form 
              action="https://formsubmit.co/wichamahardicha@gmail.com" 
              method="POST"
              className="bg-zinc-800 p-8 sm:p-10 rounded-xl shadow-2xl border border-zinc-700 space-y-6" 
              autoComplete="off" 
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              {/* Input Nama */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold text-zinc-300 ml-1">Nama</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukkan nama..."
                  className="bg-zinc-700 border border-zinc-600 p-3 rounded-lg text-white placeholder-zinc-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition"
                  required
                />
              </div>

              {/* Input Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-zinc-300 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukkan email..."
                  className="bg-zinc-700 border border-zinc-600 p-3 rounded-lg text-white placeholder-zinc-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition"
                  required
                />
              </div>

              {/* Input Pesan */}
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold text-zinc-300 ml-1">Pesan</label>
                <textarea
                  name="pesan"
                  id="pesan"
                  rows="5"
                  placeholder="Silahkan tulis pesan Anda..."
                  className="bg-zinc-700 border border-zinc-600 p-3 rounded-lg text-white placeholder-zinc-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-violet-600 py-3 rounded-lg font-bold text-white hover:bg-violet-700 transition shadow-md shadow-violet-800/50"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <CVModal 
        isVisible={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cvUrl={CV_PREVIEW_URL}
        downloadUrl={CV_DOWNLOAD_URL}
      />
      <ToolModal 
        isVisible={isToolModalOpen}
        onClose={() => setIsToolModalOpen(false)}
        tool={selectedTool}
      />
      <ProyekModal 
        isVisible={isProyekModalOpen}
        onClose={() => setIsProyekModalOpen(false)}
        proyek={selectedProyek}
      />
      <CertModal 
        isVisible={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        cert={selectedCert}
      />
    </main>
  );
}

export default App;