import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Display = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given.</p>
      </div>
    );
  } else {
    let all = good + neutral + bad;
    let avg = (good - bad) / 3;
    let positive = good / all;
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text={"good"} value={good}/>
            <Statistic text={"neutral"} value={neutral}/>
            <Statistic text={"bad"} value={bad}/>
            <Statistic text={"total"} value={all}/>
            <Statistic text={"average"} value={avg.toFixed(2)}/>
            <Statistic text={"positive"} value={(positive * 100).toFixed(2) + " %"}/>
          </tbody>
        </table>
      </div>
    );
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (what, set) => () => {
    set(what + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increment(good, setGood)} text={"good"}/>
      <Button handleClick={increment(neutral, setNeutral)} text={"neutral"}/>
      <Button handleClick={increment(bad, setBad)} text={"bad"}/>
      <Display good={good} neutral={neutral} bad={bad}/>
   </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)