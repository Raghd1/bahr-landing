import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation, Trans } from 'react-i18next'
import { BahrMark } from './BahrMark'
import { HeroWaveBackground } from './HeroWaveBackground'
import { HeroContours } from './HeroContours'

gsap.registerPlugin(ScrollTrigger)

export interface HeroProps {
  introReady?: boolean
}

export const Hero: React.FC<HeroProps> = ({ introReady = true }) => {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!introReady) return

    const ctx = gsap.context(() => {
      // Split blur entrance animation
      gsap.fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 30, filter: 'blur(12px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.0,
          stagger: 0.14,
          ease: 'power3.out',
        }
      )


      gsap.fromTo(
        '.hero-intro-text, .hero-actions-wrapper, .hero-prompts-group',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.35,
          ease: 'power3.out',
        }
      )

      gsap.fromTo(
        '.hero-card',
        { opacity: 0, scale: 0.94, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          delay: 0.45,
          ease: 'power3.out',
        }
      )

      // Parallax float on desktop without layout jumps or overlap
      const mm = gsap.matchMedia()
      mm.add('(min-width: 980px)', () => {
        gsap.to('.hero-card--1', {
          y: -70,
          rotation: -4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })

        gsap.to('.hero-card--2', {
          y: -110,
          rotation: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })

        gsap.to('.hero-card--3', {
          y: -50,
          rotation: -2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, heroRef)

    // Refresh ScrollTrigger once hero context is active
    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [introReady])

  const handlePromptClick = (targetId: string) => {
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero-section"
      aria-label="Introduction & Overview"
    >
      {/* Background ambient gradient texture */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* Topographic Contour Lines (bybahr.com style) */}
      <HeroContours />

      {/* Sea Wave animated background (Bahr sea theme) */}
      <HeroWaveBackground />

      <div className="container hero-container">
        {/* Top Eyebrow Tag */}
        <div className="hero-eyebrow-wrapper">
          <span className="eyebrow-tag">
            {t('hero.eyebrow')}
          </span>
        </div>

        {/* Central Content Stage */}
        <div className="hero-grid-layout">
          {/* Arabic Bahr watermark anchor - sits in open space above cards, clear of cards and behind text */}
          <div
            className="hero-arabic-watermark"
            id="hero-bahr-anchor"
            aria-hidden="true"
            role="img"
            aria-label="بحر"
          >
            <div className="bahr-mark-sway-track">
              <BahrMark className="bahr-arabic-mark" />
            </div>
          </div>

          <div className="hero-main-column">
            <div className="hero-headline-wrapper">
              <h1 className="hero-headline">
                <span className="hero-headline-line block">{t('hero.headlineLine1')}</span>
                <span className="hero-headline-line block hero-highlight">
                  {t('hero.headlineLine2')}
                </span>
              </h1>
            </div>

            <p className="hero-serif-statement hero-intro-text">
              {t('hero.statement')}
            </p>

            <p className="hero-description hero-intro-text">
              <Trans
                i18nKey="hero.description"
                components={{ strong: <strong className="hero-bahr-bold" /> }}
              />
            </p>

            {/* Interactive Primary Frosted CTA & Prompt Group */}
            <div className="hero-actions-wrapper">
              <motion.a
                href="#about"
                className="frosted-button hero-primary-frosted"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  handlePromptClick('#about')
                }}
              >
                <span className="frosted-button-dot" aria-hidden="true" />
                <span className="button-label">{t('hero.primaryCTA')}</span>
                <span className="arrow-icon-animated" aria-hidden="true">↓</span>
              </motion.a>

              <motion.a
                href="mailto:dive@b7r.agency"
                className="pill-button-ghost"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <span>{t('hero.emailCTA')}</span>
                <span className="arrow-icon-animated">↗</span>
              </motion.a>
            </div>

            {/* Quick Prompt Pills (Think Company "Ask us" feature) */}
            <div className="hero-prompts-group">
              <span className="hero-prompts-label">{t('hero.quickOverviewLabel')}</span>
              <div className="hero-prompt-chips">
                <motion.button
                  type="button"
                  className="hero-prompt-chip"
                  onClick={() => handlePromptClick('#services')}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {t('hero.prompt1')}
                </motion.button>
                <motion.button
                  type="button"
                  className="hero-prompt-chip"
                  onClick={() => handlePromptClick('#services')}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {t('hero.prompt2')}
                </motion.button>
                <motion.button
                  type="button"
                  className="hero-prompt-chip"
                  onClick={() => handlePromptClick('#work')}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {t('hero.prompt3')}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Floating Showcase Cards (Think Company Hero Stage Cards) */}
          <div className="hero-cards-stage" aria-hidden="true">
            {/* Card 1: Alageely */}
            <div className="hero-card hero-card--1" data-theme="paper">
              <div className="hero-card-header">
                <span className="hero-card-category">{t('hero.card1Category')}</span>
                <span className="hero-card-badge">{t('hero.card1Badge')}</span>
              </div>
              <div className="hero-card-visual hero-card-visual--legal">
                <div className="visual-graphic-lines">
                  <div className="v-line v-line-1" />
                  <div className="v-line v-line-2" />
                  <div className="v-line v-line-3" />
                </div>
              </div>
              <div className="hero-card-body">
                <h2 className="hero-card-title">{t('hero.card1Title')}</h2>
                <p className="hero-card-copy">
                  {t('hero.card1Copy')}
                </p>
              </div>
            </div>

            {/* Card 2: Riyadh Retina */}
            <div className="hero-card hero-card--2" data-theme="midnight_navy">
              <div className="hero-card-header">
                <span className="hero-card-category">{t('hero.card2Category')}</span>
                <span className="hero-card-badge">{t('hero.card2Badge')}</span>
              </div>
              <div className="hero-card-visual hero-card-visual--retina">
                <div className="visual-retina-circle">
                  <div className="retina-core" />
                </div>
              </div>
              <div className="hero-card-body">
                <h2 className="hero-card-title">{t('hero.card2Title')}</h2>
                <p className="hero-card-copy">
                  {t('hero.card2Copy')}
                </p>
              </div>
            </div>

            {/* Card 3: AI & Automation */}
            <div className="hero-card hero-card--3" data-theme="think_red">
              <div className="hero-card-header">
                <span className="hero-card-category">{t('hero.card3Category')}</span>
                <span className="hero-card-badge">{t('hero.card3Badge')}</span>
              </div>
              <div className="hero-card-visual hero-card-visual--ai">
                <div className="visual-ai-nodes">
                  <span className="ai-node node-a" />
                  <span className="ai-pulse" />
                  <span className="ai-node node-b" />
                </div>
              </div>
              <div className="hero-card-body">
                <h2 className="hero-card-title">{t('hero.card3Title')}</h2>
                <p className="hero-card-copy">
                  {t('hero.card3Copy')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll link at footer of hero */}
        <div className="hero-scroll-cue">
          <a
            href="#about"
            className="hero-scroll-link"
            onClick={(e) => {
              e.preventDefault()
              handlePromptClick('#about')
            }}
          >
            <span>{t('hero.scrollLink')}</span>
            <span className="scroll-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
