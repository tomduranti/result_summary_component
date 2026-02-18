import SummarySection from "./SummarySection";
import SummaryList from "../../molecules/SummaryList/SummaryList";
import Button from "../../atoms/Button/Button";

export default {
    title: 'Components/Organisms/SummarySection',
    component: SummarySection,
};

export const Default = {
    render: () => (
        <div className="summary_section">
            <h3 className="summary_section__header  text_preset_5--bold">Summary</h3>
            <SummaryList />
            <Button />
        </div>
    )
}