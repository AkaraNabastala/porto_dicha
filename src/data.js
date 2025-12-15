// File: data.js

import HeroImage from "/assets/hero-img.webp";

// Pastikan ekspor default menggunakan nama yang konsisten (DataImage)
const DataImage = { 
  HeroImage,
};

export default DataImage; 

// --- IMPOR UNTUK TOOLS LAMA ---
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
// import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";

// --- IMPOR UNTUK TOOLS BARU (Multimedia & Server/Admin) ---
// ASUMSI: Anda telah menambahkan file gambar ini di folder /assets/tools/
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
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  // {
  //   id: 7,
  //   gambar: Tools7,
  //   nama: "Node JS",
  //   ket: "Javascript Runtime",
  //   dad: "700",
  // },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "800",
  },
  
  // =========================================================
  // --- PENAMBAHAN TOOLS MULTIMEDIA & SERVER/ADMIN BARU ---
  // =========================================================
  {
    id: 10,
    gambar: Tools11,
    nama: "Photoshop",
    ket: "Photo Editing",
    dad: "900", 
  },
  {
    id: 11,
    gambar: Tools12,
    nama: "Premiere Pro",
    ket: "Video Editing",
    dad: "1000", 
  },
  {
    id: 12,
    gambar: Tools13,
    nama: "Linux (Debian)",
    ket: "Server Admin",
    dad: "1100", 
  },
  {
    id: 13,
    gambar: Tools14,
    nama: "Docker",
    ket: "Containerization",
    dad: "1200", 
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "Proxmox",
    ket: "Server Virtual Server",
    dad: "1300", 
  },
];

// --- IMPOR UNTUK PROYEK LAMA ---
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";
import Proyek7 from "/assets/proyek/proyek7.webp"; 
import Proyek8 from "/assets/proyek/proyek8.webp"; 

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Website profil dan informasi sekolah dengan desain modern.",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
    kategori: "Web Development",
    link: "#",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Website Company Profile interaktif dan responsif.",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
    kategori: "Web Development",
    link: "#",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Undangan digital berbasis ReactJS dengan performa tinggi.",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    kategori: "Web Development",
    link: "#",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Platform kursus online dengan fokus pada UI/UX yang bersih.",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
    kategori: "Web Development",
    link: "#",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Desain portofolio statis dengan fokus kecepatan dan SEO.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    kategori: "Desain Visual",
    link: "#",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Website generasi baru menggunakan NextJS dan animasi Framer Motion.",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
    kategori: "Web Development",
    link: "#",
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Web Learning",
    desk: "Website interaktif untuk pembelajaran online.",
    tools: ["ReactJs, Firebase, TailwindCSS"],
    dad: "800",
    kategori: "Web Development",
    link: "https://informatika.smpislamcaruy.id/",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Instalasi Home Lab Server",
    desk: "Perancangan dan instalasi server Ubuntu untuk manajemen data pribadi (private cloud).",
    tools: ["Linux", "Docker", "Proxmox"],
    dad: "900",
    kategori: "Infrastruktur/Sistem",
    link: "#",
  },
];