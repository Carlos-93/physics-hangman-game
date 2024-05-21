import PropTypes from 'prop-types';

export default function Modal({ message, score, onClose }) {

    return (
        <div className="fixed inset-0 backdrop-blur-md bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white py-5 px-10 flex flex-col justify-center items-center rounded-xl gap-5 w-auto">
                <p className="text-3xl font-semibold">{message}</p>
                <p className="font-medium text-lg">Your score: <span className='text-yellow-600'>{score} Points</span></p>
                <button onClick={onClose} className="px-4 py-2 font-medium bg-red-500 text-white rounded hover:bg-red-700 transition-all ease-in-out duration-300">
                    TRY AGAIN
                </button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
};