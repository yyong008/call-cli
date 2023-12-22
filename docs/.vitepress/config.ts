import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '🌠iCall Cli',
  description: 'A convenient CLI',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'base', link: '/base/intro' },
      { text: 'command', link: '/command/index' },
    ],

    sidebar: [
      {
        text: 'base',
        items: [{ text: 'intro', link: '/base/intro' }],
      },
      {
        text: 'command',
        items: [
          { text: 'cat', link: '/cat' },
          { text: 'cd', link: '/cd' },
          { text: 'cowsay', link: '/cowsay' },
          { text: 'cp', link: '/cp' },
          { text: 'day', link: '/day' },
          { text: 'exec', link: '/exec' },
          { text: 'history', link: '/history' },
          { text: 'kill', link: '/kill' },
          { text: 'ls', link: '/ls' },
          { text: 'mkdir', link: '/mkdir' },
          { text: 'mv', link: '/mv' },
          { text: 'neofetch', link: '/neofetch' },
          { text: 'ping', link: '/ping' },
          { text: 'ps', link: '/ps' },
          { text: 'rm', link: '/rm' },
          { text: 'top', link: '/top' },
          { text: 'touch', link: '/touch' },
          { text: 'unzip', link: '/unzip' },
          { text: 'wget', link: '/wget' },
          { text: 'which', link: '/which' },
          { text: 'whoami', link: '/whoami' },
          { text: 'qrcode', link: '/qrcode' },
          { text: 'tree', link: '/tree' },
          { text: 'ipconfig', link: '/ipconfig' },
          { text: 'hash', link: '/hash' },
          { text: 'x', link: '/x' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyong008/call-cli' },
    ],
  },
})
