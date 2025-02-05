import { describe, expect, it } from 'vitest'

import { Item, Shop } from '../app'

const PERFORMANCE_THRESHOLD = 1

function benchmark(fn: () => void, iterations = 1000): number {
  const start = performance.now()
  for (let i = 0; i < iterations; i++) {
    fn()
  }
  const end = performance.now()
  return (end - start) / iterations // Average time per operation in milliseconds
}

describe('Performance Tests', () => {
  describe('empty state', () => {
    it('should benchmark empty shop performance', () => {
      const gildedRose = new Shop()

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Empty shop',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('default item', () => {
    it('should benchmark default item performance', () => {
      const defaultItem = new Item('foo', 1, 2)
      const gildedRose = new Shop([defaultItem])

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Default item',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('Sulfuras performance', () => {
    it('should benchmark Sulfuras performance', () => {
      const sulfurasItem = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
      const gildedRose = new Shop([sulfurasItem])

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Sulfuras',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('Aged Brie performance', () => {
    it('should benchmark Aged Brie performance', () => {
      const agedBrieItem = new Item('Aged Brie', 1, 0)
      const gildedRose = new Shop([agedBrieItem])

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Aged Brie',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('Backstage passes performance', () => {
    it('should benchmark Backstage passes performance', () => {
      const backStageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0)
      const gildedRose = new Shop([backStageItem])

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Backstage passes',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('Conjured item performance', () => {
    it('should benchmark Conjured item performance', () => {
      const conjuredItem = new Item('Conjured', 1, 2)
      const gildedRose = new Shop([conjuredItem])

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Conjured item',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })

  describe('Mixed items performance', () => {
    it('should benchmark shop with multiple items', () => {
      const items = [
        new Item('+5 Dexterity Vest', 10, 20),
        new Item('Aged Brie', 2, 0),
        new Item('Sulfuras, Hand of Ragnaros', 0, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
        new Item('Conjured', 3, 6),
      ]
      const gildedRose = new Shop(items)

      const avgTime = benchmark(() => {
        gildedRose.updateQuality()
      })

      expect(avgTime).toBeLessThan(PERFORMANCE_THRESHOLD)
      expect({
        name: 'Mixed items',
        avgTime,
        withinThreshold: avgTime < PERFORMANCE_THRESHOLD,
      }).toMatchSnapshot({ avgTime: expect.any(Number) })
    })
  })
})
