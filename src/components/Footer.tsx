import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section level entrance reveal
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const yearDisplay = isAr ? '٢٠٢٦' : CURRENT_YEAR.toString()

  return (
    <footer ref={footerRef} className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Tier: Multi-column Enterprise Grid */}
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <a href="#top" className="footer-brand-wordmark" aria-label="Bahr Home">
              <span className="brand-text">BAHR</span>
              <span className="brand-dot" aria-hidden="true">.</span>
            </a>
            <p className="footer-tagline" style={{ whiteSpace: 'pre-line' }}>
              {t('footer.tagline')}
            </p>
            <p className="footer-mission-badge">
              <span>{t('footer.missionBadge')}</span>
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav-group">
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">{t('footer.exploreTitle')}</h4>
              <ul className="footer-nav-list">
                <li>
                  <motion.a href="#top" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.homeLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#about" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.agencyLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#services" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.expertiseLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#work" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.workLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#contact" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.contactLink')}
                  </motion.a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-nav-title">{t('footer.capabilitiesTitle')}</h4>
              <ul className="footer-nav-list">
                <li>
                  <motion.a href="#services" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.webExpLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#services" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.aiAutoLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#services" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.mobileAppsLink')}
                  </motion.a>
                </li>
                <li>
                  <motion.a href="#services" whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }} transition={{ duration: 0.15 }}>
                    {t('footer.designSystemsLink')}
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>

          {/* Direct Inquiry Prompt */}
          <div className="footer-inquiry-col">
            <h4 className="footer-nav-title">{t('footer.startProjectTitle')}</h4>
            <p className="footer-inquiry-copy">
              {t('footer.inquiryCopy')}
            </p>
            <motion.a
              href="mailto:dive@b7r.agency"
              className="pill-button footer-cta-pill"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <span>dive@b7r.agency</span>
              <span className="arrow-icon-animated" aria-hidden="true">↗</span>
            </motion.a>
            <span className="footer-response-tag">{t('footer.responseTime')}</span>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="footer-utility-bar">
          <p className="footer-copyright">
            {t('footer.copyright', { year: yearDisplay })}
          </p>

          <div className="footer-utility-links">
            <motion.a
              href="https://www.linkedin.com/company/bybahr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-utility-link"
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ duration: 0.15 }}
            >
              <span>LinkedIn</span>
              <span className="arrow-icon-animated" aria-hidden="true">↗</span>
            </motion.a>

            <motion.a
              href="#top"
              className="footer-utility-link footer-top-link"
              onClick={handleScrollToTop}
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ duration: 0.15 }}
            >
              <span>{t('footer.backToTop')}</span>
              <span className="arrow-up-icon" aria-hidden="true">↑</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
