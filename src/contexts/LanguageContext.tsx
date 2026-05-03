import React, { createContext, useContext, useState } from 'react'

export type Lang = 'en' | 'uz' | 'ru'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (en: string, uz: string, ru: string) => string
}

const LanguageContext = createContext<LangCtx>({} as LangCtx)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    (localStorage.getItem('lang') as Lang) || 'en'
  )

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  function t(en: string, uz: string, ru: string) {
    if (lang === 'uz') return uz
    if (lang === 'ru') return ru
    return en
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
