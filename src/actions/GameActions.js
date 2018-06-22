export const INIT_GAME = 'INIT_GAME';

export function initGame(msg) {
    return {
        msg,
        type: INIT_GAME
    }
}