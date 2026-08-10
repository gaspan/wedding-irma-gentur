import type { EventDetail } from '../types'

/**
 * PUSAT DATA UNDANGAN
 * Semua konten diedit dari file ini. Tidak perlu menyentuh komponen.
 * Baris bertanda [GANTI] wajib disesuaikan sebelum undangan disebar.
 */

export const couple = {
  bride: {
    name: 'Irma Sri Wahyuni',
    nickname: 'Irma',
    order: 'Putri pertama', // [GANTI]
    father: 'Bapak Purn Satim', // [GANTI]
    mother: 'Ibu Iin', // [GANTI]
    instagram: '', // opsional, contoh: 'irmasw'
  },
  groom: {
    name: 'Gentur Ariyadi Siddiq',
    nickname: 'Gentur',
    order: 'Putra pertama', // [GANTI]
    father: 'Bapak Drs. Idim Suryaman', // [GANTI]
    mother: 'Ibu Dra. Rosnaeni', // [GANTI]
    instagram: '',
  },
} as const

/** Tanggal acara utama untuk countdown & Save the Date (WIB / UTC+7) */
export const mainDate = new Date('2027-06-12T08:00:00+07:00') // [GANTI]

export const events: EventDetail[] = [
  {
    key: 'akad',
    label: 'Akad Nikah',
    date: 'Sabtu, 12 Juni 2027', // [GANTI]
    timeStart: '08:00',
    timeEnd: '10:00',
    venue: 'Hotel Mandiri', // [GANTI]
    address: 'Parunglesang, Jl. RE. Kosasih, Banjar, Kec. Banjar, Kota Banjar, Jawa Barat 46311', // [GANTI]
    mapsUrl: 'https://www.google.com/maps/place/Hotel+Mandiri/@-7.365367,108.5320057,17z/data=!4m9!3m8!1s0x2e6f6218f3dc675b:0x457718959b58d39d!5m2!4m1!1i2!8m2!3d-7.365101!4d108.532628!16s%2Fg%2F11bv30hnk3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D', // [GANTI]
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.146652686468!2d108.5300116152511!3d-7.365100994736029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f6218f3dc675b%3A0x457718959b58d39d!2sHotel%20Mandiri!5e0!3m2!1sid!2sid!4v1754923808675!5m2!1sid!2sid', // [GANTI]
  },
  {
    key: 'resepsi',
    label: 'Resepsi',
    date: 'Sabtu, 12 Juni 2027', // [GANTI]
    timeStart: '11:00',
    timeEnd: '14:00',
    venue: 'Hotel Mandiri', // [GANTI]
    address: 'Parunglesang, Jl. RE. Kosasih, Banjar, Kec. Banjar, Kota Banjar, Jawa Barat 46311', // [GANTI]
    mapsUrl: 'https://www.google.com/maps/place/Hotel+Mandiri/@-7.365367,108.5320057,17z/data=!4m9!3m8!1s0x2e6f6218f3dc675b:0x457718959b58d39d!5m2!4m1!1i2!8m2!3d-7.365101!4d108.532628!16s%2Fg%2F11bv30hnk3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D', // [GANTI]
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.146652686468!2d108.5300116152511!3d-7.365100994736029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f6218f3dc675b%3A0x457718959b58d39d!2sHotel%20Mandiri!5e0!3m2!1sid!2sid!4v1754923808675!5m2!1sid!2sid', // [GANTI]
  },
]

export const quran = {
  surah: 'QS. Ar-Rum: 21',
  arabic:
    'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
  translation:
    'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.',
}

/** Gift — QRIS statis. Taruh gambar QR di public/qris/ */
export const gift = {
  qrisImage: 'qris/qris-irma-gentur.png', // [GANTI] tanpa slash di depan
  qrisLabel: 'QRIS — Irma & Gentur',
  note: 'Kehadiran dan doa Anda adalah hadiah terindah bagi kami. Namun jika ingin memberi tanda kasih, silakan pindai QRIS berikut.',
}

export const music = {
  src: 'music/backsound.mp3', // [GANTI] tanpa slash di depan
  volume: 0.35,
}

export const meta = {
  title: 'Irma & Gentur — Undangan Pernikahan',
  description:
    'Dengan penuh rasa syukur, kami mengundang Anda untuk menghadiri hari bahagia pernikahan Irma Sri Wahyuni & Gentur Ariyadi Siddiq.',
  /** URL final setelah deploy, untuk preview link WhatsApp. [GANTI] */
  siteUrl: 'https://gaspan.github.io/wedding-irma-gentur/',
}

export const hashtag = '#IrmaGenturBersatu' // [GANTI] opsional

export const closingWords =
  'Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.'

/** Momen / Love Story — 4 tahap perjalanan. [GANTI] masing-masing */
export const story: { title: string; date: string; desc: string }[] = [
  {
    title: 'Perjumpaan', // [GANTI]
    date: '2023', // [GANTI]
    desc: 'Pertama kali kami berkenalan melalui perantaraan kerabat, dan secara perlahan mulai saling mengenal karakter satu sama lain.',
  },
  {
    title: 'Ta’aruf',
    date: '2024',
    desc: 'Dengan penuh adab dan ridha keluarga, kami menjalani proses ta’aruf untuk saling memahami tujuan dan komitmen.',
  },
  {
    title: 'Khitbah',
    date: '2025',
    desc: 'Keluarga mempelai pria datang melamar untuk meminang dengan penuh keikhlasan dan restu doa dari kedua belah pihak.',
  },
  {
    title: 'Pernikahan',
    date: 'Juni 2027',
    desc: 'Ijab kabul di hadapan para saksi dan keluarga, menyempurnakan pernikahan atas nama Allah dengan doa sakinah mawaddah warahmah.',
  },
]
