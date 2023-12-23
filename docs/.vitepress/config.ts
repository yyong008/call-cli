import { defineConfig } from 'vitepress'
import { base } from './base'
import {commands} from './commands'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '🌠iCall Cli',
  description: 'A convenient CLI',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'base', link: '/base/intro' },
      { text: 'commands', link: '/commands/index' },
    ],

    sidebar: {
      "/base/": base,
      "/commands/": commands,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyong008/call-cli' },
    ],
  },
})
