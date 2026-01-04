import HeroImage from "/assets/hero-img.jpg";
const DataImage = { 
  HeroImage,
};

export default DataImage; 

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
// import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";

import Tools11 from "/assets/tools/photoshop.png"; 
import Tools12 from "/assets/tools/premierepro.png"; 
import Tools13 from "/assets/tools/linux.png"; 
import Tools14 from "/assets/tools/docker.png"; 
import Tools15 from "/assets/tools/proxmox.png"; 

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
    deskripsiLengkap: "Editor kode utama yang sangat saya andalkan. Saya mengoptimalkan alur kerja dengan ekstensi seperti Prettier untuk format kode otomatis, Live Server, dan integrasi penuh dengan Git dan GitHub.",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
    deskripsiLengkap: "Digunakan untuk membangun antarmuka pengguna (UI) yang reaktif dan skalabel. Saya fokus pada komponen fungsional, memanfaatkan *Hooks* (useState, useEffect) untuk manajemen state yang efisien, dan bekerja dengan ekosistem seperti React Router.",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
    deskripsiLengkap: "Framework CSS *utility-first* favorit untuk styling yang cepat dan responsif. Memungkinkan saya membangun desain custom tanpa meninggalkan HTML, menghemat waktu yang signifikan dalam proses pengembangan.",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
    deskripsiLengkap: "Digunakan untuk pengembangan prototipe cepat dan proyek yang memerlukan konsistensi desain yang teruji. Saya terbiasa memodifikasi komponen Bootstrap menggunakan Sass untuk branding kustom.",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
    deskripsiLengkap: "Fondasi dari semua pengembangan front-end dan back-end (Node.js). Saya memiliki pemahaman yang kuat tentang konsep ES6+, Asynchronous programming, DOM manipulation, dan functional programming.",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "700",
    deskripsiLengkap: "Platform utama untuk kontrol versi (Version Control System). Saya mahir dalam alur kerja Git dasar (commit, push, pull, branch), pull requests, dan kolaborasi tim.",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "800",
    deskripsiLengkap: "Digunakan untuk pembuatan aset grafis cepat, desain presentasi, dan visual media sosial. Kecepatan dan kemudahan penggunaan Canva sangat membantu saat membutuhkan output desain yang cepat.",
  },
  
  // =========================================================
  // --- TOOLS MULTIMEDIA & SERVER/ADMIN ---
  // =========================================================
  {
    id: 10,
    gambar: Tools11,
    nama: "Photoshop",
    ket: "Photo Editing",
    dad: "900", 
    deskripsiLengkap: "Keahlian dalam editing dan manipulasi foto tingkat lanjut, termasuk *retouching*, *compositing*, dan pembuatan tekstur atau aset visual kompleks untuk dimasukkan ke dalam proyek web.",
  },
  {
    id: 11,
    gambar: Tools12,
    nama: "Premiere Pro",
    ket: "Video Editing",
    dad: "1000", 
    deskripsiLengkap: "Digunakan untuk editing dan produksi video profesional, mulai dari vlog, video promosi bisnis, hingga konten edukasi. Mahir dalam color grading, audio mixing, dan workflow post-production.",
  },
  {
    id: 12,
    gambar: Tools13,
    nama: "Linux (Debian)",
    ket: "Server Admin",
    dad: "1100", 
    deskripsiLengkap: "Berpengalaman dalam administrasi sistem operasi Linux berbasis Debian (Ubuntu Server, Kali) untuk hosting web, manajemen database, dan konfigurasi layanan jaringan (SSH, Firewall, Web Server).",
  },
  {
    id: 13,
    gambar: Tools14,
    nama: "Docker",
    ket: "Containerization",
    dad: "1200", 
    deskripsiLengkap: "Digunakan untuk mengemas aplikasi dan dependensinya ke dalam wadah (container) untuk memastikan konsistensi lingkungan dari pengembangan hingga produksi. Memahami dasar-dasar Dockerfile dan Docker Compose.",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "Proxmox",
    ket: "Virtual Server",
    dad: "1300", 
    deskripsiLengkap: "Platform virtualisasi *open-source* yang saya gunakan untuk mengelola *Home Lab* dan lingkungan server mini. Mahir dalam membuat dan mengelola Virtual Machines (VM) dan Containers (LXC) untuk testing dan pengembangan.",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Web Portfolio",
    desk: "Desain portofolio statis dengan fokus kecepatan dan SEO.",
    deskLengkap: "Proyek ini adalah pengembangan portofolio modern yang mengutamakan User Experience. Menggunakan metodologi clean code untuk memastikan performa maksimal dan optimasi SEO agar mudah ditemukan di mesin pencari.",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    dad: "100",
    kategori: "Desain Visual",
    link: "#",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Learning",
    desk: "Website interaktif untuk pembelajaran online.",
    deskLengkap: "Platform pembelajaran online yang dirancang untuk memberikan pengalaman belajar yang interaktif dan menyenangkan. Fitur utama meliputi kuis, video pembelajaran, dan sistem pelacakan kemajuan siswa.",
    tools: ["ReactJs", "Firebase", "TailwindCSS"],
    dad: "200",
    kategori: "Web Development",
    link: "https://informatika.smpislamcaruy.id/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Instalasi Home Lab Server",
    desk: "Perancangan dan instalasi server Ubuntu untuk manajemen data pribadi.",
    deskLengkap: "Membangun ekosistem server lokal menggunakan Proxmox sebagai hypervisor. Di dalamnya berjalan berbagai container Docker untuk layanan seperti Nextcloud (Cloud pribadi), Pi-hole (Ad-blocker), dan Nginx Proxy Manager.",
    tools: ["Linux", "Docker", "Proxmox"],
    dad: "300",
    kategori: "Infrastruktur/Sistem",
    link: "#",
  },
  {
    id: 4,
    gambar: Proyek4, // Pastikan kamu sudah mengimport gambar nota hidup
    nama: "Web Nota Hidup",
    desk: "Website profil bisnis jasa undangan digital profesional.",
    deskLengkap: "Sebuah platform profil bisnis yang dirancang untuk memperkenalkan jasa pembuatan undangan digital. Fokus pada User Experience yang elegan, responsif, dan integrasi katalog produk yang modern.",
    tools: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    dad: "100",
    kategori: "Web Development",
    link: "https://akaranabastala.github.io/Web_NotaHidup/",
  },
];

