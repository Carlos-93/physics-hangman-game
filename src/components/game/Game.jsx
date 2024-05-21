import { useState, useEffect } from 'react';
import Instructions from '../Instructions/Instructions';
import Title from '../Title/Title';
import Hangman from '../Hangman/Hangman';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const words = ['gravity', 'energy', 'force', 'acceleration', 'mass', 'velocity', 'power', 'work', 'heat', 'temperature', 'pressure', 'volume', 'density'];

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

export default function Game() {
    const [word, setWord] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [letterStatus, setLetterStatus] = useState({});
    const [score, setScore] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        if (attempts >= 10) {
            setModalMessage('Game Over!');
            setShowModal(true);
            setIsGameOver(true);
        }
    }, [attempts]);

    useEffect(() => {
        if (word && word.split('').every(letter => guessedLetters.includes(letter.toUpperCase()))) {
            setScore(prevScore => prevScore + 100);
            setModalMessage('Has completado la palabra');
            setShowModal(true);
            setIsGameOver(true);
        }
    }, [guessedLetters, word]);

    function startGame() {
        setWord(getRandomWord());
        setAttempts(0);
        setGuessedLetters([]);
        setLetterStatus({});
        setScore(0);
        setShowModal(false);
        setModalMessage('');
        setIsGameOver(false);
    }

    function closeModal() {
        setShowModal(false);
    }

    function handleGuess(letter) {
        if (!isGameOver && !guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (word.toUpperCase().includes(letter)) {
                setLetterStatus({ ...letterStatus, [letter]: 'correct' });
                setScore(prevScore => prevScore + 20);
            } else {
                setLetterStatus({ ...letterStatus, [letter]: 'incorrect' });
                setAttempts(attempts + 1);
            }
        }
    }

    return (
        <main className="flex flex-col w-[80rem] backdrop-blur-2xl rounded-3xl border border-yellow-400 mx-5 p-5">
            <section className='flex items-center justify-between'>
                <Instructions />
                <Title />
            </section>

            <section className="flex flex-col justify-center items-center">
                <Hangman attempts={attempts} />

                <article className='my-10 flex justify-center items-center'>
                    {word.split('').map((letter, index) => (
                        <span key={index} className="text-2xl mx-1 text-white">
                            {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : '__'}
                        </span>
                    ))}
                </article>

                <article className='mx-44 flex flex-wrap justify-center items-center gap-1 mb-10 mt-5'>
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
                        let backgroundColor = 'bg-yellow-400';
                        let hoverColor = 'hover:bg-yellow-500';
                        let textColor = 'text-black';
                        let buttonClass = '';

                        if (letterStatus[letter] === 'correct') {
                            backgroundColor = 'bg-green-600'; hoverColor = 'hover:bg-green-600';
                        } else if (letterStatus[letter] === 'incorrect') {
                            backgroundColor = 'bg-red-600'; hoverColor = 'hover:bg-red-600';
                        }

                        if (isGameOver) {
                            buttonClass = 'opacity-70 cursor-not-allowed';
                        }

                        return (
                            <Button key={letter} onClick={() => handleGuess(letter)}
                                backgroundColor={backgroundColor} textColor={textColor} hoverColor={hoverColor} className={buttonClass} disabled={isGameOver}>
                                {letter}
                            </Button>
                        );
                    })}
                </article>

                <Button onClick={startGame} backgroundColor="bg-red-600" textColor="text-white" hoverColor="hover:bg-red-500">
                    Reset Game
                </Button>

                <article className="flex absolute bottom-0 right-0 bg-white/20 w-fit px-5 py-2.5 m-5 rounded-xl text-white text-lg">
                    <p className='font-medium'>Score:</p>
                    <p className='font-medium text-yellow-400 w-10 text-end'>{score}</p>
                </article>
            </section>
            {showModal && <Modal message={modalMessage} score={score} onClose={closeModal} />}
        </main>
    );
}