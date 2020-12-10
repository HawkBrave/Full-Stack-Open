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
    <p><b>Total number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</b></p>
  </div>
);

const Course = ({courses}) => {
  return (
    <div>
      {
        courses.map(course => (
          <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
          </div>
        ))
      }
    </div>
  );
}


export default Course;