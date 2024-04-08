export default function Options({ good, neutral, bad, reset, totalFeedback }) {

    return (
        <div>
            <button onClick={good}>Good</button>
            <button onClick={neutral}>Neutral</button>
            <button onClick={bad}>Bad</button>
            {totalFeedback > 0 && <button onClick={reset}>Reset</button> }
            
        </div>
    )
}