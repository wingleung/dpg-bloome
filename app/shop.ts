import type { ItemFactory } from './factories'
import type { Item } from './items'

import { defaultItemFactory } from './factories'

class Shop {
  constructor(
    public items: Item[] = [],
    private readonly itemFactory: ItemFactory = defaultItemFactory
  ) {
    // So in reality, I would talk to the goblin and check with him if I can change the Items property.
    // For the purposes of this exercise, I talked to the goblin in my head and he said it's fine :-)

    this.items = items.map(this.itemFactory)
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality?.()
    }

    return this.items
  }
}

export { Shop }
