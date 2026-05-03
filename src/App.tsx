import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Home from './pages/Home'
import Vacancies from './pages/Vacancies'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
