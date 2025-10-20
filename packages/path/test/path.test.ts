import { expect } from 'chai'
import { describe, it } from 'mocha'
import { getPathFromUrl } from '../dist/path.js'

describe('📦 [path] getPathFromUrl', () => {
  describe('⭐ Normal cases', () => {
    it('🧪 Convert Windows file URL', () => {
      const fileUrl = 'file:///C:/Users/test/Documents/file.txt'
      const result = getPathFromUrl(fileUrl)
      expect(result).to.equal('C:\\Users\\test\\Documents\\file.txt')
    })

    it('🧪 Convert Unix/Linux-like file URL', () => {
      const fileUrl = 'file:///home/user/documents/file.txt'
      const result = getPathFromUrl(fileUrl)
      expect(result).to.equal('/home/user/documents/file.txt')
    })
  })
})
