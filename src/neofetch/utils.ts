import * as os from 'os'
import { execSync } from 'child_process'

const PLATFORM: NodeJS.Platform = process.platform

interface GPUInfo {
  name: string
}

export interface SystemInfo {
  Username: string
  Host: string
  OS: string
  Build: string
  Uptime: string
  CPU: string
  RAM: string
  Motherboard?: string
  GPUS: string[] | GPUInfo[]
  Resolution?: string
}

export const captureSystemInfo = (): SystemInfo => {
  const build: string = os.release()
  const totalmem: number = Math.floor(os.totalmem() / 2 ** 20)
  const usedmem: number = Math.floor(totalmem - os.freemem() / 2 ** 20)

  let seconds: number = os.uptime()
  const days: number = Math.floor(seconds / 86400)
  seconds -= days * 86400
  const hours: number = Math.floor(seconds / 3600)
  seconds -= hours * 3600
  const minutes: number = Math.floor(seconds / 60)
  seconds -= minutes * 60

  const infs: SystemInfo = {
    Username: os.userInfo().username,
    Host: os.hostname(),
    OS: `${os.version()} ${os.arch()}`,
    Build: build,
    Uptime: `${days} Days, ${hours} Hours, ${minutes} Mins, ${seconds} Secs`,
    CPU: os.cpus()[0].model,
    RAM: `${usedmem}MB / ${totalmem}MB (${Math.floor(
      (usedmem / totalmem) * 100
    )}%)`,
    GPUS: [],
  }

  if (PLATFORM === 'win32') {
    infs.Motherboard = execSync(
      'wmic path win32_BaseBoard get Manufacturer,Product'
    )
      .toString()
      .split('\n')[1]
      .trim()
    infs.GPUS = execSync('wmic path win32_VideoController get name')
      .toString()
      .trim()
      .split(/\r?\n/g)
      .slice(1)
  }

  if (PLATFORM === 'darwin') {
    const gpuInfo = execSync(
      'system_profiler SPDisplaysDataType | grep Chipset'
    ).toString()
    // Parse GPU info as needed
    infs.GPUS = gpuInfo as unknown as GPUInfo[]
  }

  return infs
}
