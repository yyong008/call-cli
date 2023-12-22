import ping from 'ping'
import { successMessage, errorMessage } from '../../utils/color'

export function useHosts(hosts: string[]) {
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive: boolean) {
      const msg = isAlive
        ? 'host ' + successMessage(host) + ' is ' + successMessage('alive')
        : 'host ' + errorMessage(host) + ' is ' + errorMessage('dead')
      console.log(msg)
    })
  })
}
