import React from "react";
import Card from "./Card";

const CardList = ( {kitten} ) => {
  return (
    <div>
      {
        kitten.map((user, i) => {
          return (
            <Card 
              key={kitten[i].id} 
              // id={kitten[i].id} 
              name={kitten[i].name} 
              house={kitten[i].house}
              species={kitten[i].species}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;