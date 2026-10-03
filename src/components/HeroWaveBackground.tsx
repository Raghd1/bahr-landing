import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Animated SVG Wave Background for Hero Section.
 * Evokes the rhythmic sea (fitting for "Bahr" / بحر) with slow, gentle looping tides.
 * Built with lightweight mathematically continuous bezier curves, low navy/accent opacity,
 * and zero layout shifts or horizontal scroll.
 */
export const HeroWaveBackground: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    // Accessibility: honor reduced motion by keeping waves stationary
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      // Deep ocean back wave: slow horizontal drift with gentle vertical swell
      gsap.to('.hero-wave-track--back', {
        xPercent: -50,
        duration: 36,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.hero-wave-track--back', {
        y: 8,
        duration: 6.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Mid tide wave: slightly faster drift with inverted vertical breathing
      gsap.to('.hero-wave-track--mid', {
        xPercent: -50,
        duration: 27,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.hero-wave-track--mid', {
        y: -9,
        duration: 5.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Front crest wave: subtle surface ripple
      gsap.to('.hero-wave-track--front', {
        xPercent: -50,
        duration: 21,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.hero-wave-track--front', {
        y: 6,
        duration: 4.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, stage)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={stageRef}
      className="hero-wave-stage"
      aria-hidden="true"
    >
      {/* Wave Layer 1: Back Deep Tide */}
      <div className="hero-wave-layer hero-wave-layer--back">
        <div className="hero-wave-track hero-wave-track--back">
          <svg
            className="hero-wave-svg"
            viewBox="0 0 2400 320"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wave-grad-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(3, 27, 54, 0.04)" />
                <stop offset="60%" stopColor="rgba(3, 27, 54, 0.02)" />
                <stop offset="100%" stopColor="rgba(182, 255, 255, 0.01)" />
              </linearGradient>
            </defs>
            <path
              d="M0,170 C320,110 480,110 800,170 C1120,230 1280,230 1600,170 C1920,110 2080,110 2400,170 L2400,320 L0,320 Z"
              fill="url(#wave-grad-back)"
            />
            <path
              d="M0,170 C320,110 480,110 800,170 C1120,230 1280,230 1600,170 C1920,110 2080,110 2400,170"
              stroke="rgba(3, 27, 54, 0.07)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      {/* Wave Layer 2: Mid Swell Tide */}
      <div className="hero-wave-layer hero-wave-layer--mid">
        <div className="hero-wave-track hero-wave-track--mid">
          <svg
            className="hero-wave-svg"
            viewBox="0 0 2400 320"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wave-grad-mid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(3, 27, 54, 0.045)" />
                <stop offset="50%" stopColor="rgba(11, 44, 82, 0.025)" />
                <stop offset="100%" stopColor="rgba(253, 255, 238, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 C280,250 520,250 800,200 C1080,150 1320,150 1600,200 C1880,250 2120,250 2400,200 L2400,320 L0,320 Z"
              fill="url(#wave-grad-mid)"
            />
            <path
              d="M0,200 C280,250 520,250 800,200 C1080,150 1320,150 1600,200 C1880,250 2120,250 2400,200"
              stroke="rgba(11, 44, 82, 0.09)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      {/* Wave Layer 3: Front Gentle Crest */}
      <div className="hero-wave-layer hero-wave-layer--front">
        <div className="hero-wave-track hero-wave-track--front">
          <svg
            className="hero-wave-svg"
            viewBox="0 0 2400 320"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wave-grad-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(3, 27, 54, 0.03)" />
                <stop offset="100%" stopColor="rgba(253, 255, 238, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,235 C360,185 640,185 1000,235 C1360,285 1640,285 2000,235 C2180,210 2300,210 2400,235 L2400,320 L0,320 Z"
              fill="url(#wave-grad-front)"
            />
            <path
              d="M0,235 C360,185 640,185 1000,235 C1360,285 1640,285 2000,235 C2180,210 2300,210 2400,235"
              stroke="rgba(3, 27, 54, 0.06)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
