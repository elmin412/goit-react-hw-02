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
      g: 0,
      n: 0,
      b: 0,
    }
  });

  useEffect(() => {
    localStorage.setItem("clickCount", JSON.stringify(click))
  }, [click]);

	
  const updateG = () => {
    setClick({
      ...click,
      g: click.g + 1
    });
  }

  const updateN = () => {
    setClick({
      ...click,
      n: click.n + 1
    });
  };

  const updateB = () => {
    setClick({
      ...click,
      b: click.b + 1
    });
  };
    
  const resetClick = () => {
    setClick({
      g: 0,
      n: 0,
      b: 0,
    });
  };

  const totalFeedback = (click.b + click.n + click.g)

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
            good={click.g}
            neutral={click.n}
            bad={click.b}
            totalFeedback={totalFeedback}/>
        )}
      </div>
    </>
  )
}