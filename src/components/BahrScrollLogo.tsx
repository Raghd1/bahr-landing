import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BahrMark } from './BahrMark'

gsap.registerPlugin(ScrollTrigger)

export interface BahrScrollLogoProps {
  introReady?: boolean
}

/**
 * Animated Bahr (بحر) mark transition between Hero and Header.
 * Replicates the authentic bybahr.com transition logic:
 * - Starts as the calligraphic watermark behind "A deeper creative approach" in the Hero.
 * - As the user scrolls down, it moves with the headline, lifts off, shrinks, brightens,
 *   and glides seamlessly into the fixed header navigation, docking beside "BAHR.".
 * - Once scrolled past the hero, it stays pinned as the persistent header logo.
 * - When scrolling back to the top, it reverses smoothly without jumps or overlap.
 */
export const BahrScrollLogo: React.FC<BahrScrollLogoProps> = ({ introReady = true }) => {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const logoEl = logoRef.current
    if (!logoEl) return

    // Accessibility: honor prefers-reduced-motion by keeping logo static in header
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const heroAnchor = document.getElementById('hero-bahr-anchor')
    const headerDock = document.getElementById('header-bahr-dock')
    if (!heroAnchor || !headerDock) return

    // Hermite smootherstep quintic polynomial from bybahr.com logo-layout.mjs:
    const smootherstep = (t: number) => {
      const p = Math.max(0, Math.min(1, t))
      return p * p * p * (p * (p * 6 - 15) + 10)
    }

    let heroRect = heroAnchor.getBoundingClientRect()
    let headerRect = headerDock.getBoundingClientRect()

    const updateMeasurements = () => {
      if (!heroAnchor || !headerDock) return
      heroRect = heroAnchor.getBoundingClientRect()
      const wordmark = headerDock.closest('.brand-wordmark')
      if (wordmark) {
        const wmRect = wordmark.getBoundingClientRect()
        headerRect = headerDock.getBoundingClientRect()
        if (headerRect.width === 0) {
          const vw = window.innerWidth
          const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
          const expectedDockWidth = Math.min(Math.max(1.85 * rem, 1.45 * rem + 0.008 * vw), 2.45 * rem)
          const expectedDockHeight = Math.min(Math.max(1.4 * rem, 1.15 * rem + 0.006 * vw), 1.95 * rem)
          const isRtl = document.documentElement.dir === 'rtl'
          const dockLeft = isRtl
            ? wmRect.right - expectedDockWidth
            : wmRect.left
          headerRect = {
            left: dockLeft,
            top: wmRect.top + (wmRect.height - expectedDockHeight) / 2,
            width: expectedDockWidth,
            height: expectedDockHeight,
            right: dockLeft + expectedDockWidth,
            bottom: wmRect.top + (wmRect.height + expectedDockHeight) / 2,
            x: dockLeft,
            y: wmRect.top + (wmRect.height - expectedDockHeight) / 2,
            toJSON: () => ({}),
          }
        }
      } else {
        headerRect = headerDock.getBoundingClientRect()
      }
    }

    // Set initial dimensions to match the hero watermark
    gsap.set(logoEl, {
      width: heroRect.width,
      height: heroRect.height,
      x: heroRect.left,
      y: heroRect.top,
      opacity: 0,
      scale: 0.86,
      zIndex: 2,
    })

    // Entrance animation matching bybahr.com intro (1500ms duration with smootherstep)
    if (introReady) {
      gsap.to(logoEl, {
        opacity: 0.3,
        scale: 1,
        y: heroRect.top,
        duration: 1.5,
        delay: 0.25,
        ease: smootherstep,
      })
    }

    // Create ScrollTrigger scrub timeline
    const trigger = ScrollTrigger.create({
      trigger: '#top',
      start: 'top top',
      end: 'bottom 40%',
      scrub: 0.8,
      invalidateOnRefresh: true,
      onRefresh: (self) => {
        updateMeasurements()
        if (self && self.progress === 0) {
          gsap.set(logoEl, {
            width: heroRect.width,
            height: heroRect.height,
            x: heroRect.left,
            y: heroRect.top,
            zIndex: 2,
          })
        }
      },
      onUpdate: (self) => {
        const progress = self.progress
        const scrollY = window.scrollY
        const targetScale = headerRect.width > 0 && heroRect.width > 0
          ? headerRect.width / heroRect.width
          : 0.18

        let currentX: number
        let currentY: number
        let currentScale: number
        let currentOpacity: number

        const liftStart = 0.24
        const totalDistance = Math.max(300, (self.end - self.start))

        if (progress < liftStart) {
          const p = progress / liftStart
          currentX = heroRect.left
          currentY = heroRect.top - scrollY
          currentScale = 1
          currentOpacity = 0.3 + p * 0.1
          logoEl.style.zIndex = '2'
          logoEl.classList.remove('is-docked', 'is-lifting')
          headerDock.classList.remove('is-docked')
        } else {
          const p = (progress - liftStart) / (1 - liftStart)
          const t = smootherstep(p)
          const liftY = heroRect.top - (liftStart * totalDistance)

          currentX = (1 - t) * heroRect.left + t * headerRect.left
          currentY = (1 - t) * liftY + t * headerRect.top
          currentScale = (1 - t) * 1 + t * targetScale
          currentOpacity = (1 - t) * 0.4 + t * 1.0

          logoEl.style.zIndex = '105'
          logoEl.classList.add('is-lifting')

          if (t > 0.4) {
            headerDock.classList.add('is-docked')
            logoEl.classList.add('is-docked')
          } else {
            headerDock.classList.remove('is-docked')
            logoEl.classList.remove('is-docked')
          }
        }

        gsap.set(logoEl, {
          x: currentX,
          y: currentY,
          scale: currentScale,
          opacity: currentOpacity,
        })
      },
    })

    const handleLangChange = () => {
      // Allow browser to apply new direction and reflow layout
      requestAnimationFrame(() => {
        updateMeasurements()
        ScrollTrigger.refresh()
        if (window.scrollY === 0) {
          gsap.set(logoEl, {
            width: heroRect.width,
            height: heroRect.height,
            x: heroRect.left,
            y: heroRect.top,
          })
        }
      })
    }

    ScrollTrigger.addEventListener('refresh', updateMeasurements)
    window.addEventListener('bahr-language-changed', handleLangChange)

    return () => {
      ScrollTrigger.removeEventListener('refresh', updateMeasurements)
      window.removeEventListener('bahr-language-changed', handleLangChange)
      trigger.kill()
    }
  }, [introReady])

  return (
    <div
      ref={logoRef}
      className="bahr-floating-mark"
      id="bahr-floating-mark"
      aria-hidden="true"
    >
      <div className="bahr-mark-sway-track">
        <BahrMark className="bahr-floating-mark-svg" />
      </div>
    </div>
  )
}