import LogoSD from "/assets/edu/logo_sd.png"; 
import LogoSMP from "/assets/edu/logo_smp.png"; 
import LogoSMK from "/assets/edu/logo_smk.png"; 
import LogoUkom from "/assets/edu/logo_unikma.png";

export const listEdukasi = [
    {
        id: 1,
        logo: LogoUkom,
        institusi: "Universitas Komputama Majenang",
        jurusan: "Mahasiswa Sistem Informasi",
        tahun: "2023 - Sekarang",
        deskripsi: "Studi mendalam mengenai integrasi teknologi informasi dan manajemen bisnis. Fokus pada pengembangan sistem, analisis data, dan infrastruktur IT.",
        spesialisasi: [
            "Analisis dan Perancangan Sistem",
            "Administrasi Jaringan & Server",
            "Manajemen Database (SQL)",
            "Keamanan Informasi Dasar"
        ]
    },
    {
        id: 2,
        logo: LogoSMK,
        institusi: "SMK Negeri Karangpucung",
        jurusan: "Teknik Kendaraan Ringan Otomotif (TKRO)",
        tahun: "2020 - 2023",
        deskripsi: "Pendidikan vokasi dengan fokus pada perawatan dan perbaikan kendaraan bermotor, serta dasar-dasar teknologi informasi dan jaringan komputer.",
        spesialisasi: [
            "Perawatan dan Perbaikan Mesin",
            "Sistem Kelistrikan Otomotif",
        ]
    },
    {
        id: 3,
        logo: LogoSMP,
        institusi: "SMP Islam Caruy",
        jurusan: "Pendidikan Umum",
        tahun: "2017 - 2020",
        deskripsi: "Menyelesaikan pendidikan menengah pertama dengan penekanan pada pengembangan karakter dan akademis.",
        spesialisasi: null,
    },
    {
        id: 4,
        logo: LogoSD,
        institusi: "SD Negeri Karangreja 01",
        jurusan: "Pendidikan Dasar",
        tahun: "2011 - 2017",
        deskripsi: "Menyelesaikan pendidikan dasar enam tahun.",
        spesialisasi: null,
    },
];
// File: data.js
import cert1 from "/assets/sertifikat/cert1.jpg";
import cert2 from "/assets/sertifikat/cert2.jpg";
import cert3 from "/assets/sertifikat/cert3.jpg";

export const listSertifikat = [
  {
    id: 1,
    nama: "Own Your Cloud Journey with Openstack",
    penerbit: "ID-Networkers Indonesia IT Expert Factory",
    gambar: cert1,
    link: "https://drive.google.com/file/d/11jn_Yqb0rsHhEqTpixoGeg76pWVRp872/view?usp=sharing",
    dad: "100",
    desk: "Sertifikat ini menandai keberhasilan dalam memahami konsep dasar OpenStack, instalasi, dan manajemen layanan cloud computing menggunakan platform OpenStack.",
  },
  {
    id: 2,
    nama: "Intro To Programming Class",
    penerbit: "Coding Studio",
    gambar: cert2,
    link: "https://drive.google.com/file/d/1CrvgVDJzRC34sKLdQR3J1VKETftftArS/view?usp=sharing",
    dad: "200",
    desk: "Sertifikat ini menandai penyelesaian kelas pengantar pemrograman, mencakup dasar-dasar logika pemrograman, struktur data, dan algoritma sederhana."
  },
  {
    id: 3,
    nama: "Tes Kompetensi Akademik (TKA)",
    penerbit: "PERGUNU",
    gambar: cert3,
    link: "https://drive.google.com/file/d/1GPJMAf99cb5J6rpSDAKu79vai_JyCvQ4/view?usp=sharing",
    dad: "300",
    desk: "Sertifikat ini menandai keberhasilan dalam Tes Kompetensi Akademik (TKA) yang mencakup berbagai bidang pengetahuan umum dan kemampuan akademik."
  },
];