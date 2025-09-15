import Path from 'node:path'
import URL from 'node:url'
import _ from 'lodash'

export function getPathFromUrl(url: string): string {
  const rawPath = URL.fileURLToPath(url, { windows: false })
  const rawPathChunks = rawPath
    .split(Path.posix.sep)
    .filter(v => v)
  const isWindows = (rawPathChunks[0] ?? '').endsWith(':')
  const parsedPath = isWindows
    ? _
        .chain(rawPath)
        .trimStart(Path.posix.sep)
        .replace(
          new RegExp(_.escapeRegExp(Path.posix.sep), 'giu'),
          Path.win32.sep,
        )
        .value()
    : rawPath
  return parsedPath
}
