import { useState } from 'react'
import Navbar from '../components/Navbar'
import Staff from '../components/Staff'
import { useLang } from '../contexts/LanguageContext'

const RESULTS = [
  { name: 'Malika Yusupova', overall: 7.5, image: 'https://randomuser.me/api/portraits/women/21.jpg', scores: { Listening: 8.0, Reading: 7.5, Writing: 7.0, Speaking: 7.5 } },
  { name: 'Bobur Rahimov', overall: 8.0, image: 'https://randomuser.me/api/portraits/men/22.jpg', scores: { Listening: 8.5, Reading: 8.0, Writing: 7.5, Speaking: 8.0 } },
  { name: 'Nilufar Hasanova', overall: 7.0, image: 'https://randomuser.me/api/portraits/women/23.jpg', scores: { Listening: 7.5, Reading: 7.0, Writing: 6.5, Speaking: 7.0 } },
  { name: 'Jasur Toshmatov', overall: 8.5, image: 'https://randomuser.me/api/portraits/men/24.jpg', scores: { Listening: 9.0, Reading: 8.5, Writing: 8.0, Speaking: 8.5 } },
]

const TESTIMONIALS = [
  { name: 'Dilnoza Umarova', image: 'https://randomuser.me/api/portraits/women/11.jpg', text: '"I got 7.5 in my IELTS exam! The teachers at Prestige are absolutely amazing. They helped me improve my writing from 6.0 to 7.5 in just 3 months!"' },
  { name: 'Akbar Nazarov', image: 'https://randomuser.me/api/portraits/men/12.jpg', text: '"Best IELTS academy in Tashkent! The mock tests really prepared me for the real exam. I scored 8.0 overall and got into my dream university in the UK!"' },
  { name: 'Kamola Mirzayeva', image: 'https://randomuser.me/api/portraits/women/13.jpg', text: '"Sarah\'s speaking classes changed everything for me. I was so nervous before but now I feel confident. Got 7.0 in speaking which I never thought was possible!"' },
  { name: 'Sardor Yuldashev', image: 'https://randomuser.me/api/portraits/men/14.jpg', text: '"I studied at 3 different academies before Prestige. This is by far the best. The teachers actually care about your progress and give personal attention."' },
  { name: 'Zulfiya Rashidova', image: 'https://randomuser.me/api/portraits/women/15.jpg', text: '"I came with a 5.5 band score and left with 7.0 after 2 months. The study materials and practice tests are top quality. Highly recommend!"' },
  { name: 'Timur Kalandarov', image: 'https://randomuser.me/api/portraits/men/16.jpg', text: '"James Wilson is an incredible teacher. His tips for the reading section helped me jump from 6.5 to 8.5. Worth every penny!"' },
]

