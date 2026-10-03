import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import { BahrMark } from './BahrMark'

interface IntroSplashProps {
  /**
   * Called when the splash begins releasing / dissolving,
   * signaling the hero to start its entrance animation simultaneously.
   */
  onStartHeroReveal: () => void
  /**
   * Called when the splash has completely finished and can be removed from DOM.
   */
  onComplete: () => void
}

const STORAGE_KEY = 'bahr_intro_seen'

export const IntroSplash: React.FC<IntroSplashProps> = ({
  onStartHeroReveal,
  onComplete,
}) => {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const markWrapperRef = useRef<HTMLDivElement>(null)
  const captionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const trackBarRef = useRef<HTMLSpanElement>(null)
  const skipBtnRef = useRef<HTMLButtonElement>(null)

  const [active] = useState(() => {
    // Check if user already saw the intro during this browser session
    try {
      const alreadySeen = sessionStorage.getItem(STORAGE_KEY) === 'true'
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (alreadySeen || prefersReducedMotion) {
        return false
      }
    } catch {
      // Ignore storage errors in restricted iframe environments
    }
    return true
  })

  const isSkippingRef = useRef(false)

  useEffect(() => {
    if (!active) {
      onStartHeroReveal()
      onComplete()
      return
    }

    const container = containerRef.current
    const markWrapper = markWrapperRef.current
    const caption = captionRef.current
    const track = trackRef.current
    const trackBar = trackBarRef.current
    const skipBtn = skipBtnRef.current

    if (!container || !markWrapper || !caption || !track || !trackBar) return

    // Create GSAP intro timeline
    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem(STORAGE_KEY, 'true')
        } catch {}
        onComplete()
      },
    })

    // Initial styling
    gsap.set(container, { opacity: 1 })
    gsap.set(markWrapper, { opacity: 0, scale: 0.86, y: 16, filter: 'blur(10px)' })
    gsap.set(caption, { opacity: 0, y: 12 })
    gsap.set([track, skipBtn], { opacity: 0 })
    gsap.set(trackBar, { x: '-110%' })

    // Step 1: Smooth entrance of brand mark and caption (400-500ms)
    tl.to(markWrapper, {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.55,
      ease: 'power3.out',
    })
      .to(
        caption,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .to(
        [track, skipBtn],
        {
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        },
        '-=0.25'
      )

    // Step 2: Track indicator scan across the line
    tl.to(trackBar, {
      x: '240%',
      duration: 0.85,
      ease: 'power1.inOut',
    })

    // Step 3: Subtle hold / breath phase (~300ms)
    tl.to({}, { duration: 0.25 })

    // Step 4: Begin hero reveal handoff (trigger right as splash starts dissolving)
    tl.call(() => {
      onStartHeroReveal()
    })

    // Step 5: Graceful release / dissolve (~450ms)
    tl.to(markWrapper, {
      y: -22,
      scale: 0.95,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.inOut',
    })
      .to(
        [caption, track, skipBtn],
        {
          y: -14,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut',
        },
        '-=0.4'
      )
      .to(
        container,
        {
          opacity: 0,
          duration: 0.45,
          ease: 'power2.inOut',
        },
        '-=0.25'
      )

    // Handle instant skip (click anywhere, skip button, keydown, scroll)
    const handleSkip = () => {
      if (isSkippingRef.current) return
      isSkippingRef.current = true

      try {
        sessionStorage.setItem(STORAGE_KEY, 'true')
      } catch {}

      tl.kill()
      onStartHeroReveal()

      gsap.to(container, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.inOut',
        onComplete: () => {
          onComplete()
        },
      })
    }

    // Keyboard listener (Escape, Space, Enter, Tab)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Escape', ' ', 'Enter', 'Tab'].includes(e.key)) {
        handleSkip()
      }
    }

    // Scroll listener (scrolling immediately releases the intro)
    const handleScroll = () => {
      if (window.scrollY > 15) {
        handleSkip()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Click handler for skip button & container
    const onContainerClick = () => {
      // Allow skip by clicking anywhere on the splash screen
      handleSkip()
    }

    container.addEventListener('click', onContainerClick)

    return () => {
      tl.kill()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      container.removeEventListener('click', onContainerClick)
    }
  }, [active, onStartHeroReveal, onComplete])

  if (!active) return null

  return (
    <div
      ref={containerRef}
      className="intro-splash-screen"
      role="dialog"
      aria-modal="true"
      aria-label={t('splash.dialogAria')}
    >
      {/* Background ambient lighting */}
      <div className="intro-ambient-glow" aria-hidden="true" />

      {/* Explicit Skip Pill Button */}
      <button
        ref={skipBtnRef}
        type="button"
        className="intro-skip-pill"
        onClick={(e) => {
          e.stopPropagation()
          if (!isSkippingRef.current) {
            isSkippingRef.current = true
            try {
              sessionStorage.setItem(STORAGE_KEY, 'true')
            } catch {}
            onStartHeroReveal()
            if (containerRef.current) {
              gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.22,
                ease: 'power2.inOut',
                onComplete,
              })
            } else {
              onComplete()
            }
          }
        }}
        aria-label={t('splash.skipAria')}
      >
        <span className="intro-skip-label">{t('splash.skip')}</span>
        <kbd className="intro-skip-key" aria-hidden="true">
          Esc
        </kbd>
      </button>

      {/* Center Stage Presentation */}
      <div className="intro-center-stage">
        {/* Arabic Calligraphic Emblem */}
        <div ref={markWrapperRef} className="intro-mark-wrapper">
          <div className="intro-mark-glow" aria-hidden="true" />
          <BahrMark className="intro-bahr-mark" />
        </div>

        {/* Caption: BAHR / بحر */}
        <div ref={captionRef} className="intro-caption">
          <span className="intro-en">BAHR</span>
          <span className="intro-divider">/</span>
          <span className="intro-ar">بحر</span>
        </div>

        {/* Scanning Track Line */}
        <div ref={trackRef} className="intro-track" aria-hidden="true">
          <span ref={trackBarRef} className="intro-track-bar" />
        </div>

        <span className="intro-subtext" aria-hidden="true">
          {t('splash.subtext')}
        </span>
      </div>
    </div>
  )
}
