import ResultSection from "./ResultSection";

import ScoreContainer from "../../atoms/ScoreContainer/ScoreContainer";
import FeedbackContainer from "../../atoms/FeedbackContainer/FeedbackContainer";

export default {
    title: "Components/Organisms/ResultSection",
    component: ResultSection,
}

export const Default = {
    render: () => (
        <div className="result_section">
            <div className="result_section__content">
                <h2 className="result_section__heading text_preset_5--bold">your result</h2>
                <ScoreContainer />
                <FeedbackContainer />
            </div>
        </div>
    )
} 