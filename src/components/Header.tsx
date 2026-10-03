import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
  onTalkClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onTalkClick }) => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en'
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(nextLang)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: t('nav.agency'), href: '#about' },
    { label: t('nav.expertise'), href: '#services' },
    { label: t('nav.work'), href: '#work' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <div className="header-container">
          <motion.a
            href="#top"
            className="brand-wordmark"
            aria-label="Bahr Home"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => handleLinkClick(e, '#top')}
          >
            <span className="brand-dock-slot" id="header-bahr-dock" aria-hidden="true" />
            <span className="brand-text">BAHR</span>
            <span className="brand-dot" aria-hidden="true">.</span>
          </motion.a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            {/* Language Toggle Button */}
            <motion.button
              type="button"
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              aria-label={t('nav.langAria')}
            >
              <span className="lang-toggle-indicator" aria-hidden="true" />
              <span className="lang-toggle-text">{t('nav.langToggle')}</span>
            </motion.button>

            <motion.a
              href="mailto:dive@b7r.agency"
              className="frosted-button header-cta-pill"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={onTalkClick}
            >
              <span className="button-label">{t('nav.letsTalk')}</span>
              <span className="arrow-icon-animated" aria-hidden="true">↗</span>
            </motion.a>

            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-dialog"
            >
              <span className="hamburger-bar top-bar" />
              <span className="hamburger-bar bot-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-dialog"
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-menu-content">
              <p className="mobile-menu-eyebrow">{t('nav.mobileDrawerTitle')}</p>
              <ul className="mobile-nav-list">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                      <span className="arrow-icon-animated">↗</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu-footer">
                <button
                  type="button"
                  className="lang-toggle-btn mobile-drawer-lang-btn"
                  onClick={toggleLanguage}
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem', padding: '0.75rem 1rem' }}
                  aria-label={t('nav.langAria')}
                >
                  <span className="lang-toggle-indicator" aria-hidden="true" />
                  <span className="lang-toggle-text">{t('nav.langToggle')}</span>
                </button>

                <a
                  href="mailto:dive@b7r.agency"
                  className="pill-button mobile-cta-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t('nav.mobileConversationCTA')}</span>
                  <span className="arrow-icon-animated">↗</span>
                </a>
                <p className="mobile-location-tag">
                  {t('nav.mobileLocation')}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
