import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import _, { set } from 'lodash'

const Part = ({name, exercise}) => (
  <p>
    {name} {exercise}
  </p>
)

const Content = ({names, exercises}) => {
  let parts = _.zip(names, exercises).map(val => (
    <Part name={val[0]} exercise={val[1]} />
  ));
  return (
    <div>
      {parts}
    </div>
  );
}

const Total = ({total}) => (
  <div>
    <p>Number of exercises {total}</p>
  </div>
);

const Button = ({id, handleClick, text}) => (
  <button className="button" id={id} onClick={handleClick}>
    {text}
  </button>
)

const Display = ({counter, allClicks}) => {
  let clicks = "none";
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <p>All clicks made: {allClicks.length > 0 ? allClicks : clicks}</p>
    </div>
  );
}

const Wrapper = ({children}) => (
  <div className="wrapper">
    {children}
  </div>
)

const App = () => {
  const [counter, setCounter] = useState(0);
  const [allClicks, setAll] = useState([]);

  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

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
      <h1>{course}</h1>
      <Display counter={counter} allClicks={allClicks}/>
      <Content names={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
      <Wrapper>
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
  )
}

ReactDOM.render(<App />, document.getElementById('root'));