export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spades_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('diamonds_' + i);
        }
        shuffle(this.stack);
    }
}

function shuffle(array: string[]) {
    array.sort(() => Math.random() - 0.5);
}
