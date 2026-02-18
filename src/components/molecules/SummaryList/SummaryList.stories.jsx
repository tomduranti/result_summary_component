import SingularScoreForm from '../../atoms/SingularScoreForm/SingularScoreForm';
import SummaryList from './SummaryList';
import ReactionIcon from '../../../assets/ReactionIcon';
import MemoryIcon from '../../../assets/MemoryIcon';
import VerbalIcon from '../../../assets/VerbalIcon';
import VisualIcon from '../../../assets/VisualIcon';

export default {
    title: 'Components/Molecules/SummaryList',
    component: SummaryList,
};

export const Default = {
  render: () => (
    <div className="summary_list">
        <SingularScoreForm score_form="reaction" Icon={ReactionIcon} text="Reaction" score="80" />
        <SingularScoreForm score_form="memory"   Icon={MemoryIcon}   text="Memory"   score="92" />
        <SingularScoreForm score_form="verbal"   Icon={VerbalIcon}   text="Verbal"   score="61" />
        <SingularScoreForm score_form="visual"   Icon={VisualIcon}   text="Visual"   score="73" />
    </div>
  )
};