import React from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  
  const heroListX = getHeroesByPublisher(publisher);   

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroListX.map( hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
    </div>
  )
}