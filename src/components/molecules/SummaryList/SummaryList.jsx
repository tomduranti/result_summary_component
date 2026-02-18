import "./_SummaryList.scss";

import SingularScoreForm from "../../atoms/SingularScoreForm/SingularScoreForm.jsx";

import MemoryIcon from "../../../assets/MemoryIcon.jsx";
import ReactionIcon from "../../../assets/ReactionIcon.jsx";
import VerbalIcon from "../../../assets/VerbalIcon.jsx";
import VisualIcon from "../../../assets/VisualIcon.jsx";

export default function SummaryList() {
    return (
        <div className="summary_list">
            <SingularScoreForm score_form="reaction" Icon={ReactionIcon} text="Reaction" score="80" />
            <SingularScoreForm score_form="memory" Icon={MemoryIcon} text="Memory" score="92" />
            <SingularScoreForm score_form="verbal" Icon={VerbalIcon} text="Verbal" score="61" />
            <SingularScoreForm score_form="visual" Icon={VisualIcon} text="Visual" score="73" />
        </div>
    )
}