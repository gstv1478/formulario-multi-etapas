import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
}   from "react-icons/bs"



const ReviewForm = () => {
    return(
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name="review" required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="neutral" name="review" required />
                    <BsFillEmojiNeutralFill/>
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="satisfied" name="review" required />
                    <BsFillEmojiSmileFill />
                    <p>satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value="very_satisfied" name="review" required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
        </div>

    );
};

export default ReviewForm