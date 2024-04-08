
export default function Feedback({ good, neutral, bad, totalFeedback }) {

    return (
        <div>
            <p>
                Good: {good},
                Neutral: {neutral},
                Bad: {bad},
                Total: {totalFeedback},
                Positive: {Math.round((good / totalFeedback) * 100)}%
            </p>
        </div>
    );
    }
