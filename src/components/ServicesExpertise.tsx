import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

interface ServiceConfig {
  key: 'item1' | 'item2' | 'item3'
  ctaHref: string
}

const SERVICE_CONFIGS: ServiceConfig[] = [
  {
    key: 'item1',
    ctaHref: 'mailto:dive@b7r.agency?subject=Inquiry:%20Web%20Experiences',
  },
  {
    key: 'item2',
    ctaHref: 'mailto:dive@b7r.agency?subject=Inquiry:%20AI%20and%20Automation',
  },
  {
    key: 'item3',
    ctaHref: 'mailto:dive@b7r.agency?subject=Inquiry:%20Mobile%20Apps',
  },
]

export const ServicesExpertise: React.FC = () => {
  const { t } = useTranslation()
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

      // Blur reveal for header
      gsap.fromTo(
        '.services-reveal-title',
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-reveal-title',
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Service card reveal
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.services-list',
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-pad services-section"
      aria-labelledby="services-title"
    >
      <div className="container">
        {/* Section Label */}
        <div className="section-label-header">
          <span className="eyebrow-tag">{t('services.sectionIndex')}</span>
          <span className="section-label-subtitle">{t('services.sectionSubtitle')}</span>
        </div>

        {/* Section Title & Intro */}
        <div className="services-header-block">
          <h2 id="services-title" className="text-display-section services-reveal-title">
            {t('services.titleLine1')} <br />
            <span>{t('services.titleLine2')}</span>
          </h2>
          <p className="services-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Problem-to-Solution Cards List (Think Company "How We Help" signature layout) */}
        <div className="services-list" role="list" aria-label="Services and capabilities">
          {SERVICE_CONFIGS.map((config) => {
            const capabilities = (t(`services.${config.key}.capabilities`, {
              returnObjects: true,
            }) || []) as string[]

            return (
              <motion.article
                key={config.key}
                className="service-card"
                role="listitem"
                whileHover={{ y: -4, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top Meta Line: Number and Title */}
                <div className="service-card-meta">
                  <span className="service-number">{t(`services.${config.key}.number`)}</span>
                  <h3 className="service-title">{t(`services.${config.key}.title`)}</h3>
                </div>

                {/* Grid: Problem Quote vs Solution & Capabilities */}
                <div className="service-card-grid">
                  {/* Left: Client Problem Quote */}
                  <div className="service-problem-col">
                    <span className="service-col-label">{t('services.challengeLabel')}</span>
                    <blockquote className="service-problem-quote">
                      {t(`services.${config.key}.problemQuote`)}
                    </blockquote>
                  </div>

                  {/* Right: Bahar's Solution & Execution Scope */}
                  <div className="service-solution-col">
                    <span className="service-col-label">{t('services.solutionLabel')}</span>
                    <p className="service-solution-text">{t(`services.${config.key}.solution`)}</p>

                    <div className="service-capabilities">
                      <span className="service-capabilities-label">{t('services.capabilitiesLabel')}</span>
                      <ul className="service-tags-list">
                        {capabilities.map((tag) => (
                          <li key={tag} className="service-tag-item">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-action-wrap">
                      <motion.a
                        href={config.ctaHref}
                        className="frosted-button service-cta-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="button-label">{t(`services.${config.key}.ctaText`)}</span>
                        <span className="arrow-icon-animated" aria-hidden="true">↗</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
