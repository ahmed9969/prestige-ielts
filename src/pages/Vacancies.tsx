import Navbar from '../components/Navbar'
import { useLang, type Lang } from '../contexts/LanguageContext'

type MaybeLocalized = string | Record<Lang, string>

const VACANCIES = [
  {
    title: 'IELTS Teacher' as MaybeLocalized,
    partTime: false,
    type: { en: 'Full Time', uz: "To'liq kun", ru: 'Полный день' } as Record<Lang, string>,
    desc: { en: 'Teaching IELTS General and Academic courses. Minimum 2 years experience required.', uz: "IELTS General va Academic kurslarini o'qitish. Kamida 2 yillik tajriba talab etiladi.", ru: 'Преподавание курсов IELTS General и Academic. Требуется минимум 2 года опыта.' } as Record<Lang, string>,
    reqs: ['IELTS 8.0+', { en: 'Teaching experience', uz: "O'qitish tajribasi", ru: 'Опыт преподавания' }, { en: 'Cambridge certificate', uz: 'Cambridge sertifikati', ru: 'Сертификат Cambridge' }] as MaybeLocalized[],
  },
  {
    title: 'Speaking Coach' as MaybeLocalized,
    partTime: false,
    type: { en: 'Full Time', uz: "To'liq kun", ru: 'Полный день' } as Record<Lang, string>,
    desc: { en: "Develop students' speaking skills. Native speaker or C2 level required.", uz: "Talabalarning og'zaki nutqini rivojlantirish. Native speaker yoki C2 darajasi talab etiladi.", ru: 'Развитие разговорных навыков студентов. Требуется носитель языка или уровень C2.' } as Record<Lang, string>,
    reqs: [{ en: 'Native speaker or C2', uz: 'Native speaker yoki C2', ru: 'Носитель языка или C2' }, 'IELTS Speaking 8.5+', { en: 'Communication skills', uz: "Kommunikatsiya ko'nikmalari", ru: 'Коммуникативные навыки' }] as MaybeLocalized[],
  },
  {
    title: { en: 'Admin Staff', uz: 'Administrator', ru: 'Администратор' } as Record<Lang, string>,
    partTime: false,
    type: { en: 'Full Time', uz: "To'liq kun", ru: 'Полный день' } as Record<Lang, string>,
    desc: { en: 'Managing student registrations, tracking payments and general administrative duties.', uz: "Talabalar ro'yxatini boshqarish, to'lovlarni kuzatish va umumiy ma'muriy vazifalar.", ru: 'Управление списками студентов, отслеживание платежей и общие административные задачи.' } as Record<Lang, string>,
    reqs: [{ en: 'Computer literacy', uz: "Kompyuter savodxonligi", ru: 'Компьютерная грамотность' }, { en: 'Uzbek and Russian language', uz: "O'zbek va rus tili", ru: 'Узбекский и русский язык' }, { en: 'Organisational skills', uz: "Tashkilotchilik ko'nikmalari", ru: 'Организаторские навыки' }] as MaybeLocalized[],
  },
  {
    title: { en: 'Private Tutor', uz: 'Repetitor', ru: 'Репетитор' } as Record<Lang, string>,
    partTime: true,
    type: { en: 'Part Time', uz: 'Yarim kun', ru: 'Частичная занятость' } as Record<Lang, string>,
    desc: { en: 'Conducting individual lessons with students. Flexible working schedule.', uz: "Alohida o'quvchilar bilan individual darslar o'tkazish. Moslashuvchan ish jadvali.", ru: 'Проведение индивидуальных занятий со студентами. Гибкий график работы.' } as Record<Lang, string>,
    reqs: ['IELTS 7.5+', { en: 'Passion for teaching', uz: "O'qitish ishtiyoqi", ru: 'Желание обучать' }, { en: 'Flexibility', uz: "Moslashuvchanlik", ru: 'Гибкость' }] as MaybeLocalized[],
  },
]

export default function Vacancies() {
  const { t, lang } = useLang()

  function tr(val: MaybeLocalized): string {
    if (typeof val === 'string') return val
    return val[lang]
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <section className="py-32 px-12 text-center bg-ink text-cream">
        <h1 className="text-5xl font-serif font-bold tracking-wide mb-5">
          {t('Vacancies', 'Vakansiyalar', 'Вакансии')}
        </h1>
        <p className="text-xl text-[#aaa]">
          {t('Join our team at Prestige IELTS Academy', "Bizning jamoamizga qo'shiling", 'Присоединяйтесь к нашей команде')}
        </p>
      </section>

      <section className="py-20 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {VACANCIES.map((v, i) => (
            <div key={i} className="bg-white p-9 rounded shadow-sm border border-ink/10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{tr(v.title)}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white flex-shrink-0 ml-3 ${v.partTime ? 'bg-[#8a6200]' : 'bg-[#2a6e2a]'}`}>
                  {tr(v.type)}
                </span>
              </div>
              <p className="text-[#555] mb-5 leading-relaxed">{tr(v.desc)}</p>
              <div className="space-y-1.5 mb-6">
                {v.reqs.map((req, j) => (
                  <p key={j} className="text-sm">✅ {tr(req)}</p>
                ))}
              </div>
              <a
                href="https://t.me/prestige_ieltsacademy_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-ink text-cream font-bold px-6 py-3 tracking-wider hover:bg-[#333] transition-colors text-sm no-underline"
              >
                {t('Apply Now', 'Ariza yuborish', 'Подать заявку')}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-ink text-cream text-center py-6">
        <p className="text-sm text-[#666]">© 2024 Prestige IELTS Academy</p>
      </footer>
    </div>
  )
}
