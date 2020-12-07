import React from 'react';

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  );
}

const Part = ({name, exercises}) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part name={part.name} exercises={part.exercises}/>)}
    </div>
  );
}

const Total = ({parts}) => (
  <div>
    <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
  </div>
);

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}


export default Course;