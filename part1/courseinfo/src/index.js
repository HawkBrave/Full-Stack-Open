import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const Part = props => (
  <p>
    {props.name} {props.exercise}
  </p>
)

const Content = props => {
  let parts = _.zip(props.names, props.exercises).map(val => (
    <Part name={val[0]} exercise={val[1]} />
  ));
  return (
    <div>
      {parts}
    </div>
  );
};
 

const Total = props => (
  <div>
    <p>Number of exercises {props.total}</p>
  </div>
);

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <Content names={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));