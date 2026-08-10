/** Ilustrasi dekoratif untuk galeri */
export const galleryArt = [
  {
    title: 'Ta’aruf',
    caption: 'Awal perkenalan yang dijaga',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <circle cx="70" cy="100" r="34" stroke="currentColor" strokeWidth="1.1" />
        <circle cx="130" cy="100" r="34" stroke="currentColor" strokeWidth="1.1" />
        <path d="M100 76v48" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Doa',
    caption: 'Dalam setiap sujud',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <path d="M64 140c0-30 16-52 36-52s36 22 36 52" stroke="currentColor" strokeWidth="1.1" />
        <path d="M100 88V54" stroke="currentColor" strokeWidth="1.1" />
        <path d="M100 54c-10-8-10-20 0-28 10 8 10 20 0 28z" stroke="currentColor" strokeWidth="1" />
        <path d="M50 152h100" stroke="currentColor" strokeWidth="1" />
        {[76, 100, 124].map((x) => (
          <circle key={x} cx={x} cy="168" r="3" fill="currentColor" opacity="0.5" />
        ))}
      </svg>
    ),
  },
  {
    title: 'Janji',
    caption: 'Mitsaqan ghalizha',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <circle cx="82" cy="104" r="30" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="118" cy="104" r="30" stroke="currentColor" strokeWidth="1.3" />
        <path d="M82 66l-7-12h14l-7 12z" stroke="currentColor" strokeWidth="1" />
        <path d="M40 150h120" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Keluarga',
    caption: 'Sakinah mawaddah warahmah',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <path d="M40 150V96l60-42 60 42v54" stroke="currentColor" strokeWidth="1.2" />
        <path d="M40 150h120" stroke="currentColor" strokeWidth="1" />
        <path d="M84 150v-32h32v32" stroke="currentColor" strokeWidth="1" />
        <path d="M100 54c-8-7-8-17 0-24 8 7 8 17 0 24z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Cahaya',
    caption: 'Menuju ridha-Nya',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.2" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6
          return (
            <path
              key={i}
              d={`M${100 + Math.cos(a) * 40} ${100 + Math.sin(a) * 40}L${100 + Math.cos(a) * 62} ${100 + Math.sin(a) * 62}`}
              stroke="currentColor"
              strokeWidth="0.9"
              opacity="0.6"
            />
          )
        })}
      </svg>
    ),
  },
  {
    title: 'Syukur',
    caption: 'Atas segala nikmat',
    Art: ({ className = '' }: { className?: string }) => (
      <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
        <path d="M100 158s-52-30-52-66c0-18 14-30 30-30 10 0 18 5 22 12 4-7 12-12 22-12 16 0 30 12 30 30 0 36-52 66-52 66z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M100 74v50" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      </svg>
    ),
  },
]
