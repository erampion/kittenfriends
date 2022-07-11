import React from 'react';

const Card = ({name, house, species}) => {
  return (
    <div className="bg-moon-gray dib br3 pa3 ma2 grow bw5 shadow-5 tc">
      <img className='br4' alt="robot" src={`https://robohash.org/${name}/set_set4/bgset_bg1/2.4?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <h3>{house}</h3>
        <h3 className='bg-silver pa3'>{species}</h3>
      </div>
    </div>
    
  );
}

export default Card;