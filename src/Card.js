import React from 'react';

const Card = ({ name, email, id }) => {
    return (
      <div className='bg-light-silver dib br3 ba b--dark-gray bw1 pa2 ma1 grow shadow-5 tc'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div className='w5'>
          <h3>{name}</h3>
          <span>{email}</span>
        </div>
      </div>
    )
}

export default Card;