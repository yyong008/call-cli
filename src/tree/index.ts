import _tree from 'tree-cli'

export async function tree() {
  const data = await _tree({
    base: process.cwd(),
  })
  console.log(data.report)
}
