import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

interface ClientData {
  key: string
  name: string
  yearEn: string
  yearAr: string
}

const CLIENTS: ClientData[] = [
  { key: 'alageely', name: 'ALAGEELY', yearEn: '2025', yearAr: '٢٠٢٥' },
  { key: 'riyadhRetina', name: 'RIYADH RETINA', yearEn: '2025', yearAr: '٢٠٢٥' },
  { key: 'sycleague', name: 'SYCLEAGUE', yearEn: '2025', yearAr: '٢٠٢٥' },
  { key: 'qvs', name: 'QVS', yearEn: '2024', yearAr: '٢٠٢٤' },
  { key: 'parkinly', name: 'PARKINLY', yearEn: '2024', yearAr: '٢٠٢٤' },
  { key: 'secureSteps', name: 'SECURE STEPS', yearEn: '2025', yearAr: '٢٠٢٥' },
  { key: 'mass', name: 'MASS', yearEn: '2025', yearAr: '٢٠٢٥' },
  { key: 'lineup', name: 'LINEUP', yearEn: '2026', yearAr: '٢٠٢٦' },
]

export const AboutCredibility: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section level entrance reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Blur-in scroll reveal for the section title and statements
      gsap.fromTo(
        '.about-reveal-title',
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-reveal-title',
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.about-reveal-content',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.about-reveal-content',
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Staggered reveal for client logos
      gsap.fromTo(
        '.client-tile',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.clients-grid',
            start: 'top 90%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pad about-section"
      aria-labelledby="about-title"
    >
      <div className="container">
        {/* Section Index Eyebrow */}
        <div className="section-label-header">
          <span className="eyebrow-tag">{t('about.sectionIndex')}</span>
          <span className="section-label-subtitle">{t('about.sectionSubtitle')}</span>
        </div>

        {/* Primary Statement */}
        <div className="about-header-block">
          <h2 id="about-title" className="text-display-section about-reveal-title">
            {t('about.headlinePart1')} <br className="hide-on-mobile" />
            <span>{t('about.headlinePart2')}</span>
          </h2>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="about-narrative-grid">
          <div className="about-column-primary about-reveal-content">
            <p className="text-serif-pullquote about-pullquote">
              {t('about.pullquote')}
            </p>
            <div className="about-action-pill">
              <motion.a
                href="#services"
                className="pill-button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>{t('about.cta')}</span>
                <span className="arrow-icon-animated" aria-hidden="true">↓</span>
              </motion.a>
            </div>
          </div>

          <div className="about-column-secondary about-reveal-content">
            <p className="about-body-text">
              {t('about.paragraph1')}
            </p>
            <p className="about-body-text">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>

        {/* Client Credibility Showcase ("In good company") */}
        <div className="clients-showcase">
          <div className="clients-header">
            <span className="eyebrow-tag">{t('about.credibilityTag')}</span>
            <h3 className="clients-title">{t('about.credibilityTitle')}</h3>
          </div>

          <div className="clients-grid" role="list" aria-label="Clients and partners">
            {CLIENTS.map((client) => (
              <motion.div
                key={client.key}
                className="client-tile"
                role="listitem"
                whileHover={{ y: -3, scale: 1.02, borderColor: 'var(--accent)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="client-tile-top">
                  <span className="client-category-tag">{t(`about.clients.${client.key}`)}</span>
                  <span className="client-year-tag">{isAr ? client.yearAr : client.yearEn}</span>
                </div>
                <p className="client-name">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
