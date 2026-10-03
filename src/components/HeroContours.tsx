import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import contoursSvgRaw from '../assets/hero-contours.svg?raw'

/**
 * Topographic Contour-Line Background for Hero Section.
 * Replicates the authentic bybahr.com terrain contour geometry (marching squares over bahrTerrain).
 * Features a slow, continuous multi-tier elevation drift and gentle organic morphing:
 * distinct elevation tiers drift, expand, and breathe out of phase, creating the unmistakable
 * feeling of living elevation contours without being fast or distracting.
 * Positioned and masked to cradle the headline "A deeper creative approach" with pristine legibility.
 */
export const HeroContours: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Accessibility: keep contours completely static if user prefers reduced motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const svgElement = container.querySelector('svg')
    if (!svgElement) return

    const tweens: gsap.core.Tween[] = []

    const ctx = gsap.context(() => {
      // 1. Subtle, slow ambient drift of the overall SVG canvas (broad global current)
      tweens.push(
        gsap.to(svgElement, {
          x: -16,
          y: 10,
          duration: 28,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // 2. Differential organic elevation shifting across distinct contour tiers:
      // Tier 1 (Deep ocean basin): slow horizontal drift & vertical breathing
      tweens.push(
        gsap.to('.contour-tier--1', {
          x: -26,
          y: 14,
          scaleX: 1.025,
          scaleY: 0.985,
          rotation: 0.6,
          duration: 15.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // Tier 2 (Lower slope): counter-drift with lateral compression & vertical swell
      tweens.push(
        gsap.to('.contour-tier--2', {
          x: 22,
          y: -16,
          scaleX: 0.98,
          scaleY: 1.022,
          rotation: -0.5,
          duration: 18.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // Tier 3 (Mid shelf): subtle lateral undulation
      tweens.push(
        gsap.to('.contour-tier--3', {
          x: -18,
          y: -12,
          scaleX: 1.02,
          scaleY: 1.015,
          rotation: 0.4,
          duration: 13.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // Tier 4 (Upper slope): counter-breathing elevation swell
      tweens.push(
        gsap.to('.contour-tier--4', {
          x: 24,
          y: 16,
          scaleX: 0.982,
          scaleY: 0.982,
          rotation: -0.6,
          duration: 21.0,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // Tier 5 (High ridge crest): gentle crest shifting
      tweens.push(
        gsap.to('.contour-tier--5', {
          x: -15,
          y: 18,
          scaleX: 1.018,
          scaleY: 1.025,
          rotation: 0.5,
          duration: 16.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )

      // Tier Accent (Primary bathymetric contour line): fluid glide along ridge
      tweens.push(
        gsap.to('.contour-tier--accent', {
          x: 18,
          y: -10,
          scaleX: 1.012,
          scaleY: 0.99,
          rotation: -0.3,
          duration: 12.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      )
    }, container)

    // Pause animations when hero is scrolled out of viewport for peak performance
    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tweens.forEach((t) => t.resume())
            } else {
              tweens.forEach((t) => t.pause())
            }
          })
        },
        { threshold: 0.05 }
      )
      observer.observe(container)
    }

    return () => {
      if (observer) observer.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="hero-contours-stage"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: contoursSvgRaw }}
    />
  )
}

