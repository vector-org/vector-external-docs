export default {
  systemTitle: 'VECTOR Docs',

  pageTitle: 'On This Page',
  backToTop: 'Back to top',

  badgeTitle: 'VECTOR Documentation',
  featureSupport: `Guides for {{feature}}`,
  lastUpdated: 'Last updated on:',

  getStarted: 'Get Started',

  themeSwitcher: {
    light: 'Light Mode',
    dark: 'Dark Mode',
    lightAria: 'Switch to light mode',
    darkAria: 'Switch to dark mode',
  },

  featureList: [
    {
      title: 'Player Setup',
      description: 'Step-by-step guidance for installing VECTOR, creating an account, backing up recovery details, and managing a game library.',
    },
    {
      title: 'Developer Onboarding',
      description: 'Practical setup notes for studios integrating VECTOR licensing and launch flows into their games.',
    },
    {
      title: 'Engine Integrations',
      description: 'Unity, Unreal, and custom integration material for validating game access with the VECTOR client.',
    },
    {
      title: 'Runtime DRM Notes',
      description: 'Documentation for token locations, validation flow, and expected startup behavior across supported platforms.',
    },
    {
      title: 'Troubleshooting',
      description: 'Common setup, launch, wallet, and integration issues collected into concise reference pages.',
    },
    {
      title: 'Public Reference',
      description: 'A lightweight documentation site for external users without private credentials, local tokens, or internal setup notes.',
    },
    {
      title: 'Platform Concepts',
      description: 'Clear explanations of accounts, recovery phrases, licenses, purchases, and library sync behavior.',
    },
    {
      title: 'Integration Examples',
      description: 'Copyable snippets and implementation guidance for teams adding VECTOR checks to game startup paths.',
    },
    {
      title: 'Maintained Docs Portal',
      description: 'Built as the source of truth for external VECTOR docs, with content organized by gamer and developer workflows.',
    },
  ],
  featuresDesc: 'Find the right VECTOR guide for player setup, developer integration, and runtime troubleshooting.',
  faqs: [
    {
      question: 'What is this documentation for?',
      answer: 'This site explains how gamers and developers use VECTOR, including account setup, game library access, and integration flows.',
    },
    {
      question: 'Where should players start?',
      answer: 'Start with the Gamers section for installation, account creation, recovery phrase backup, purchases, and library sync.',
    },
    {
      question: 'Where should developers start?',
      answer: 'Start with the Developers section for integration requirements, engine-specific guides, and DRM validation notes.',
    },
    {
      question: 'Which game engines are covered?',
      answer: 'The docs currently include Unity and Unreal integration guidance, plus a custom integration path for other runtimes.',
    },
    {
      question: 'Are DRM token files committed here?',
      answer: 'No. Runtime DRM tokens are generated on the user machine by the VECTOR client and should never be committed to this repository.',
    },
    {
      question: 'How should documentation issues be reported?',
      answer: 'Use the VECTOR GitHub organization or the project issue tracker once the public repository is available.',
    },
    {
      question: 'Does this repository need private environment values?',
      answer: 'No. The public docs should build without private credentials, local token files, or internal deployment secrets.',
    },
  ],

}
