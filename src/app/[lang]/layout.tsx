import type { Metadata } from 'next'
import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { Analytics } from '@vercel/analytics/react'
import { LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'

import { useServerLocale } from '@/hooks'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'


export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://docs.playonvector.com/en/docs'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/vector-org/'

const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Banner
      storageKey="starter-banner"
    />
  )
}


const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Navbar
      logoLink={`/${lang}`}
      projectLink={repo}
      logo={undefined}
    >
      <>
        {/* LocaleToggle removed (single language) */}
        {/* ThemeToggle removed (light mode only) */}
      </>

    </Navbar>
  )
}

// interface Props {
//   children: ReactNode
//   params: Promise<{ lang: I18nLangKeys }>
// }

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const getterParams = await params

  const { lang } = getterParams as { lang: I18nLangKeys }

  await getDictionary(lang)
  const pageMap = await getPageMap(lang)

  const title = 'VECTOR | Documentation'
  const description = 'Documentation for the VECTOR platform'

  const { t } = await useServerLocale(lang)

  return (
    <html
      // Not required, but good for SEO
      lang={lang}
      // Required to be set
      // dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      dir={getDirection(lang)}
      suppressHydrationWarning
    >
      <Head>
        {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={repo} />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="starter-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            banner={
              <CustomBanner lang={lang} />
            }
            navbar={
              <CustomNavbar lang={lang} />
            }
            lastUpdated={(
              <LastUpdated>
                { t('lastUpdated') }
              </LastUpdated>
            )}
            editLink={null}
            docsRepositoryBase="https://github.com/vector-org"
            footer={(
              <CustomFooter />
            )}
            search={<Search />}
            i18n={[]}
            toc={{
              backToTop: t('backToTop'),
              title: t('pageTitle'),
            }}
            themeSwitch={{}}
            pageMap={pageMap}
            feedback={{ content: '' }}
          >
            {children}
          </Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
