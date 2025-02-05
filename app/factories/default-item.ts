import { AgedBrieItem, BackStageItem, ConjuredItem, Item, ItemTypes, SulfurasItem } from '../items'

const defaultItemFactory = (item: Item): Item => {
  switch (item.name) {
    case ItemTypes.AGED_BRIE:
      return new AgedBrieItem(item)

    case ItemTypes.BACKSTAGE_PASS:
      return new BackStageItem(item)

    case ItemTypes.CONJURED:
      return new ConjuredItem(item)

    case ItemTypes.SULFURAS:
      return new SulfurasItem(item)

    default:
      return new Item(item.name, item.sellIn, item.quality)
  }
}

export { defaultItemFactory }
