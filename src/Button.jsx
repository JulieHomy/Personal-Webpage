import './Button.css';

function Button ({onClick, children, visual, type}) {
    let buttonClass = '';
    if (!type) {
        type = "button";
    }

    if ( visual === "link") {
        buttonClass = "button-link";
    }

    if ( visual === "button") {
        buttonClass = "button-button";
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>{children}</button>
    );
}

export default Button;