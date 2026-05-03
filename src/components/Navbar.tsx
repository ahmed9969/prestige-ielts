import { Link, useLocation } from 'react-router-dom'
import { useLang, type Lang } from '../contexts/LanguageContext'

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const links = [
    { label: t('Home', 'Bosh sahifa', 'Главная'), href: isHome ? '#home' : '/#home' },
    { label: t('Courses', 'Kurslar', 'Курсы'), href: isHome ? '#courses' : '/#courses' },
    { label: t('Director', 'Direktor', 'Директор'), href: isHome ? '#director' : '/#director' },
    { label: t('Teachers', "O'qituvchilar", 'Преподаватели'), href: isHome ? '#staff' : '/#staff' },
    { label: t('Results', 'Natijalar', 'Результаты'), href: isHome ? '#results' : '/#results' },
    { label: t('Contact', 'Aloqa', 'Контакты'), href: isHome ? '#contact' : '/#contact' },
  ]

  const langOptions: { code: Lang; label: string }[] = [
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'uz', label: '🇺🇿 UZ' },
    { code: 'ru', label: '🇷🇺 RU' },
  ]

  return (
    <nav className="sticky top-0 z-50 flex justify-center items-center px-6 py-3.5 bg-cream">
      <div className="flex items-center w-full max-w-[1280px] bg-white rounded-3xl px-5 py-2.5 gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.10),0_1px_4px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex-shrink-0">
          <img src="/static/logo.png" alt="Prestige IELTS" className="h-[100px] object-contain" />
        </Link>

        <div className="flex items-center flex-1 justify-center gap-0.5 flex-wrap">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink text-[18px] font-medium px-3.5 py-2 rounded-full hover:bg-cream transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/vacancies"
            className="text-ink text-[18px] font-medium px-3.5 py-2 rounded-full hover:bg-cream transition-colors whitespace-nowrap"
          >
            {t('Vacancies', 'Vakansiyalar', 'Вакансии')}
          </Link>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex gap-0.5">
            {langOptions.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-[13px] font-semibold px-2.5 py-1.5 rounded-full transition-colors cursor-pointer border-0 ${
                  lang === code ? 'bg-ink text-cream' : 'text-[#555] hover:bg-[#f0ebe0]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="bg-ink text-cream text-[17px] font-semibold px-6 py-3 rounded-full hover:bg-[#333] transition-colors whitespace-nowrap no-underline"
          >
            {t('Enroll Now', "Ro'yxatdan o'tish", 'Записаться')}
          </a>
        </div>
      </div>
    </nav>
  )
}
