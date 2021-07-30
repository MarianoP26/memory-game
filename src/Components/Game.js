import React, {useState, useEffect} from 'react';
import {useLevel} from '../useLevel';
import Header from './Header';
import Playfield from './Playfield';

const Game = () => {

  const [cardAmount, cards, shuffleCards, setCardAmount, setCards, cardsFill] = useLevel();

  const [shuffledCards, setShuffledCards] = useState([]);
  const [showValues, setShowValues] = useState(true);
  const [playerOrder, setPlayerOrder] = useState(1);

  useEffect(()=>{
    setShuffledCards(shuffleCards(cards));
  },[cards]);

  const check = (value, e) => {
    if(showValues){
      return;
    }
    console.log('Expected: ',playerOrder, ' Received: ',value);
    if(playerOrder === value){
      if(value === shuffledCards.length){
        console.log('ganaste');
        setShowValues(!showValues);
        setCardAmount(prevState => prevState + 1);
        setCards(cardsFill(cardAmount));
        setPlayerOrder(1);
      } else{
        setPlayerOrder(prevPlayerOrder => prevPlayerOrder + 1);
        e.target.className="card-right";
      }
    } else{
      //Game over
      console.log('perdiste');
      e.target.className="card-wrong";
      setShowValues(!showValues);
      setCardAmount(3);
      setCards(cardsFill(cardAmount));
      setPlayerOrder(1);
    }
  };

  return (
    <div className="game">
      <div>
        <Header cardAmount={cardAmount}/>
      </div>
      <div className="game-container">
        <Playfield shuffledCards={shuffledCards} showValues={showValues} check={check}/>
      </div>
      <div className="btn-container">
        {showValues && (
          <button className="btn-ready" onClick={() => setShowValues(!showValues)}>
          Ready
          </button>
        )}  
      </div>
    </div>
  )
}

export default Game;
