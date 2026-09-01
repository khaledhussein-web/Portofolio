import { describe, expect, it } from 'vitest'
import { projectGalleries } from '../../src/data/photos'
import { projectFilters, projects } from '../../src/data/projects'

describe('portfolio project data', () => {
  it('uses unique project identifiers and display numbers', () => {
    expect(new Set(projects.map(({ id }) => id)).size).toBe(projects.length)
    expect(new Set(projects.map(({ number }) => number)).size).toBe(projects.length)
    expect(projects.map(({ number }) => number)).toEqual(['01', '02', '03', '04', '05'])
  })

  it('keeps every category available through the project filters', () => {
    const categories = new Set(projects.flatMap(({ category }) => category))

    categories.forEach((category) => {
      expect(projectFilters).toContain(category)
    })
  })

  it('contains complete, uniquely addressable gallery images', () => {
    const photos = projectGalleries.flatMap((gallery) => gallery.photos)

    expect(projectGalleries.map(({ project }) => project)).toEqual([
      'Cedaré',
      'Skincare AI Assistant',
      'Fabrics E-commerce Website',
    ])
    expect(photos).toHaveLength(11)
    expect(new Set(photos.map(({ src }) => src)).size).toBe(photos.length)
    photos.forEach((photo) => {
      expect(photo.src).toMatch(/^\/photos\/projects\/.+\.png$/)
      expect(photo.alt).not.toHaveLength(0)
      expect(photo.title).not.toHaveLength(0)
    })
  })
})
