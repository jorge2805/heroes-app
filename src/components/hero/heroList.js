import React from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {
  
  const heroListX = getHeroesByPublisher(publisher);   

  return (
    <>
        <ul>
            {
                heroListX.map( hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    </>
  )
}
