import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../helpers/getHeroesById';

export const DetailsHero = () => {
  
  const {Id} = useParams();

  const myHero = getHeroesById(Id);

  const navigate = useNavigate();

  const handleReturn = () => {
    return navigate(-1);
  }


  if (!myHero) {
    return <Navigate to='/'/>
  }
  
  const imgPath = `/assets/Img/${myHero.id}.jpg`;



  return (
    <div className='row mt-5'>
        <div className='col-4'>
          <img 
            src={imgPath}
            alt={myHero.superhero}
            className="img-thumbnail"
          />
        </div>

        <div className='col-8'>
          <h3>{myHero.superhero}</h3>
          <ul className='list-group'>
            <li className='list-group-item'><b>Alter ego:</b> {myHero.alter_ego} </li>
            <li className='list-group-item'><b>Publisher:</b> {myHero.publisher} </li>
            <li className='list-group-item'><b>first appearance:</b> {myHero.first_appearance} </li>
          </ul>

          <br/>

          <h5>Characters</h5>
          <p>{myHero.characters}</p>

          <button
            className='btn btn-outline-info'
            onClick={handleReturn}
          >
            Return
          </button>

        </div>

    </div>
  )
}