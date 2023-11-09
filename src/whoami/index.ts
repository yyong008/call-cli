import * as os from 'os'

export function whoami() {
  const username = os.userInfo().username
  console.log(username)
}
