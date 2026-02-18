import SingularScoreForm from './SingularScoreForm';
import MemoryIcon from '../../../assets/MemoryIcon.jsx';
import ReactionIcon from '../../../assets/ReactionIcon.jsx';
import VerbalIcon from '../../../assets/VerbalIcon.jsx';
import VisualIcon from '../../../assets/VisualIcon.jsx';

export default {
  title: 'Components/Atoms/SingularScoreForm',
  component: SingularScoreForm,
};

export const Reaction = {
    args: {
        score_form: "reaction",
        Icon: ReactionIcon,
        text: "Reaction",
        score: "80",
    }
}

export const Memory = {
    args: {
        score_form: "memory",
        Icon: MemoryIcon,
        text: "Memory",
        score: "92",
    }
}

export const Verbal = {
    args: {
        score_form: "verbal",
        Icon: VerbalIcon,
        text: "Verbal",
        score: "61",
    }
}

export const Visual = {
    args: {
        score_form: "visual",
        Icon: VisualIcon,
        text: "Visual",
        score: "73",
    }
}