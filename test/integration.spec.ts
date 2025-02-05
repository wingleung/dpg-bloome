import { describe, expect, it } from 'vitest'

import { Item, Shop } from '../app'

describe('empty state', () => {
  it('should return an empty array when no items are given', () => {
    const gildedRose = new Shop()

    const items = gildedRose.updateQuality()

    expect(items).toBe(items)
  })
})

describe('default item', () => {
  it('should decrease quality by 1', () => {
    const defaultItem = new Item('foo', 1, 2)
    const gildedRose = new Shop([defaultItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('foo')
    expect(updatedItem.sellIn).toBe(0)
    expect(updatedItem.quality).toBe(1)
  })

  it('should decrease quality by 2 when sell date expires', () => {
    const defaultItem = new Item('foo', 0, 2)
    const gildedRose = new Shop([defaultItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('foo')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(0)
  })

  it('should floor quality at 0', () => {
    const defaultItem = new Item('foo', 0, 0)
    const gildedRose = new Shop([defaultItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('foo')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(0)
  })
})

describe('Sulfuras, Hand of Ragnaros item', () => {
  it('should leave quality untouched', () => {
    const sulfurasItem = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    const gildedRose = new Shop([sulfurasItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Sulfuras, Hand of Ragnaros')
    expect(updatedItem.sellIn).toBe(0)
    expect(updatedItem.quality).toBe(80)
  })

  it('should leave quality untouched when sell date expires', () => {
    const sulfurasItem = new Item('Sulfuras, Hand of Ragnaros', -1, 80)
    const gildedRose = new Shop([sulfurasItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Sulfuras, Hand of Ragnaros')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(80)
  })
})

describe('Aged Brie item', () => {
  it('should increase quality by 1', () => {
    const agedBrieItem = new Item('Aged Brie', 1, 0)
    const gildedRose = new Shop([agedBrieItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Aged Brie')
    expect(updatedItem.sellIn).toBe(0)
    expect(updatedItem.quality).toBe(1)
  })

  it('should limit max quality at 50', () => {
    const agedBrieItem = new Item('Aged Brie', 0, 50)
    const gildedRose = new Shop([agedBrieItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Aged Brie')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(50)
  })

  it('should increase quality by 2 when sell date expires', () => {
    const agedBrieItem = new Item('Aged Brie', 0, 0)
    const gildedRose = new Shop([agedBrieItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Aged Brie')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(2)
  })

  it('should limit max quality at 50 when sell date expires', () => {
    const agedBrieItem = new Item('Aged Brie', 0, 49)
    const gildedRose = new Shop([agedBrieItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Aged Brie')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(50)
  })
})

describe('Backstage passes to a TAFKAL80ETC concert item', () => {
  it('should set quality to 0 when sell date expires', () => {
    const backStageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
    const gildedRose = new Shop([backStageItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(0)
  })

  it('should increase quality by 1', () => {
    const backStageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 0)
    const gildedRose = new Shop([backStageItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(updatedItem.sellIn).toBe(10)
    expect(updatedItem.quality).toBe(1)
  })

  it('should increase quality by 2 when sell date expires in 10 days', () => {
    const backStageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 0)
    const gildedRose = new Shop([backStageItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(updatedItem.sellIn).toBe(5)
    expect(updatedItem.quality).toBe(2)
  })

  it('should increase quality by 3 when sell date expires in 5 days', () => {
    const backStageItem = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 0)
    const gildedRose = new Shop([backStageItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Backstage passes to a TAFKAL80ETC concert')
    expect(updatedItem.sellIn).toBe(0)
    expect(updatedItem.quality).toBe(3)
  })
})

describe('Conjured item', () => {
  it('should decrease quality by 2', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 1, 2)
    const gildedRose = new Shop([conjuredItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Conjured Mana Cake')
    expect(updatedItem.sellIn).toBe(0)
    expect(updatedItem.quality).toBe(0)
  })

  it('should decrease quality by 4 when sell date expires', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 0, 8)
    const gildedRose = new Shop([conjuredItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Conjured Mana Cake')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(4)
  })

  it('should floor quality at 0', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 0, 0)
    const gildedRose = new Shop([conjuredItem])

    const [updatedItem] = gildedRose.updateQuality()

    expect(updatedItem.name).toBe('Conjured Mana Cake')
    expect(updatedItem.sellIn).toBe(-1)
    expect(updatedItem.quality).toBe(0)
  })
})
