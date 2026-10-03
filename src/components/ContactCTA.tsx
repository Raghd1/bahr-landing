import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

export const ContactCTA: React.FC = () => {
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
        '.contact-reveal-item',
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.contact-inner-block',
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
      id="contact"
      ref={sectionRef}
      className="section-pad contact-cta-section"
      aria-labelledby="contact-title"
    >
      {/* Background Subtle Grid Texture */}
      <div className="contact-grid-canvas" aria-hidden="true">
        <div className="grid-line horizontal h-1" />
        <div className="grid-line horizontal h-2" />
        <div className="grid-line vertical v-1" />
        <div className="grid-line vertical v-2" />
      </div>

      <div className="container contact-container">
        {/* Section Label */}
        <div className="section-label-header">
          <span className="eyebrow-tag">{t('contact.sectionIndex')}</span>
          <span className="section-label-subtitle">{t('contact.sectionSubtitle')}</span>
        </div>

        <div className="contact-inner-block">
          <h2 id="contact-title" className="text-display-giant contact-title contact-reveal-item">
            {t('contact.titleLine1')} <br />
            <span className="contact-title-accent">{t('contact.titleLine2')}</span>
          </h2>

          <p className="text-serif-pullquote contact-description contact-reveal-item">
            {t('contact.description')}
          </p>

          <p className="contact-body-subtext contact-reveal-item">
            {t('contact.subtext')}
          </p>

          {/* Interactive Direct Conversion Actions */}
          <div className="contact-actions-wrapper contact-reveal-item">
            <motion.a
              href="mailto:dive@b7r.agency?subject=New%20Project%20Inquiry%20-%20Bahr"
              className="frosted-button contact-primary-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="frosted-button-dot" aria-hidden="true" />
              <span className="button-label">{t('contact.primaryBtn')}</span>
              <span className="arrow-icon-animated" aria-hidden="true">↗</span>
            </motion.a>

            <motion.a
              href="mailto:dive@b7r.agency"
              className="contact-email-link"
              whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }}
              transition={{ duration: 0.2 }}
              aria-label={t('contact.emailAria')}
            >
              <span className="email-text">dive@b7r.agency</span>
              <span className="arrow-icon-animated" aria-hidden="true">↗</span>
            </motion.a>
          </div>

          <div className="contact-location-info contact-reveal-item">
            <span className="location-pin" aria-hidden="true">📍</span>
            <span>{t('contact.location')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
