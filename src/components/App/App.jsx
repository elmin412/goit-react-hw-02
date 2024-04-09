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
    } return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  useEffect(() => {
    localStorage.setItem("clickCount", JSON.stringify(click))
  }, [click]);

	
 const updateFeedback = (type) => {
    setClick({
      ...click,
      [type]: click [type] + 1
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
  const positiveFeedback = totalFeedback !== 0 ? Math.round((click.good / totalFeedback) * 100) : 0;
  

  return (
    <>
      <div>
        <Description />
        <Options
          onButton={updateFeedback}
          reset={resetClick}
          totalFeedback={totalFeedback}
        />
      
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
            <Feedback
              feedback={click}
              totalFeedback={totalFeedback}
              positive={positiveFeedback}/>
        )}
      </div>
    </>
  )
}