import React, { useState } from 'react';

const Display = ({counter, allClicks}) => {
  let clicks = "none";
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <p>All clicks made: {allClicks.length > 0 ? allClicks : clicks}</p>
    </div>
  );
}

const Wrapper = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
}


const Button = ({id, handleClick, text}) => (
  <button className="button" id={id} onClick={handleClick}>
    {text}
  </button>
)

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [allClicks, setAll] = useState([]);

  const incr = () => {
    setAll(allClicks.concat('inc '));
    setCounter(counter + 1);
  }
  const decr = () => {
    setAll(allClicks.concat('decr '));
    setCounter(counter > 0 ? counter - 1 : 0);
  }
  const setzero = () => {
    setAll([]);
    setCounter(0);
  }

  return (
    <div>
      <Display counter={counter} allClicks={allClicks}/>
      <Wrapper className={"wrapper"}>
        <Button 
          handleClick={incr}
          id={"incr"}
          text={"increment counter"}
        />
        <Button 
          handleClick={decr}
          text={"decrement counter"}
        />
        <Button 
          handleClick={setzero}
          text={"set to zero"}
        />
      </Wrapper>
    </div>
  );
}

export default Counter;