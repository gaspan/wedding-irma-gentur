const WORDS = [
  // Seksual / Vulgar
  'ngentot', 'entot', 'entotan', 'ngewe', 'ewe', 'ewean', 'ngocok',
  'kontol', 'konti', 'kontil', 'memek', 'meki', 'memex',
  'peler', 'pelir', 'pepek', 'jembut', 'itil', 'nonok',
  'titit', 'otong', 'batang', 'ngaceng', 'coli', 'colmek', 'crot',
  'sepong', 'sepongin', 'nyepong', 'kobel', 'kocokin', 'kenceng',
  'jilmek', 'buljem', 'wikwik', 'sange', 'konak', 'butuh',
  'puki', 'pukimak', 'pukima', 'pukimae', 'pukimay', 'kimak',
  'kanjut', 'tempik', 'tempek', 'nenen', 'susu', 'tetek', 'tete',
  'toket', 'cabe-cabean', 'bispak', 'perek', 'ayam kampus',
  'coli', 'colai', 'colay', 'conge', 'congean', 'congek', 'congor',
  'peju', 'pejuh', 'pecun', 'pecundang', 'kintil',
  'boking', 'jablay', 'germo', 'gigolo', 'mewek',
  'ngentd', 'entoti', 'ngewe', 'sontoloyo',

  // Binatang
  'anjing', 'anjir', 'anjay', 'anjrit', 'anjrot', 'anjg', 'anjink',
  'anying', 'asu', 'asyu', 'babi', 'monyet', 'bangsat',
  'kampret', 'celeng', 'kambing', 'kunyuk', 'jurig',
  'bangke', 'bangkai', 'serigala',

  // Bodoh / Hinaan
  'goblok', 'goblog', 'goblo', 'bego', 'begok', 'tolol', 'bodoh', 'bodo',
  'sinting', 'gila', 'gelo', 'sialan', 'sial', 'brengsek', 'brengsex',
  'bajingan', 'bedebah', 'bedegong', 'biadab', 'laknat', 'setan', 'iblis',
  'persetan', 'modar', 'moddar', 'mampus', 'mampuz', 'mampos',
  'dongo', 'dongok', 'bodat', 'boloho', 'bolot', 'buduk', 'budug',
  'ndeso', 'ndas', 'ndasmu', 'budek', 'bulug', 'koplak',
  'sontoloyo', 'noob',

  // Gender / Seksual
  'lonte', 'sundal', 'sundala', 'pelacur', 'pelakor', 'bencong', 'banci',
  'homo', 'maho', 'jalang', 'pecun', 'kampang', 'kampungan',
  'lacur',

  // Kata kasar umum
  'tai', 'tahi', 'taik', 'taek', 'taex', 'najis', 'hina', 'jelek', 'busuk',
  'bacot', 'bacol', 'bejat', 'buset', 'jancuk', 'jancok', 'jiancok',
  'cukimai', 'cukima', 'cukimay', 'cuki',
  'sampah', 'gebleg', 'geblek', 'gembrot',

  // Sumpah / Kutukan
  'keparat', 'haram', 'celaka', 'cilaka',

  // Singkatan / Slang
  'kntl', 'mmk', 'ngnt', 'bgsd', 'bgst', 'anj', 'bangsad',
  'pantek', 'patek', 'pathek', 'pante',

  // Regional / Slur
  'aseng', 'singkek', 'tiko', 'malingsia', 'malingsial', 'malon',
  'prindapan', 'banglasia', 'kristod', 'lagibatuk',
  'lebok', 'koplok', 'koreng', 'kurap', 'kureng',
  'bagong', 'beloon', 'bloon', "blo'on",
  'kalempong', 'terbelakang',
  'anak sundal', 'anak anjing',

  // Tambahan dari GitHub drizki/indonesian-badwords
  'ajig', 'alay', 'ancok', 'ancuk', 'babangus',
  'balegug', 'belegug', 'bengek', 'benges', 'bispak',
  'bocah', 'bokin', 'borjong', 'buntal', 'buriq', 'buta', 'buyan',
  'cacat', 'cepu', 'cibai', 'cibay', 'cibrit',
  'cino', 'cocot', 'cocote', 'cok', 'cokil',
  'cupu', 'curut', 'dancok', 'demit', 'dlogok',
  'epep', 'feeder',
  'genjik', 'heunceut', 'hencet', 'henceut',
  'item', 'jambret', 'jembret', 'jidor', 'jurig',
  'kabulamma', 'kacrut', 'kacung', 'kehed', 'kemplu',
  'kenthu', 'kentu', 'kentot', 'kirik', 'kopet',
  'kuntul', 'lapet', 'matane', 'memble', 'mukil',
  'panlok', 'pesek',
  'riyad', 'sepuh', 'silit', 'suhu',
  'tbl', 'tiembokne', 'tolir',
  'ublag', 'udik', 'wingkeng',

  // Tambahan dari penerjemah-id / Facebook filter
  'gablok', 'goblokk', 'bajinga', 'brengsexxx',
  'celsit', 'cheleng', 'chellenk', 'chelshit', 'chleng',
  'citikus', 'citykus',
  'davit monyet', 'fak', 'fakk', 'fergay',
  'g0bl0k', 'geblek', 'gigolo',
  'grogol', 'guk guk',
  'jayus', 'kancut', 'kolor',
  'loserfool', 'mandul', 'murahan',
  'ngaceng', 'ngenti', 'otak udang', 'otak melayu',
  'palaji', 'palkon', 'pantat', 'sakit jiwa',
  'sempak', 'sendal', 'sperma',
  'zakar', 'zoofilia', 'blowjob', 'bokep', 'bugil',
  'cock', 'coitus', 'drug', 'drunken',

  // Tambahan dari Wiktionary vulgarities
  'anu', 'biji', 'telur', 'mimi', 'bongol', 'bungul',
  'anjas', 'anjrot', 'cuk', 'cok',
]

const RE = new RegExp(`\\b(?:${WORDS.join('|')})\\b`, 'gi')

const LEET: Record<string, string> = {
  '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's',
  '7': 't', '$': 's', '@': 'a', '+': 't',
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[0-9$@+]/g, (c) => LEET[c] ?? c)
    .replace(/(.)\1+/g, '$1')
}

function censorWord(match: string): string {
  const keep = 2
  if (match.length <= keep) return '*'.repeat(match.length)
  return match.slice(0, keep) + '*'.repeat(match.length - keep)
}

export function censorText(text: string): string {
  return text.replace(/\b[\w@$+]+/g, (word) => {
    const n = normalize(word)
    if (RE.test(n)) {
      RE.lastIndex = 0
      return censorWord(word)
    }
    return word
  })
}
