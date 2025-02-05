import { Item } from './index'

class BackStageItem extends Item {
  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality)
  }

  updateQuality() {
    this.sellIn--

    if (this.isExpired()) {
      this.quality = 0
    } else {
      this.quality++
      this.sellIn < 10 && this.quality++
      this.sellIn < 5 && this.quality++
      this.quality = this.boundQuality(this.quality)
    }
  }
}

export { BackStageItem }
