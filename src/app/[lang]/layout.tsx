import type { Metadata } from 'next'
import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'

import { getServerLocale } from '@/hooks'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import './styles/index.css'


export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://docs.playonvector.com/en/docs'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/vector-org/'

const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
  return (
    <Banner
      storageKey="starter-banner"
    />
  )
}


const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
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

  const { t } = await getServerLocale(lang)

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
          darkMode={false}
          nextThemes={{
            attribute: 'class',
            defaultTheme: 'light',
            forcedTheme: 'light',
            disableTransitionOnChange: true,
            storageKey: 'starter-theme-provider',
          }}
          toc={{
            backToTop: t('backToTop'),
            title: t('pageTitle'),
          }}
          pageMap={pageMap}
          feedback={{ content: '' }}
        >
          {children}
        </Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
