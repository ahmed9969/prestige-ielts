import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useLang, type Lang } from '../contexts/LanguageContext'

const FLIP = { duration: 0.7, ease: [0.4, 0.2, 0.2, 1] as const }

interface Teacher {
  name: string
  role: string
  image: string
  email: string
  bio: Record<Lang, string>
}

const TEACHERS: Teacher[] = [
  {
    name: 'James Wilson',
    role: 'IELTS General & Academic',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    email: 'james@prestigeielts.com',
    bio: {
      en: 'With 10+ years of experience, James has helped 500+ students reach their target band scores. His systematic approach to both General and Academic modules is unmatched.',
      uz: "10 yildan ortiq tajribasi bilan Jeyms 500 dan ortiq talabaga maqsad ballariga erishishda yordam berdi. Uning General va Academic modullarga yondashuvi tengsizdir.",
      ru: 'За 10+ лет Джеймс помог более 500 студентам достичь целевого балла. Его системный подход к General и Academic модулям не имеет себе равных.',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Speaking & Writing',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: 'sarah@prestigeielts.com',
    bio: {
      en: 'Sarah is a Cambridge-certified teacher specialising in Speaking and Writing. Her innovative feedback techniques consistently help students improve by 1–2 bands.',
      uz: "Sara Kembrij sertifikatlangan o'qituvchi bo'lib, Speaking va Writing bo'yicha ixtisoslashgan. Uning innovatsion usullari talabalar ballini 1–2 ga oshiradi.",
      ru: 'Сара — сертифицированный преподаватель Cambridge по Speaking и Writing. Её методы стабильно улучшают результаты на 1–2 балла.',
    },
  },
  {
    name: 'Michael Brown',
    role: 'Listening & Reading',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    email: 'michael@prestigeielts.com',
    bio: {
      en: 'Michael achieved a perfect IELTS 9.0 and brings 8 years of teaching expertise. He developed specialist strategies for Listening and Reading that dramatically lift scores.',
      uz: "Maykl IELTS 9.0 ballga erishdi va 8 yillik o'qitish tajribasiga ega. U Listening va Reading bo'yicha maxsus strategiyalar ishlab chiqdi.",
      ru: 'Майкл набрал идеальный балл IELTS 9.0 и имеет 8 лет опыта. Он разработал уникальные стратегии по Listening и Reading.',
    },
  },
  {
    name: 'Emily Davis',
    role: 'Mock Tests & Academic',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    email: 'emily@prestigeielts.com',
    bio: {
      en: 'Emily has prepared 300+ students for high IELTS scores. Her detailed feedback helps students pinpoint and fix weak areas fast.',
      uz: "Emili 300 dan ortiq talabani yuqori IELTS ballariga tayyorladi. Uning batafsil fikr-mulohazasi zaif tomonlarni tezda aniqlashga yordam beradi.",
      ru: 'Эмили подготовила 300+ студентов к высоким баллам. Её детальная обратная связь помогает быстро выявить слабые стороны.',
    },
  },
  {
    name: 'Aisha Karimova',
    role: 'Grammar & Vocabulary',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    email: 'aisha@prestigeielts.com',
    bio: {
      en: 'Aisha specialises in grammar accuracy and vocabulary expansion. Her structured lessons have helped hundreds of students master the language foundations needed for band 7+.',
      uz: "Aysha grammatik aniqlik va lug'at boyitishga ixtisoslashgan. Uning tizimli darslari yuzlab talabalarga 7+ ball uchun zarur til asoslarini egallashga yordam berdi.",
      ru: 'Айша специализируется на грамматике и расширении словарного запаса. Её структурированные уроки помогли сотням студентов достичь уровня 7+.',
    },
  },
  {
    name: 'David Park',
    role: 'Academic Writing',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
    email: 'david@prestigeielts.com',
    bio: {
      en: 'David holds a Masters in Applied Linguistics and focuses exclusively on Academic Writing. His students consistently score 7.0+ in Task 1 and Task 2.',
      uz: "Devid Amaliy Tilshunoslik magistri bo'lib, faqat Academic Writing bo'yicha ixtisoslashgan. Uning talabalari Task 1 va Task 2 da doimiy ravishda 7.0+ ball oladi.",
      ru: 'Дэвид имеет степень магистра прикладной лингвистики и специализируется на Academic Writing. Его студенты стабильно набирают 7.0+ по Task 1 и Task 2.',
    },
  },
  {
    name: 'Natasha Ivanova',
    role: 'Intensive Preparation',
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    email: 'natasha@prestigeielts.com',
    bio: {
      en: 'Natasha runs our intensive crash-course programme for students with tight exam deadlines. She has a proven track record of boosting scores by 1.5 bands in 4 weeks.',
      uz: "Natasha imtihon muddati yaqin bo'lgan talabalar uchun intensiv kursimizni olib boradi. U 4 hafta ichida ballni 1.5 ga oshirishning isbotlangan tajribasiga ega.",
      ru: 'Наташа ведёт нашу интенсивную программу для студентов с жёсткими сроками. Она имеет проверенный опыт повышения баллов на 1,5 за 4 недели.',
    },
  },
  {
    name: 'Omar Hassan',
    role: 'IELTS Strategy & Timing',
    image: 'https://randomuser.me/api/portraits/men/61.jpg',
    email: 'omar@prestigeielts.com',
    bio: {
      en: 'Omar is an exam strategy expert who teaches students how to manage time and maximise scores across all four modules. His tips and tricks have become legendary among students.',
      uz: "Omar barcha to'rt modulda vaqtni boshqarish va ballni maksimallashtirish bo'yicha imtihon strategiyasi mutaxassisi. Uning maslahat va usullari talabalar orasida mashhur bo'lib ketdi.",
      ru: 'Омар — эксперт по стратегии экзамена, обучающий управлению временем во всех четырёх модулях. Его советы стали легендарными среди студентов.',
    },
  },
]

function FlipCard({ teacher }: { teacher: Teacher }) {
  const [flipped, setFlipped] = useState(false)
  const { lang } = useLang()

  return (
    <div
      className="h-[500px] w-[320px] flex-shrink-0"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col bg-ink"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          animate={{ rotateY: flipped ? -180 : 0 }}
          transition={FLIP}
          initial={false}
        >
          <div className="h-[60%] overflow-hidden">
            <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
          </div>
          <div className="h-[40%] px-6 py-5 flex flex-col justify-center text-left">
            <h3 className="text-2xl font-bold mb-1.5 text-cream">{teacher.name}</h3>
            <p className="text-[15px] text-gold italic mb-1">{teacher.role}</p>
            <p className="text-[14px] text-[#888]">
              {lang === 'uz' ? "O'qituvchi" : lang === 'ru' ? 'Преподаватель' : 'Teacher'}
            </p>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col justify-between p-7 text-left"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
          }}
          animate={{ rotateY: flipped ? 0 : 180 }}
          transition={FLIP}
          initial={false}
        >
          <div>
            <h3 className="text-2xl font-bold mb-1.5 text-cream">{teacher.name}</h3>
            <p className="text-[14px] text-gold italic mb-4">{teacher.role}</p>
            <p className="text-[15px] leading-relaxed text-[#ccc]">{teacher.bio[lang]}</p>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10">
            <a
              href={`mailto:${teacher.email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-[14px] text-cream opacity-80 hover:opacity-100 transition-opacity no-underline"
            >
              <Mail size={15} />
              {teacher.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Staff() {
  const { t } = useLang()

  return (
    <section id="staff" className="py-20 text-center bg-cream-dark overflow-hidden">
      <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-3 px-12">
        {t('Our Teachers', "Bizning o'qituvchilar", 'Наши преподаватели')}
      </h2>
      <p className="text-lg text-[#555] mb-12 px-12">
        {t(
          'Our team of specialists dedicated to helping you achieve top scores',
          "Yuqori natijalarga erishishga yordam beradigan mutaxassislar jamoamiz",
          'Наша команда специалистов, помогающая достичь высоких результатов'
        )}
      </p>

      <div className="staff-scroll-track">
        {[...TEACHERS, ...TEACHERS].map((teacher, i) => (
          <FlipCard key={`${teacher.name}-${i}`} teacher={teacher} />
        ))}
      </div>
    </section>
  )
}
