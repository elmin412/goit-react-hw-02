export default function Options({ onButton, reset, totalFeedback }) {

    return (
        <div>
            <button onClick={() => onButton ("good")}>Good</button>
            <button onClick={() => onButton ("neutral")}>Neutral</button>
            <button onClick={() => onButton ("bad")}>Bad</button>
            {totalFeedback > 0 && <button onClick={reset}>Reset</button> }
            
        </div>
    )
}