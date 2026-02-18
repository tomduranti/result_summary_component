import "./_SingularScoreForm.scss";

export default function SingularScoreForm({ score_form, Icon, text, score }) {
    return (
        <div className={`singular_score_form  singular_score_form--${score_form}`}>
            <div className="singular_score_form__category_summary">
                <Icon className="singular_score_form__image" />
                <span className="singular_score_form__text  text_preset_5--medium">{text}</span>
            </div>
            <div className="singular_score_form__score_summary  text_preset_5--bold">
                <span className="singular_score_form__score">{score}</span><span className="singular_score_form__compare">/   100</span>
            </div>
        </div>
    )
}