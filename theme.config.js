export default {
  repository: 'https://github.com/tabascoes/akira-ssbwiki',
  docsRepository: 'https://github.com/tabascoes/akira-ssbwiki',
  titleSuffix: ' – SSBWiki',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">UtamakeWikiPortal</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        For beginner to senior
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="jp" />
      <meta name="description" content="SSBWiki: UtamakeWikiPortal is official wiki of utamake world." />
      <meta name="og:description" content="SSBWiki: UtamakeWikiPortal is official wiki of utamake world" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/tabascoes/akira-ssbwiki/main/public/UtamakePages.png?raw=true" />
      <meta name="twitter:site:domain" content="utamake.minecraftr.us" />
      <meta name="twitter:url" content="https://utamake.minecraftr.us" />
      <meta name="og:title" content="SSBWiki: UtamakeWikiPortal is official wiki of utamake world." />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="SSBWiki" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  defaultMenuCollapsed: true,
  floatTOC: false,
  font: false,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerEditOnGitHubText: 'See/Edit on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
  i18n: [
    { locale: 'jp', text: '日本語' },
    { locale: 'en', text: 'English' },
  ]
}
