import React from 'react';

const Header = ({ cardAmount }) => {
  
  let amount = cardAmount - 1;
  if(amount < 3) amount = 3;
  return (
    <div>
      <h1>Total cards: {amount}</h1>
    </div>
  )
}

export default Header;
