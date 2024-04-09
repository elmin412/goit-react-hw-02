
export default function Feedback({ good, neutral, bad, totalFeedback,positive }) {

    return (
        <div>
            <p>
                Good: {good},
                Neutral: {neutral},
                Bad: {bad},
                Total: {totalFeedback},
                Positive: {positive}%
            </p>
        </div>
    );
    }
