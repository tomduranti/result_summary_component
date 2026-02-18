import "./_SummarySection.scss";

import SummaryList from "../../molecules/SummaryList/SummaryList.jsx";
import Button from "../../atoms/Button/Button.jsx";

export default function SummarySection() {
    return (
        <div className="summary_section">
            <h3 className="summary_section__header  text_preset_5--bold">summary</h3>
            <SummaryList />
            <Button />
        </div>
    )
}