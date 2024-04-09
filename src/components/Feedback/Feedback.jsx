
export default function Feedback({ feedback: { good, neutral, bad }, totalFeedback,positive }) {

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
