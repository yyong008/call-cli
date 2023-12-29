import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import react from '@vitejs/plugin-react'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
console.log(__dirname)
const root = process.cwd()

export const vite = async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: root || __dirname,
    server: {
      port: 1337,
    },
    plugins: [vue(), vueJsx(), react()],
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
}
