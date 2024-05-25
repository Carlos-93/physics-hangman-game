import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api/game-results';

export default async function processGameResult(finalScore, user_id, game_id, time) {
    try {
        await axios.post(apiUrl, {
            score: finalScore,
            user_id: user_id,
            game_id: game_id,
            time: time,
        });
    } catch (error) {
        console.error('Error processing game result:', error);
    }
}