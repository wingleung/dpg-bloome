import type { Item } from '../items'

type ItemFactory = (item: Item) => Item

export type { ItemFactory }

export * from './default-item'
