import { defineConfig } from 'vitepress'
import sidebarUserDocs from './sidebar-user-docs.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Vector Docs",
  description: "Comprehensive documentation for Vector ecosystem",

  ignoreDeadLinks: true,
  cleanUrls: true,
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }]
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: {
      "/": sidebarUserDocs
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vector-org/vector-external-docs' }
    ],
  }
})
