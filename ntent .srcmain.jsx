warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.jsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/index.html b/index.html[m
[1mindex ea583ce..22746ac 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -1,11 +1,54 @@[m
[32m+[m
 <!doctype html>[m
 <html lang="en">[m
   <head>[m
     <meta charset="UTF-8" />[m
[31m-    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />[m
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[31m-    <title>calendar</title>[m
[32m+[m
[32m+[m[32m    <title>2027 Wall Calendar | Minimalist Design Calendar</title>[m
[32m+[m
[32m+[m[32m    <meta[m
[32m+[m[32m      name="description"[m
[32m+[m[32m      content="Discover a minimalist 2027 wall calendar featuring bold blue design, crisp white typography and a timeless aesthetic. Make 2027 awesome."[m
[32m+[m[32m    />[m
[32m+[m
[32m+[m[32m    <meta name="robots" content="index, follow" />[m
[32m+[m
[32m+[m[32m    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />[m
[32m+[m
[32m+[m[32m    <link[m
[32m+[m[32m      rel="canonical"[m
[32m+[m[32m      href="https://calendar-azure-psi.vercel.app/"[m
[32m+[m[32m    />[m
[32m+[m
[32m+[m[32m    <meta name="theme-color" content="#1000C0" />[m
[32m+[m
[32m+[m[32m    <!-- Open Graph -->[m
[32m+[m[32m    <meta property="og:type" content="website" />[m
[32m+[m[32m    <meta property="og:title" content="2027 Wall Calendar | Minimalist Design" />[m
[32m+[m[32m    <meta[m
[32m+[m[32m      property="og:description"[m
[32m+[m[32m      content="A minimalist wall calendar where every detail has its place. Make 2027 awesome."[m
[32m+[m[32m    />[m
[32m+[m[32m    <meta[m
[32m+[m[32m      property="og:url"[m
[32m+[m[32m      content="https://calendar-azure-psi.vercel.app/"[m
[32m+[m[32m    />[m
[32m+[m[32m    <meta property="og:site_name" content="2027 Calendar" />[m
[32m+[m[32m    <meta property="og:locale" content="en_US" />[m
[32m+[m
[32m+[m[32m    <!-- Twitter / X -->[m
[32m+[m[32m    <meta name="twitter:card" content="summary_large_image" />[m
[32m+[m[32m    <meta[m
[32m+[m[32m      name="twitter:title"[m
[32m+[m[32m      content="2027 Wall Calendar | Minimalist Design"[m
[32m+[m[32m    />[m
[32m+[m[32m    <meta[m
[32m+[m[32m      name="twitter:description"[m
[32m+[m[32m      content="A minimalist wall calendar where every detail has its place. Make 2027 awesome."[m
[32m+[m[32m    />[m
   </head>[m
[32m+[m
   <body>[m
     <div id="root"></div>[m
     <script type="module" src="/src/main.jsx"></script>[m
[1mdiff --git a/src/main.jsx b/src/main.jsx[m
[1mindex b9a1a6d..d162aa3 100644[m
[1m--- a/src/main.jsx[m
[1m+++ b/src/main.jsx[m
[36m@@ -1,10 +1,46 @@[m
[31m-import { StrictMode } from 'react'[m
[31m-import { createRoot } from 'react-dom/client'[m
[31m-import './index.css'[m
[31m-import App from './App.jsx'[m
[31m-[m
[31m-createRoot(document.getElementById('root')).render([m
[31m-  <StrictMode>[m
[31m-    <App />[m
[31m-  </StrictMode>,[m
[31m-)[m
[32m+[m
[32m+[m[32mimport { useEffect } from 'react'[m
[32m+[m
[32m+[m[32mfunction SEO({ title, description, path = '/' }) {[m
[32m+[m[32m  useEffect(() => {[m
[32m+[m[32m    const baseUrl = 'https://calendar-azure-psi.vercel.app'[m
[32m+[m[32m    const canonicalUrl = `${baseUrl}${path}`[m
[32m+[m
[32m+[m[32m    document.title = title[m
[32m+[m
[32m+[m[32m    const updateMeta = (attribute, key, content) => {[m
[32m+[m[32m      let element = document.head.querySelector([m
[32m+[m[32m        `meta[${attribute}="${key}"]`[m
[32m+[m[32m      )[m
[32m+[m
[32m+[m[32m      if (!element) {[m
[32m+[m[32m        element = document.createElement('meta')[m
[32m+[m[32m        element.setAttribute(attribute, key)[m
[32m+[m[32m        document.head.appendChild(element)[m
[32m+[m[32m      }[m
[32m+[m
[32m+[m[32m      element.setAttribute('content', content)[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    updateMeta('name', 'description', description)[m
[32m+[m[32m    updateMeta('property', 'og:title', title)[m
[32m+[m[32m    updateMeta('property', 'og:description', description)[m
[32m+[m[32m    updateMeta('property', 'og:url', canonicalUrl)[m
[32m+[m[32m    updateMeta('property', 'og:type', 'website')[m
[32m+[m[32m    updateMeta('name', 'twitter:card', 'summary')[m
[32m+[m
[32m+[m[32m    let canonical = document.querySelector('link[rel="canonical"]')[m
[32m+[m
[32m+[m[32m    if (!canonical) {[m
[32m+[m[32m      canonical = document.createElement('link')[m
[32m+[m[32m      canonical.rel = 'canonical'[m
[32m+[m[32m      document.head.appendChild(canonical)[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    canonical.href = canonicalUrl[m
[32m+[m[32m  }, [title, description, path])[m
[32m+[m
[32m+[m[32m  return null[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default SEO[m
