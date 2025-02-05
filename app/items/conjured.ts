import { Item } from './index'

class ConjuredItem extends Item {
  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality)
  }

  updateQuality() {
    this.sellIn--
    this.quality -= this.isExpired() ? 4 : 2
    this.quality = this.boundQuality(this.quality)
  }
}

export { ConjuredItem }
