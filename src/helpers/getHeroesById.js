import { heroes } from '../data/heroes'

export const getHeroesById = (heroId) => {
  return heroes.find(x => x.id === heroId);  
}
