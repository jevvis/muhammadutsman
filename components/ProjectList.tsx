'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-emerald-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-rose-600']

type Bi = { id: string; en: string }

const projects: { number: string; title: Bi; description: Bi; framework: Bi; techStack: string[] }[] = [
  {
    number: '01',
    title: { id: "Pengajaran Fiqih Berbahasa Arab", en: "Fiqh Teaching in Arabic" },
    description: {
      id: "Mengajar Fiqih dalam bahasa Arab di 11 kelas tingkat VII dan VIII; keterlibatan siswa naik 20% dan 10%.",
      en: "Taught Fiqh in Arabic in 11 classes of grades VII and VIII; student engagement rose by 20% and 10%.",
    },
    framework: { id: "PENGALAMAN — THURSINA INTERNATIONAL ISLAMIC BOARDING SCHOOL", en: "EXPERIENCE — THURSINA INTERNATIONAL ISLAMIC BOARDING SCHOOL" },
    techStack: ['Fiqih', 'Bahasa Arab', '11 Kelas'],
  },
  {
    number: '02',
    title: { id: "CO Acara Muktamar Nasional", en: "Event Coordinator of a National Muktamar" },
    description: {
      id: "Mengelola kegiatan 3 hari dengan sekitar 300 peserta dari Indonesia dan Malaysia serta mendampingi tamu luar negeri dalam bahasa Arab.",
      en: "Managed a 3-day event with about 300 participants from Indonesia and Malaysia and assisted international guests in Arabic.",
    },
    framework: { id: "PENGALAMAN — MUKTAMAR ITTIHADU TALABATI AL-LUGHAH ARABIYAH KE-12", en: "EXPERIENCE — 12TH MUKTAMAR OF THE ARABIC LANGUAGE STUDENTS’ UNION" },
    techStack: ['CO Acara', 'Bahasa Arab', 'Pendampingan Tamu'],
  },
  {
    number: '03',
    title: { id: "PIC Panggung untuk 5.000 Mahasiswa Baru", en: "Stage PIC for 5,000 New Students" },
    description: {
      id: "Mengelola operasional panggung, perlengkapan, dan ketepatan waktu pada kegiatan 3 hari.",
      en: "Managed stage operations, equipment, and timing at a 3-day event.",
    },
    framework: { id: "PENGALAMAN — PENGENALAN BUDAYA AKADEMIK DAN KEMAHASISWAAN", en: "EXPERIENCE — ACADEMIC CULTURE AND STUDENT LIFE ORIENTATION" },
    techStack: ['PIC Panggung', 'Operasional', 'Waktu'],
  },
  {
    number: '04',
    title: { id: "Guru Bahasa Arab Kelas V", en: "Arabic Teacher for Grade V" },
    description: {
      id: "Mengajar bahasa Arab di 2 kelas tingkat V dan meningkatkan nilai rata-rata siswa dari 40 menjadi 65.",
      en: "Taught Arabic in 2 grade V classes and raised the average score from 40 to 65.",
    },
    framework: { id: "PENGALAMAN — MIN KOTA BLITAR", en: "EXPERIENCE — MIN KOTA BLITAR" },
    techStack: ['Bahasa Arab', 'Mengajar', 'Nilai 40 → 65'],
  },
  {
    number: '05',
    title: { id: "Pelayanan Makanan untuk 400 Tamu", en: "Food Service for 400 Guests" },
    description: {
      id: "Memantau stok dan mengisi ulang makanan tepat waktu tanpa keluhan pada bagian yang ditangani.",
      en: "Monitored stock and refilled food on time with no complaints in the section handled.",
    },
    framework: { id: "PENGALAMAN — WEDDING ORGANIZER DUTA CATERING", en: "EXPERIENCE — WEDDING ORGANIZER DUTA CATERING" },
    techStack: ['Pelayanan', 'Stok', 'Respons Cepat'],
  },
  {
    number: '06',
    title: { id: "Pemandu Tamu Kedutaan Arab Saudi", en: "Guide for a Saudi Embassy Guest" },
    description: {
      id: "Mendampingi tamu dari Kedutaan Arab Saudi untuk Indonesia dan menjelaskan pesantren dalam bahasa Arab.",
      en: "Assisted a guest from the Embassy of Saudi Arabia to Indonesia and explained the pesantren in Arabic.",
    },
    framework: { id: "PENGALAMAN — MA PLUS ABU HURAIRAH MATARAM", en: "EXPERIENCE — MA PLUS ABU HURAIRAH MATARAM" },
    techStack: ['Tour Guide', 'Bahasa Arab', 'Hospitality'],
  },
  {
    number: '07',
    title: { id: "Buku Ajar Bahasa Arab Kelas 10 MA", en: "Arabic Textbook for Grade 10 of MA" },
    description: {
      id: "Menyusun buku ajar 140 halaman untuk kelas 10 Madrasah Aliyah selama 3 bulan.",
      en: "Wrote a 140-page textbook for grade 10 of Madrasah Aliyah over 3 months.",
    },
    framework: { id: "PROYEK UNIVERSITAS — MAR 2026 — JUN 2026", en: "UNIVERSITY PROJECT — MAR 2026 — JUN 2026" },
    techStack: ['Buku Ajar', 'Kurikulum', '140 Halaman'],
  },
  {
    number: '08',
    title: { id: "Terjemahan Buku Linguistik Pendidikan", en: "Translation of an Educational Linguistics Book" },
    description: {
      id: "Menerjemahkan buku akademik sekitar 230 halaman ke bahasa Indonesia dan mengajukannya ke penerbit.",
      en: "Translated an academic book of about 230 pages into Indonesian and submitted it to a publisher.",
    },
    framework: { id: "PROYEK UNIVERSITAS — SEP 2025 — DES 2025", en: "UNIVERSITY PROJECT — SEP 2025 — DEC 2025" },
    techStack: ['Terjemahan', 'Arab–Indonesia', '230 Halaman'],
  },
  {
    number: '09',
    title: { id: "Artikel Kedudukan Ibu dan Istri dalam Hadis", en: "Article on the Position of Mothers and Wives in Hadith" },
    description: {
      id: "Analisis hak prioritas ibu dan istri dalam perspektif hadis; tercantum di Google Scholar.",
      en: "An analysis of the priority rights of mothers and wives from a hadith perspective; listed on Google Scholar.",
    },
    framework: { id: "PUBLIKASI ILMIAH", en: "SCIENTIFIC PUBLICATION" },
    techStack: ['Publikasi', 'Hadis', 'Google Scholar'],
  },
  {
    number: '10',
    title: { id: "Komunikasi Bahasa Arab dengan Penutur Asli", en: "Arabic Communication with Native Speakers" },
    description: {
      id: "Berdiskusi dalam bahasa Arab dengan dosen dan mahasiswa asal Arab Saudi, Mesir, dan Sudan; belajar 100% berbahasa Arab bersama 3 dosen Timur Tengah.",
      en: "Discussed in Arabic with lecturers and students from Saudi Arabia, Egypt, and Sudan; studied 100% in Arabic with 3 Middle Eastern lecturers.",
    },
    framework: { id: "AKTIVITAS — KOMUNIKASI LINTAS BUDAYA", en: "ACTIVITY — CROSS-CULTURAL COMMUNICATION" },
    techStack: ['Bahasa Arab', 'Penutur Asli', 'Lintas Budaya'],
  },
  {
    number: '11',
    title: { id: "Ketua Divisi Intelektual Forskimal", en: "Head of Intellectual Division, Forskimal" },
    description: {
      id: "Merancang program diskusi dan penulisan artikel; seluruh program dihadiri lebih dari 15 anggota dengan keberhasilan 90%.",
      en: "Designed discussion and article-writing programs; all programs drew more than 15 members with 90% success.",
    },
    framework: { id: "AKTIVITAS — FORUM STUDI DAN KOMUNIKASI MAHASISWA LOMBOK DI UIN MALANG", en: "ACTIVITY — LOMBOK STUDENTS’ STUDY AND COMMUNICATION FORUM AT UIN MALANG" },
    techStack: ['Ketua Divisi', 'Diskusi', 'Artikel'],
  },
  {
    number: '12',
    title: { id: "CO & SC Gebyar Khazanah Araby XI & XII", en: "Event Coordinator & Steering Committee, Gaza XI & XII" },
    description: {
      id: "Menyusun konsep dan pelaksanaan kompetisi bahasa Arab nasional tingkat SMA; peserta naik dari ±350 (2022) menjadi lebih dari 500 (2023).",
      en: "Designed and ran a national high-school Arabic competition; participants grew from about 350 (2022) to more than 500 (2023).",
    },
    framework: { id: "AKTIVITAS — GEBYAR KHAZANAH ARABY", en: "ACTIVITY — GEBYAR KHAZANAH ARABY" },
    techStack: ['CO Acara', 'SC Acara', 'Kompetisi'],
  },
  {
    number: '13',
    title: { id: "Ketua Pelaksana Pelantikan Organisasi Daerah Lombok", en: "Committee Chair, Lombok Regional Organization Inauguration" },
    description: {
      id: "Memimpin acara dari pra acara hingga evaluasi dan melibatkan 15 organisasi daerah lain.",
      en: "Led the event from pre-event to evaluation and involved 15 other regional organizations.",
    },
    framework: { id: "AKTIVITAS — ORGANISASI DAERAH LOMBOK DI MALANG", en: "ACTIVITY — LOMBOK REGIONAL ORGANIZATION IN MALANG" },
    techStack: ['Ketua Pelaksana', 'Kepemimpinan', 'Evaluasi'],
  },
  {
    number: '14',
    title: { id: "Divisi PSDM & Juara 1 Futsal Antarjurusan", en: "HRD Division & Inter-Department Futsal Champion" },
    description: {
      id: "Memfasilitasi minat dan bakat mahasiswa, meraih juara 1 futsal, dan membuat bendera jurusan sepanjang 10 meter.",
      en: "Facilitated students’ interests and talents, won 1st place in futsal, and made a 10-meter department flag.",
    },
    framework: { id: "AKTIVITAS — HIMPUNAN MAHASISWA JURUSAN PENDIDIKAN BAHASA ARAB", en: "ACTIVITY — ARABIC LANGUAGE EDUCATION STUDENT ASSOCIATION" },
    techStack: ['PSDM', 'Futsal', 'Juara 1'],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const copy = {
    label: { id: 'PORTOFOLIO PENDIDIK BAHASA ARAB', en: 'ARABIC EDUCATOR PORTFOLIO' },
    title: { id: 'Pengalaman, Karya & Aktivitas', en: 'Experience, Works & Activities' },
    sub: {
      id: 'Rekam jejak mengajar, kepanitiaan, karya, dan aktivitas organisasi di bidang pendidikan bahasa Arab.',
      en: 'A record of teaching, committees, works, and organizational activities in Arabic language education.',
    },
  }

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{copy.label[lang]}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{copy.title[lang]}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">{copy.sub[lang]}</p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description[lang]}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework[lang]}
                </p>
                {/* Tag badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${palette[(Number(project.number) + i) % palette.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
