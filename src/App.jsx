// File: App.jsx

import { useState } from 'react';

import DataImage, { listTools, listProyek } from "./data";
import CVModal from "./components/CVModal";

const CV_PREVIEW_URL = "/assets/cv_dicha.pdf#toolbar=0&navpanes=0&scrollbar=0"; 
const CV_DOWNLOAD_URL = "/assets/cv_dicha.pdf";

const categories = ['Semua', 'Web Development', 'Desain Visual', 'Multimedia', 'Infrastruktur/Sistem']; 


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');
  
    const openModal = (e) => {
        e.preventDefault(); 
        setIsModalOpen(true);
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
              Saya seorang **Full Stack Developer, Desainer Visual, dan Kreator Multimedia**.
              Saat ini juga aktif sebagai **Mahasiswa Sistem Informasi**, yang memberi saya wawasan 
              holistik tentang teknologi dan proses bisnis. Sudah saya tekuni lebih dari 4 tahun.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#" 
                onClick={openModal} 
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-7 py-3 rounded-full font-medium transition shadow-lg shadow-violet-800/50"
              >
                Download CV <i className="ri-download-line text-lg"></i>
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
              Diperkuat dengan latar belakang akademis dari **Jurusan Sistem Informasi**, saya juga 
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
                  key={tool.id}
                  className="flex gap-4 bg-zinc-800 p-5 rounded-2xl hover:bg-zinc-700 transition duration-300 transform hover:-translate-y-1"
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
          <div className="pendidikan mt-24">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8" data-aos="fade-up">Edukasi</h3>
            
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 space-y-4" data-aos="fade-up" data-aos-delay="200">
                <div className="flex justify-between items-center flex-wrap">
                    <h4 className="text-xl font-semibold text-violet-400">Universitas Komputama Majenang</h4>
                    <span className="text-sm text-zinc-500">2023 - Sekarang</span>
                </div>
                <h5 className="text-lg font-medium text-white">Mahasiswa Sistem Informasi</h5>
                <p className="text-zinc-400">
                    Mempelajari integrasi antara teknologi informasi dan manajemen bisnis, 
                    termasuk analisis sistem, database management, dan perancangan solusi digital.
                </p>
            </div>
          </div>

        </div>
      </section>
      <section id="proyek" className="py-24">
        <div className="container mx-auto px-6">

          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2" data-aos="fade-up">Proyek</h1>
            <p className="text-zinc-400 text-lg" data-aos="fade-up" data-aos-delay="200">
              Berikut beberapa proyek yang telah saya buat, dikelompokkan berdasarkan keahlian.
            </p>
          </div>
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
                      className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-700 hover:border-violet-500 transition duration-300 transform hover:-translate-y-1"
                      data-aos="fade-up" data-aos-delay={proyek.dad || 0}
                    >
                      <img
                        src={proyek.gambar}
                        alt={proyek.nama}
                        className="w-full h-52 object-cover transition duration-300 hover:opacity-80" 
                      />

                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-1">{proyek.nama}</h2>
                        <span className="text-xs font-medium text-violet-400 bg-violet-900/40 px-2 py-0.5 rounded mb-3 inline-block">
                            {proyek.kategori}
                        </span>
                        <p className="text-zinc-400 text-base mb-4">
                          {proyek.desk}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {proyek.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs bg-zinc-700 text-violet-300 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proyek.link || '#'}
                          {...(proyek.link && proyek.link !== "#" 
                            ? { target: "_blank", rel: "noopener noreferrer" } 
                            : {}
                          )}
                          className="block text-center bg-violet-600 hover:bg-violet-700 py-3 rounded-xl transition font-medium"
                        >
                          Lihat Detail
                        </a>
                      </div>
                    </div>
                  ))}
            </div>

        </div>
      </section>
      <section id="kontak" className="py-24">
      </section>
      <CVModal 
        isVisible={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cvUrl={CV_PREVIEW_URL}
        downloadUrl={CV_DOWNLOAD_URL}
      />
    </main>
  );
}

export default App;