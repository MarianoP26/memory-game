import React, { useState, useEffect, useRef } from 'react';

const Card = ({value, showValues, check}) => {

  const [selected, setSelected] = useState(false);
  const divRef = useRef(null);

  const emit = (value, e) => {
    setSelected(true);
    check(value, e);
  };

  useEffect(()=>{
    setSelected(false);
    divRef.current.className = "card";
  },[showValues]);

  return (
    <div className="card" ref={divRef} onClick={(e) => emit(value, e)}>
      <h1>{showValues ? value : ''}</h1>
      {selected && (
        <h1>{showValues ? '' : value}</h1>
      )}
    </div>
  )
}

export default Card;
