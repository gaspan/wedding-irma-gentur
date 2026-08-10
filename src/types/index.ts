export type Attendance = 'hadir' | 'tidak_hadir' | 'ragu'

export interface Wish {
  id: string
  name: string
  message: string
  attendance: Attendance | null
  guest_count: number
  created_at: string
}

export interface WishInput {
  name: string
  message: string
  attendance: Attendance
  guest_count: number
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
