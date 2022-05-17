import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  
  const heroListX = useMemo(() => getHeroesByPublisher(publisher), [publisher]);   

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
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
