import './App.css'
import { useState, useEffect } from 'react'
import Options from '../Options/Options';
import Description from '../Description/Description'
import Notification from '../Notification/Notification'
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [click, setClick] = useState(() => {
    const savedClick = localStorage.getItem("clickCount");
    if (savedClick !== null) {
      return JSON.parse(savedClick);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  useEffect(() => {
    localStorage.setItem("clickCount", JSON.stringify(click))
  }, [click]);

	
  const updateG = () => {
    setClick({
      ...click,
      good: click.good + 1
    });
  }

  const updateN = () => {
    setClick({
      ...click,
      neutral: click.neutral + 1
    });
  };

  const updateB = () => {
    setClick({
      ...click,
      bad: click.bad + 1
    });
  };
    
  const resetClick = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = (click.bad + click.neutral + click.good)
  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  return (
    <>
      <div>
        <Description />
        <Options
          good={updateG}
          neutral={updateN}
          bad={updateB}
          reset={resetClick}
          totalFeedback={totalFeedback}
        />
      
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
              good={click.good}
              neutral={click.neutral}
              bad={click.bad}
              totalFeedback={totalFeedback}
              positive={positiveFeedback}/>
        )}
      </div>
    </>
  )
}