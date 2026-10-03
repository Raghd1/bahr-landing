import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { BahrScrollLogo } from './components/BahrScrollLogo'
import { Hero } from './components/Hero'
import { IntroSplash } from './components/IntroSplash'
import { AboutCredibility } from './components/AboutCredibility'
import { ServicesExpertise } from './components/ServicesExpertise'
import { FeaturedWork } from './components/FeaturedWork'
import { Perspectives } from './components/Perspectives'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [introReady, setIntroReady] = useState(() => {
    try {
      const alreadySeen = sessionStorage.getItem('bahr_intro_seen') === 'true'
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (alreadySeen || prefersReducedMotion) {
        return true
      }
    } catch {}
    return false
  })

  const [showSplash, setShowSplash] = useState(() => !introReady)

  const handleStartHeroReveal = useCallback(() => {
    setIntroReady(true)
  }, [])

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      {showSplash && (
        <IntroSplash
          onStartHeroReveal={handleStartHeroReveal}
          onComplete={handleSplashComplete}
        />
      )}
      <Header />
      <BahrScrollLogo introReady={introReady} />
      <main id="main-content">
        <Hero introReady={introReady} />
        <AboutCredibility />
        <ServicesExpertise />
        <FeaturedWork />
        <Perspectives />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
