export type Kehadiran = 'Hadir' | 'Tidak Hadir' | 'Ragu-ragu'

export interface GuestbookEntry {
  timestamp: string
  nama: string
  kehadiran: string
  ucapan: string
}

export interface GuestbookInput {
  nama: string
  kehadiran: Kehadiran
  ucapan: string
  ip?: string
  userAgent?: string
  device?: string
}

export interface EventDetail {
  key: string
  label: string
  date: string
  timeStart: string
  timeEnd: string
  venue: string
  address: string
  mapsUrl: string
  mapsEmbed: string
}
