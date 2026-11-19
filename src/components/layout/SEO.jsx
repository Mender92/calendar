
import { useEffect } from 'react'

const BASE_URL = 'https://calendar-azure-psi.vercel.app'
const SITE_NAME = '2027 Calendar'
const OG_IMAGE = `${BASE_URL}/og-calendar.svg`

function SEO({ title, description, path = '/' }) {
  useEffect(() => {
    const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
    const canonicalUrl = `${BASE_URL}${normalizedPath}`

    document.title = title

    const updateMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      )

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Basic SEO
    updateMeta('name', 'description', description)
    updateMeta('name', 'robots', 'index, follow')

    // Open Graph
    updateMeta('property', 'og:type', 'website')
    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('property', 'og:url', canonicalUrl)
    updateMeta('property', 'og:site_name', SITE_NAME)
    updateMeta('property', 'og:locale', 'en_US')
    updateMeta('property', 'og:image', OG_IMAGE)
    updateMeta('property', 'og:image:alt', 'Minimalist blue 2027 wall calendar')

    // Twitter / X
    updateMeta('name', 'twitter:card', 'summary_large_image')
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)
    updateMeta('name', 'twitter:image', OG_IMAGE)
    updateMeta('name', 'twitter:image:alt', 'Minimalist blue 2027 wall calendar')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = canonicalUrl

    // Structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: SITE_NAME,
          url: `${BASE_URL}/`,
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          isPartOf: {
            '@id': `${BASE_URL}/#website`,
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: OG_IMAGE,
          },
        },
      ],
    }

    let schemaScript = document.querySelector('#calendar-structured-data')

    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'calendar-structured-data'
      schemaScript.type = 'application/ld+json'
      document.head.appendChild(schemaScript)
    }

    schemaScript.textContent = JSON.stringify(structuredData)
  }, [title, description, path])

  return null
}

export default SEO
