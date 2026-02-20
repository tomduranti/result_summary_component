import "./_ResultSection.scss";

import ScoreContainer from "../../atoms/ScoreContainer/ScoreContainer.jsx";
import FeedbackContainer from "../../atoms/FeedbackContainer/FeedbackContainer.jsx";

export default function ResultSection() {
    return (
        <div className="result_section">
            <div className="result_section__content">
                <h2 className="result_section__heading text_preset_5--bold">your result</h2>
                <ScoreContainer />
                <FeedbackContainer />
            </div>
        </div>
    )
}