export default function Home() {
  const { t } = useLang()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { num: '2012', label: t('Year Founded', 'Tashkil etilgan yil', 'Год основания') },
    { num: '500+', label: t('Successful Students', 'Muvaffaqiyatli talabalar', 'Успешных студентов') },
    { num: '4', label: t('Qualified Teachers', "Malakali o'qituvchilar", 'Квалифицированных преподавателей') },
    { num: '8.5', label: t('Highest Band Score', 'Eng yuqori ball', 'Высший балл') },
  ]

  const courses = [
    { title: 'IELTS General', desc: t('Preparation for General IELTS exam', 'Umumiy IELTS imtihoniga tayyorgarlik', 'Подготовка к общему IELTS') },
    { title: 'IELTS Academic', desc: t('Preparation for Academic IELTS exam', 'Akademik IELTS imtihoniga tayyorgarlik', 'Подготовка к академическому IELTS') },
    { title: t('Speaking Classes', "Og'zaki nutq", 'Разговорный'), desc: t('Improve your English speaking skills', "Ingliz tilida gaplashishni rivojlantirish", 'Развитие разговорного английского') },
    { title: 'Mock Tests', desc: t('Practice under real exam conditions', "Haqiqiy imtihon sharoitida mashq", 'Практика в условиях реального экзамена') },
  ]

  const faqs = [
    {
      q: t('How long does the IELTS course take?', 'IELTS kursi qancha vaqt davom etadi?', 'Сколько длится курс IELTS?'),
      a: t("The course usually takes 2-3 months, depending on the student's starting level and target score.", "Kurs odatda 2-3 oy davom etadi. Bu talabaning boshlang'ich darajasiga qarab o'zgarishi mumkin.", 'Курс обычно длится 2-3 месяца в зависимости от начального уровня студента.'),
    },
    {
      q: t('When do classes start?', 'Darslar qachon boshlanadi?', 'Когда начинаются занятия?'),
      a: t('Classes start every month. Contact us to register for the next intake.', "Darslar har oy boshlanadi. Ro'yxatdan o'tish uchun biz bilan bog'laning.", 'Занятия начинаются каждый месяц. Свяжитесь с нами для записи.'),
    },
    {
      q: t('How much does the course cost?', 'Kurs narxi qancha?', 'Сколько стоит курс?'),
      a: t('Please contact us for pricing. Various payment plans are available.', "Kurs narxi haqida ma'lumot olish uchun biz bilan bog'laning. Turli to'lov rejalari mavjud.", 'Для получения информации о стоимости свяжитесь с нами. Доступны различные планы оплаты.'),
    },
    {
      q: t('Which IELTS type is right for me?', 'Qaysi IELTS turi menga mos?', 'Какой тип IELTS мне подходит?'),
      a: t('Academic is for studying abroad; General is for work or immigration.', "Chet elda o'qish uchun Academic, ish yoki immigratsiya uchun General tavsiya etiladi.", 'Academic — для учёбы за рубежом, General — для работы или иммиграции.'),
    },
    {
      q: t('What is a mock test?', 'Mock test nima?', 'Что такое пробный тест?'),
      a: t('A mock test is a practice exam under real IELTS conditions to prepare you for the actual exam.', "Mock test — haqiqiy IELTS sharoitida o'tkaziladigan mashq imtihoni.", 'Пробный тест — практический экзамен в условиях реального IELTS.'),
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section id="home" className="py-32 px-12 text-center bg-ink text-cream">
        <h1 className="text-5xl font-serif font-bold tracking-wide mb-5">
          {t('Welcome to Prestige IELTS Academy', "Prestige IELTS Academy'ga Xush Kelibsiz", 'Добро пожаловать в Prestige IELTS Academy')}
        </h1>
        <p className="text-xl text-[#aaa] mb-10">
          {t('Preparing students for IELTS since 2012', '2012 yildan buyon IELTS tayyorgarligi', 'Подготовка к IELTS с 2012 года')}
        </p>
        <a href="#contact" className="inline-block bg-cream text-ink font-bold px-8 py-4 text-lg tracking-wider hover:bg-cream-dark transition-colors">
          {t('Enroll Now', "Ro'yxatdan o'tish", 'Записаться')}
        </a>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-12 bg-cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map(({ num, label }) => (
            <div key={num} className="text-center py-8 border-2 border-ink">
              <div className="text-4xl font-bold font-serif mb-2">{num}</div>
              <p className="text-sm text-[#555] tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-12 text-center bg-ink text-cream">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-12">
          {t('Our Courses', 'Kurslarimiz', 'Наши курсы')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {courses.map(({ title, desc }) => (
            <div key={title} className="bg-[#2a2a2a] p-8 rounded text-left hover:bg-[#333] transition-colors">
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-[#aaa] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Director */}
      <section id="director" className="py-20 px-12 bg-cream">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-[1000px] mx-auto">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Director"
            className="w-48 h-48 rounded-full object-cover flex-shrink-0 border-4 border-ink"
          />
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wide mb-5">
              {t("Director's Message", "Direktor so'zi", 'Слово директора')}
            </h2>
            <p className="text-[#333] leading-relaxed mb-5 italic text-lg">
              {t(
                '"Since 2012, Prestige IELTS Academy has been dedicated to the success of our students. Our goal is to provide quality education to every student and prepare them to achieve high scores on the IELTS exam. We do not just teach language — we open doors to the future."',
                "\"Prestige IELTS Academy 2012 yildan beri o'quvchilarimizning muvaffaqiyati uchun fidokorona mehnat qilib kelmoqda. Bizning maqsadimiz — har bir talabaga sifatli ta'lim berish va ularni IELTS imtihonida yuqori ball olishga tayyorlash. Biz nafaqat til o'rgatamiz, balki kelajakka yo'l ochamiz.\"",
                '«Prestige IELTS Academy с 2012 года самоотверженно работает для достижения успеха наших студентов. Наша цель — дать каждому студенту качественное образование и подготовить их к высоким баллам. Мы не просто учим языку — мы открываем путь в будущее.»'
              )}
            </p>
            <p className="font-bold text-xl">Ahmad Karimov</p>
            <p className="text-[#555]">{t('Director', 'Direktor', 'Директор')}</p>
          </div>
        </div>
      </section>

      {/* Staff carousel */}
      <Staff />

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-ink text-cream overflow-hidden">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-12 text-center">
          {t('Testimonials', 'Fikrlar', 'Отзывы')}
        </h2>
        <div className="overflow-hidden">
          <div className="testimonials-track gap-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
              <div key={i} className="w-72 flex-shrink-0 bg-[#2a2a2a] rounded p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <h3 className="font-bold">{item.name}</h3>
                </div>
                <p className="text-[#bbb] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 px-12 text-center bg-cream">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-12">
          {t("Our Students' Results", 'Talabalarimizning natijalari', 'Результаты наших студентов')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {RESULTS.map((r) => (
            <div key={r.name} className="bg-ink text-cream p-6 rounded">
              <img src={r.image} alt={r.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{r.name}</h3>
              <div className="text-5xl font-bold text-gold mb-1">{r.overall}</div>
              <p className="text-[#aaa] text-sm mb-4">{t('Overall Band', 'Umumiy ball', 'Общий балл')}</p>
              <div className="space-y-1.5">
                {Object.entries(r.scores).map(([skill, score]) => (
                  <div key={skill} className="flex justify-between text-sm border-b border-white/10 pb-1">
                    <span className="text-[#aaa]">{skill}</span>
                    <span className="font-bold">{score}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-12 bg-cream-dark">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-12 text-center">
          {t('Frequently Asked Questions', "Ko'p so'raladigan savollar", 'Часто задаваемые вопросы')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink/20">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium hover:text-ink/70 transition-colors bg-transparent border-0 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="text-2xl font-light ml-4 flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-[#555] leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-20 px-12 text-center bg-cream">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-8">
          {t('Find Us', 'Bizning manzil', 'Наш адрес')}
        </h2>
        <div className="max-w-4xl mx-auto mb-5">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.206767%2C41.283091&z=17&pt=69.206767,41.283091,pm2rdm"
            width="100%"
            height="450"
            className="border-0"
            title="Location map"
          />
        </div>
        <p className="text-[#555]">
          📍 Chilanzar Ts-48, {t('near Mirzo Ulugbek metro', 'Mirzo Ulugbek metro yaqinida', 'рядом с метро Мирзо Улугбек')}
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-12 text-center bg-ink text-cream">
        <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-10">
          {t('Contact Us', "Biz bilan bog'laning", 'Свяжитесь с нами')}
        </h2>
        <div className="space-y-3 mb-10 text-lg">
          <p>📞 555159900 / (97) 7250199</p>
          <p>🕐 {t('Working Hours', 'Ish vaqti', 'Время работы')}: 9:00 - 20:00</p>
          <p>📍 Chilanzar Ts-48, {t('near Mirzo Ulugbek metro', 'Mirzo Ulugbek metro yaqinida', 'рядом с метро Мирзо Улугбек')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { href: 'https://www.instagram.com/prestige_ielts_academy/', label: '📸 Instagram' },
            { href: 'https://t.me/Prestige_IELTSAcademy', label: '💬 Telegram Chat' },
            { href: 'https://t.me/prestige_ieltsacademy_bot', label: '🤖 Telegram Bot' },
          ].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="bg-cream text-ink font-bold px-6 py-3 tracking-wider hover:bg-cream-dark transition-colors no-underline">
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-ink text-cream text-center py-6 border-t border-white/10">
        <p className="text-sm text-[#666]">© 2024 Prestige IELTS Academy</p>
      </footer>
    </div>
  )
}
