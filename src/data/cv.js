// Seluruh data di file ini diambil langsung dari CV Filimon Erno Rubik.
// Semua konten narasi memiliki versi { id, en }: versi Indonesia mengikuti
// teks asli di CV, versi Inggris adalah terjemahannya. Nama, institusi,
// tanggal, dan angka tidak diterjemahkan/diubah.

export const profile = {
  name: 'Filimon Erno Rubik',
  title: {
    id: 'Industrial Engineer — Operasional, PPIC & Fasilitas (MRO)',
    en: 'Industrial Engineer — Operations, PPIC & Facilities (MRO)',
  },
  location: 'Sleman, D.I Yogyakarta',
  phone: '085348794508',
  email: 'filimonernorubik2103@gmail.com',
  summary: {
    id: 'Lulusan Teknik Industri (S.T.) yang berorientasi pada hasil dan Spesialis Rantai Pasokan Bersertifikat BNSP dengan keahlian teruji dalam pengawasan pemeliharaan fasilitas MRO, perencanaan produksi (PPIC), dan logistik operasional. Telah membuktikan keberhasilan dalam memimpin tim teknisi lapangan, mengelola infrastruktur HVAC berskala rumah sakit, serta melaksanakan penilaian risiko HSE (JSA). Mahir dalam sistem ERP (Odoo), simulasi Metode Elemen Diskrit (EDEM), dan desain tata letak pabrik (PTLF). Terampil dalam memanfaatkan analisis berbasis data dan koordinasi lintas fungsi untuk merampingkan operasi, mengurangi waktu henti, dan mendorong efisiensi proses di sektor manufaktur dan industri.',
    en: 'Results-driven Industrial Engineering Graduate (S.T.) and BNSP-Certified Supply Chain Specialist with proven expertise in MRO facility maintenance supervision, production planning (PPIC), and operational logistics. Demonstrated success leading field technician teams, managing hospital-scale HVAC infrastructure, and executing HSE hazard assessments (JSA). Proficient in ERP systems (Odoo), Discrete Element Method simulation (EDEM), and plant layout design (PTLF). Adept at utilizing data-driven analysis and cross-functional coordination to streamline operations, reduce downtime, and drive process efficiency in manufacturing and industrial sectors.',
  },
  summaryExtra: {
    id: 'Memiliki sertifikasi BNSP di bidang Supply Chain Management (Manajemen Produksi) serta pemahaman mendalam terkait Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3). Terbukti aktif dalam riset teknik, perancangan fasilitas, dan kepemimpinan organisasi — siap mengaplikasikan keahlian engineering, perencanaan produksi (PPIC), dan analisis sistem untuk mendukung efisiensi operasional dan manufaktur.',
    en: 'Holds a BNSP certification in Supply Chain Management (Production Management) along with a solid understanding of Occupational Health and Safety Management Systems (SMK3). Proven active involvement in engineering research, facility design, and organizational leadership — ready to apply engineering expertise, production planning (PPIC), and systems analysis to support operational and manufacturing efficiency.',
  },
}

export const stats = [
  { value: '1', label: { id: 'Sertifikasi BNSP', en: 'BNSP Certification' } },
  { value: '6', label: { id: 'Bidang Keahlian Inti', en: 'Core Skill Areas' } },
  { value: '2', label: { id: 'Proyek & Riset', en: 'Projects & Research' } },
  { value: '2022', label: { id: 'Awal Studi Teknik Industri', en: 'Started Industrial Engineering' } },
]

export const education = {
  institution: 'Universitas Proklamasi',
  degree: 'Bachelor of Industrial Engineering',
  period: { id: '2022 – Sekarang', en: '2022 – Present' },
}

