import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location =  useLocation();

  const {q = ''} = queryString.parse(location.search);  

  const hero = useMemo( () => getHeroesByName(q), [q] );
  
  const initialForm = {
    searchText: q
  };
  
  const [ {searchText}, handleInputChange ] = useForm( initialForm );
  

  const handleSearch = (e) => {
    e.preventDefault();
    

    navigate(`?q=${searchText}`);

  }
  


  return (
    <div>
        <h1>Search Screen</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>
            <h4>Search</h4>
            <hr/>

            <form onSubmit={handleSearch}>
              <input
                  type="text"
                  placeholder='Search a Hero'
                  className='form-control'
                  name='searchText'
                  autoComplete='off'
                  value={searchText}
                  onChange={handleInputChange}
              />

              <button 
                className='btn btn-outline-primary mt-1 '
                type='submit'
              >
                Search...
              </button>

            </form>

          </div>
          <div className='col-7'>
            <h4>Results</h4>
            <hr/>

            {
              ( q.length === 0 ) ? <div className='alert alert-info'>Search Something {q}</div> :
              ( hero.length === 0 ) && <div className='alert alert-danger'>No results: {q}</div>
            }

            {
                hero.map( hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
          </div>
        </div>
    </div>
  )
}
