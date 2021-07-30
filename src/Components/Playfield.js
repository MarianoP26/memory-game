import React from 'react';
import Card from './Card';
import './Playfield.css';

const Playfield = ({shuffledCards, showValues, check}) => {
  return (
    <div className="game-container">
      {shuffledCards.map((value, index) => {
        return (
          <Card value={value} key={index} showValues={showValues} check={check}/>
        )
      })}
    </div>
  )
}

export default Playfield;
