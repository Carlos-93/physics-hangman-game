import PropTypes from 'prop-types';

export default function Button({
    children,
    onClick,
    backgroundColor = 'bg-yellow-400',
    textColor = 'text-black',
    hoverColor = 'hover:bg-yellow-500',
    className = '',
    disabled = false,
}) {
    const buttonClass = `${backgroundColor} ${textColor} ${hoverColor} text-xl font-semibold py-2.5 px-6 rounded-lg my-1 transition-all ease-in-out duration-300 ${className}`;

    return (
        <button onClick={onClick} className={buttonClass} aria-label="button" disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};