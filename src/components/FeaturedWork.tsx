import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

interface ProjectConfig {
  key: 'project1' | 'project2' | 'project3' | 'project4'
  indexEn: string
  indexAr: string
  theme: string
  href: string
  visualType: 'legal' | 'healthcare' | 'sports' | 'entertainment'
}

const PROJECT_CONFIGS: ProjectConfig[] = [
  {
    key: 'project1',
    indexEn: '01',
    indexAr: '٠١',
    theme: 'midnight_navy',
    href: 'mailto:dive@b7r.agency?subject=Case%20Study:%20Alageely',
    visualType: 'legal',
  },
  {
    key: 'project2',
    indexEn: '02',
    indexAr: '٠٢',
    theme: 'paper',
    href: 'mailto:dive@b7r.agency?subject=Case%20Study:%20Riyadh%20Retina',
    visualType: 'healthcare',
  },
  {
    key: 'project3',
    indexEn: '03',
    indexAr: '٠٣',
    theme: 'midnight_navy',
    href: 'mailto:dive@b7r.agency?subject=Case%20Study:%20Sycleague',
    visualType: 'sports',
  },
  {
    key: 'project4',
    indexEn: '04',
    indexAr: '٠٤',
    theme: 'think_red',
    href: 'mailto:dive@b7r.agency?subject=Case%20Study:%20Lineup',
    visualType: 'entertainment',
  },
]

export const FeaturedWork: React.FC = () => {
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

      // Header blur reveal
      gsap.fromTo(
        '.work-header-reveal',
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-header-reveal',
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Work cards staggered reveal (~100ms between each card)
      gsap.fromTo(
        '.featured-work-card',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1, // ~100ms staggered delay
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: '.featured-work-list',
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
      id="work"
      ref={sectionRef}
      className="section-pad featured-work-section"
      aria-labelledby="work-title"
    >
      <div className="container">
        {/* Section Label Header */}
        <div className="section-label-header">
          <span className="eyebrow-tag">{t('work.sectionIndex')}</span>
          <span className="section-label-subtitle">{t('work.sectionSubtitle')}</span>
        </div>

        {/* Section Title & Philosophy (Think Company style) */}
        <div className="featured-work-header work-header-reveal">
          <h2 id="work-title" className="text-display-section">
            {t('work.titleLine1')} <br />
            <span>{t('work.titleLine2')}</span>
          </h2>
          <p className="featured-work-description">
            {t('work.description')}
          </p>
        </div>

        {/* Work Cards Grid */}
        <div className="featured-work-list" role="list" aria-label="Selected client projects">
          {PROJECT_CONFIGS.map((project) => {
            const tags = (t(`work.${project.key}.tags`, { returnObjects: true }) || []) as string[]
            const client = t(`work.${project.key}.client`)
            const industry = t(`work.${project.key}.industry`)
            const year = t(`work.${project.key}.year`)
            const title = t(`work.${project.key}.title`)
            const description = t(`work.${project.key}.description`)
            const index = isAr ? project.indexAr : project.indexEn

            return (
              <motion.article
                key={project.key}
                className="featured-work-card"
                data-theme={project.theme}
                role="listitem"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Media & Visual Preview */}
                <div className="work-card-media" aria-hidden="true">
                  <div className={`work-media-canvas work-media-${project.visualType}`}>
                    {project.visualType === 'legal' && (
                      <div className="preview-legal">
                        <div className="preview-legal-header">
                          <span className="preview-dot" />
                          <span className="preview-line" />
                        </div>
                        <div className="preview-legal-body">
                          <span className="preview-badge">{t('work.project1.badge')}</span>
                          <div className="preview-text-block">
                            <div className="p-bar p-bar-lg" />
                            <div className="p-bar p-bar-md" />
                            <div className="p-bar p-bar-sm" />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.visualType === 'healthcare' && (
                      <div className="preview-health">
                        <div className="preview-health-retina">
                          <div className="retina-ring ring-1" />
                          <div className="retina-ring ring-2" />
                          <div className="retina-pupil" />
                        </div>
                        <div className="preview-health-stat">
                          <span className="stat-number">{t('work.project2.statNumber')}</span>
                          <span className="stat-label">{t('work.project2.statLabel')}</span>
                        </div>
                      </div>
                    )}

                    {project.visualType === 'sports' && (
                      <div className="preview-sports">
                        <div className="preview-sports-grid">
                          <div className="sports-bar bar-1" />
                          <div className="sports-bar bar-2" />
                          <div className="sports-bar bar-3" />
                          <div className="sports-bar bar-4" />
                        </div>
                        <div className="sports-badge">{t('work.project3.badge')}</div>
                      </div>
                    )}

                    {project.visualType === 'entertainment' && (
                      <div className="preview-ent">
                        <div className="ent-wave">
                          <span className="wave-bar w-1" />
                          <span className="wave-bar w-2" />
                          <span className="wave-bar w-3" />
                          <span className="wave-bar w-4" />
                          <span className="wave-bar w-5" />
                        </div>
                        <div className="ent-badge">{t('work.project4.badge')}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Work Card Content */}
                <div className="work-card-content">
                  <div className="work-card-top-meta">
                    <span className="work-card-index">{index}</span>
                    <span className="work-card-client-tag">{client}</span>
                    <span className="work-card-industry-tag">{industry} · {year}</span>
                  </div>

                  <h3 className="work-card-title">
                    <a href={project.href} className="work-card-link">
                      {title}
                      <span className="work-card-arrow-circle" aria-hidden="true">
                        <span className="arrow-icon-animated">↗</span>
                      </span>
                    </a>
                  </h3>

                  <p className="work-card-description">{description}</p>

                  <div className="work-card-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="work-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Work Section Footer */}
        <div className="work-section-footer">
          <motion.a
            href="mailto:dive@b7r.agency?subject=Project%20Inquiry%20-%20All%20Projects"
            className="frosted-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="button-label">{t('work.inquireCTA')}</span>
            <span className="arrow-icon-animated" aria-hidden="true">↗</span>
          </motion.a>

          <motion.a
            href="mailto:dive@b7r.agency?subject=Full%20Portfolio%20Request"
            className="work-view-all-link"
            whileHover={{ scale: 1.02, x: isAr ? -2 : 2 }}
            transition={{ duration: 0.2 }}
          >
            <span>{t('work.archiveCTA')}</span>
            <span className="arrow-icon-animated" aria-hidden="true">↗</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
