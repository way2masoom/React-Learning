import getButtonStyling from './getButton';
import { sounds } from '../../utils/audioUtility';

function Button({ 
    text, 
    type = 'button', 
    onClickHandler, 
    styleType = "primary", 
    disabled = false, 
    icon = null,
    className = "" 
}) {
    const handleClick = (e) => {
        if (!disabled) {
            sounds.playClick();
            onClickHandler?.(e);
        }
    };

    return (
        <button
            onClick={handleClick}
            type={type}
            disabled={disabled}
            className={`inline-flex items-center justify-center gap-2 font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${getButtonStyling(styleType)} ${className}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            <span>{text}</span>
        </button>
    );
}

export default Button;