export const experience = [
  {
    role: {
      id: 'Staf Supervisor (Maintenance Department)',
      en: 'Staff Supervisor (Maintenance Department)',
    },
    org: 'CV. Berkah Cahaya Logam',
    location: 'Bantul, Yogyakarta',
    period: { id: 'Juni 2025 – Juni 2026', en: 'June 2025 – June 2026' },
    points: [
      {
        id: 'Memimpin dan mengkoordinasikan jadwal rotasi shift tim teknisi lapangan untuk memastikan layanan pemeliharaan (MRO) sistem HVAC/AC rumah sakit berjalan tanpa henti.',
        en: 'Led and coordinated field technician shift rotation schedules to ensure uninterrupted maintenance (MRO) service for hospital HVAC/AC systems.',
      },
      {
        id: 'Mengelola logistik pengadaan spare part, inventarisasi barang, dan administrasi operasional harian departemen maintenance.',
        en: 'Managed spare part procurement logistics, inventory, and daily operational administration for the maintenance department.',
      },
      {
        id: 'Bertindak sebagai jembatan komunikasi utama dan berkoordinasi intensif antara pihak operasional Rumah Sakit, tim teknisi di lapangan, dan Direktur Perusahaan.',
        en: 'Acted as the main communication bridge, coordinating closely between hospital operations, field technician teams, and the Company Director.',
      },
      {
        id: 'Mengawasi implementasi standar operasional prosedur (SOP) perbaikan untuk memastikan efisiensi waktu dan kualitas penyelesaian masalah teknis.',
        en: 'Oversaw implementation of repair standard operating procedures (SOPs) to ensure time efficiency and quality resolution of technical issues.',
      },
    ],
  },
  {
    role: {
      id: 'Peserta Kerja Praktik — Analisis K3 Bidang HVAC',
      en: 'Practical Work Participant — HVAC Occupational Health & Safety (K3) Analysis',
    },
    org: 'RSPAU Dr. S. Hardjolukito',
    location: 'Yogyakarta',
    period: { id: 'Mei 2025', en: 'May 2025' },
    points: [
      {
        id: 'Melakukan observasi langsung dan menyusun Job Safety Analysis (JSA) pada aktivitas pemeliharaan sistem tata udara (HVAC).',
        en: 'Conducted direct observations and prepared a Job Safety Analysis (JSA) for HVAC system maintenance activities.',
      },
      {
        id: 'Mengidentifikasi potensi bahaya kerja dan memberikan rekomendasi perbaikan sistem K3 guna meminimalisir risiko kecelakaan kerja bagi teknisi pemeliharaan.',
        en: 'Identified potential workplace hazards and provided K3 (safety) system improvement recommendations to minimize the risk of work accidents for maintenance technicians.',
      },
    ],
  },
  {
    role: { id: 'Asisten Praktikum', en: 'Practicum Assistant' },
    org: 'Laboratorium Teknik Industri, Universitas Proklamasi Yogyakarta',
    location: 'Yogyakarta',
    period: { id: '2025', en: '2025' },
    points: [
      {
        id: 'Perencanaan dan Pengendalian Produksi (PPIC).',
        en: 'Production Planning and Inventory Control (PPIC).',
      },
      {
        id: 'Perancangan Tata Letak Fasilitas (PTLF).',
        en: 'Facility Layout Design (PTLF).',
      },
    ],
  },
]

export const skillGroups = [
  {
    title: { id: 'Hard Skills', en: 'Hard Skills' },
    items: [
      { id: 'PPIC (Perencanaan & Pengendalian Produksi)', en: 'PPIC (Production Planning & Inventory Control)' },
      { id: 'Perancangan Tata Letak Fasilitas (PTLF)', en: 'Facility Layout Design (PTLF)' },
      { id: 'Logistik & Inventory Management', en: 'Logistics & Inventory Management' },
      { id: 'Analisis K3 (HSE)', en: 'K3/HSE (Occupational Health & Safety) Analysis' },
      { id: 'ERP Odoo — Modul Sales, Purchase, Manufacturing', en: 'ERP Odoo — Sales, Purchase, Manufacturing Modules' },
      { id: 'Simulasi DEM (EDEM)', en: 'DEM Simulation (EDEM)' },
    ],
  },
  {
    title: { id: 'Soft Skills', en: 'Soft Skills' },
    items: [
      { id: 'Kepemimpinan', en: 'Leadership' },
      { id: 'Problem Solving', en: 'Problem Solving' },
      { id: 'Negosiasi', en: 'Negotiation' },
      { id: 'Koordinasi Lintas Departemen', en: 'Cross-Departmental Coordination' },
      { id: 'Komunikasi Efektif', en: 'Effective Communication' },
    ],
  },
]

export const certifications = [
  {
    name: {
      id: 'Supply Chain Management (Manajemen Produksi)',
      en: 'Supply Chain Management (Production Management)',
    },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: null,
  },
]

export const projects = [
  {
    name: {
      id: 'Poster Penelitian Dosen Pemula 2025: Kajian Pengaruh Kandungan Lempung terhadap Permeabilitas dan Porositas Batuan Reservoir',
      en: 'Poster Penelitian Dosen Pemula 2025: Study of the Effect of Clay Content on the Permeability and Porosity of Reservoir Rock',
    },
    type: { id: 'Hak Cipta Penelitian Dosen Pemula (2025)', en: 'Beginner Lecturer Research Copyright (2025)' },
    description: {
      id: 'Menjadi bagian dari tim riset dan berpartisipasi dalam pendaftaran hak cipta untuk karya penelitian — studi eksperimental di laboratorium.',
      en: 'Part of the research team and participated in the copyright registration process for the research work — an experimental laboratory study.',
    },
    featured: true,
  },
  {
    name: {
      id: 'Inovasi Pengolahan Limbah 3D Print Melalui Teknologi Shredder dan Extruder Untuk Produk Bernilai Tambah',
      en: '3D Print Waste Processing Innovation Using Shredder and Extruder Technology for Value-Added Products',
    },
    type: {
      id: 'Lomba Desain Alat Nasional — Universitas Andalas, Sumatera Barat (2024)',
      en: 'National Tool Design Competition — Universitas Andalas, West Sumatra (2024)',
    },
    description: {
      id: 'Merancang desain alat untuk kompetisi nasional, mengubah limbah 3D print menjadi produk bernilai tambah melalui teknologi shredder dan extruder.',
      en: 'Designed a tool for a national competition that converts 3D-print waste into value-added products using shredder and extruder technology.',
    },
    featured: false,
  },
]
