import { Item } from './index'

class AgedBrieItem extends Item {
  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality)
  }

  updateQuality() {
    this.sellIn--
    this.quality += this.isExpired() ? 2 : 1
    this.quality = this.boundQuality(this.quality)
  }
}

export { AgedBrieItem }
