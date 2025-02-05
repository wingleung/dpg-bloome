import { Item } from './index'

class SulfurasItem extends Item {
  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality)
  }

  updateQuality() {
    // do nothing
  }
}

export { SulfurasItem }
