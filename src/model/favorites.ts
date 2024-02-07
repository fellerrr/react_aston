export interface Item {
  id: number
  name: string
  image: string
  status: string
  species: string
  type: string
  gender: string
}

export function getFavorites(userEmail: string): Item[] {
  return JSON.parse(localStorage.getItem(`favorites-${userEmail}`) || '[]')
}

export function isItemInFavorites(id: number, userEmail: string): boolean {
  const favorites = getFavorites(userEmail)
  return favorites.some((item: Item) => item.id === id)
}

export function updateFavorites(item: Item, inFavorite: boolean, userEmail: string): void {
  let favorites = getFavorites(userEmail)
  if (inFavorite) {
    if (!isItemInFavorites(item.id, userEmail)) {
      favorites.push(item)
    }
  } else {
    favorites = favorites.filter((favItem: Item) => favItem.id !== item.id)
  }
  if (userEmail) {
    localStorage.setItem(`favorites-${userEmail}`, JSON.stringify(favorites))
  }
}
