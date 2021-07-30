import {useState} from 'react';


export const useLevel = () => {

  const cardsFill = (length) => {
    let arr = new Array(length);
    for(let i = 0; i < arr.length; i++){
      arr[i] = i + 1;
    };
    return arr;
  };

  const [cardAmount, setCardAmount] = useState(3);
  const [cards, setCards] = useState(cardsFill(cardAmount));

  const shuffleCards = array => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    };
    return array;
  };

  return [cardAmount, cards, shuffleCards, setCardAmount, setCards, cardsFill];
};