import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

interface InsightConfig {
  key: 'card1' | 'card2' | 'card3' | 'card4'
  theme: 'midnight_navy' | 'paper' | 'aqua' | 'think_red'
  href: string
}

const INSIGHT_CONFIGS: InsightConfig[] = [
  {
    key: 'card1',
    theme: 'midnight_navy',
    href: 'https://www.linkedin.com/company/bybahr',
  },
  {
    key: 'card2',
    theme: 'paper',
    href: 'https://www.linkedin.com/company/bybahr',
  },
  {
    key: 'card3',
    theme: 'aqua',
    href: 'https://www.linkedin.com/company/bybahr',
  },
  {
    key: 'card4',
    theme: 'think_red',
    href: 'https://www.linkedin.com/company/bybahr',
  },
]

export const Perspectives: React.FC = () => {
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

      gsap.fromTo(
        '.perspectives-header-reveal',
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.perspectives-header-reveal',
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.perspective-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.perspectives-grid',
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
      ref={sectionRef}
      className="section-pad perspectives-section"
      aria-labelledby="perspectives-title"
    >
      <div className="container">
        {/* Section Label Header */}
        <div className="section-label-header">
          <span className="eyebrow-tag">{t('perspectives.sectionIndex')}</span>
          <span className="section-label-subtitle">{t('perspectives.sectionSubtitle')}</span>
        </div>

        {/* Section Title */}
        <div className="perspectives-header perspectives-header-reveal">
          <h2 id="perspectives-title" className="text-display-section">
            {t('perspectives.titleLine1')} <br />
            <span>{t('perspectives.titleLine2')}</span>
          </h2>
          <motion.a
            href="https://www.linkedin.com/company/bybahr"
            target="_blank"
            rel="noopener noreferrer"
            className="perspectives-link"
            whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }}
            transition={{ duration: 0.2 }}
          >
            <span>{t('perspectives.linkedinLink')}</span>
            <span className="arrow-icon-animated" aria-hidden="true">↗</span>
          </motion.a>
        </div>

        {/* Perspectives Multi-Themed Card Grid (Think Company Mixtape style) */}
        <div className="perspectives-grid" role="list" aria-label="Perspectives and articles">
          {INSIGHT_CONFIGS.map((item) => (
            <motion.article
              key={item.key}
              className="perspective-card"
              data-theme={item.theme}
              role="listitem"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="perspective-card-top">
                <span className="perspective-tag">{t(`perspectives.${item.key}.tag`)}</span>
                <span className="perspective-author">{t(`perspectives.${item.key}.author`)}</span>
              </div>

              <div className="perspective-card-body">
                <h3 className="perspective-title">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="perspective-title-link"
                  >
                    {t(`perspectives.${item.key}.title`)}
                  </a>
                </h3>

                <p className="perspective-blurb">{t(`perspectives.${item.key}.blurb`)}</p>
              </div>

              <div className="perspective-card-footer">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="perspective-action-link"
                >
                  <span>{t('perspectives.exploreAction')}</span>
                  <span className="arrow-icon-animated" aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
