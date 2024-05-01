import "./EmotionItem.css"
import {getEmotionImage} from "../util/get-emotion-image.js";

// eslint-disable-next-line react/prop-types
const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    return
    // eslint-disable-next-line no-unreachable
    <div
        onClick={onClick}
        className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
    >
            <img className="emotion_img" src={getEmotionImage(emotionId)}/>
            <div className="emotion_name">{emotionName}</div>
    </div>;
}

export default EmotionItem;