import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogueAddPlayerComponent } from '../dialogue-add-player/dialogue-add-player.component';

@Component({
    selector: 'app-game',
    standalone: true,
    imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
})
export class GameComponent {
    pickCardAnimation = false;
    currentCard: string | undefined = '';
    game!: Game;

    constructor(public dialog: MatDialog) {
        this.newGame();
    }

    newGame() {
        this.game = new Game();
    }

    takeCard() {
        if (!this.pickCardAnimation) {
            this.currentCard = this.game.stack.pop();
            this.pickCardAnimation = true;
            console.log('new Card: ' + this.currentCard);
            console.log(this.game);
            setTimeout(() => {
                if (this.currentCard) {
                    this.game.playedCards.push(this.currentCard);
                }
                this.pickCardAnimation = false;
            }, 1000);
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogueAddPlayerComponent);

        dialogRef.afterClosed().subscribe((name: string) => {
            if (name != '') {
                this.game.players.push(name);
            }
        });
    }
}
