import PropTypes from 'prop-types';

export default function Hangman({ attempts }) {
    const hangmanStages = [
        <></>,
        <>
            {/* Base */}
            <line x1="50" y1="230" x2="100" y2="230" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Vertical beam */}
            <line x1="50" y1="230" x2="50" y2="50" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Horizontal beam */}
            <line x1="50" y1="50" x2="150" y2="50" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Short vertical line */}
            <line x1="150" y1="50" x2="150" y2="70" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Head */}
            <circle cx="150" cy="90" r="20" stroke="red" strokeWidth="4" fill="none" />
        </>,
        <>
            {/* Body */}
            <line x1="150" y1="110" x2="150" y2="170" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Left arm */}
            <line x1="150" y1="130" x2="120" y2="150" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Right arm */}
            <line x1="150" y1="130" x2="180" y2="150" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Left leg */}
            <line x1="150" y1="170" x2="120" y2="200" stroke="red" strokeWidth="4" />
        </>,
        <>
            {/* Right leg */}
            <line x1="150" y1="170" x2="180" y2="200" stroke="red" strokeWidth="4" />
        </>,
    ];

    return (
        <svg width="200" height="250">
            {hangmanStages.slice(0, attempts + 1)}
        </svg>
    );
}

Hangman.propTypes = {
    attempts: PropTypes.number.isRequired,
};