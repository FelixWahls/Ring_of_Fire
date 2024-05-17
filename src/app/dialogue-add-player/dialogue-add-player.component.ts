import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-dialogue-add-player',
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        FormsModule,
    ],
    templateUrl: './dialogue-add-player.component.html',
    styleUrl: './dialogue-add-player.component.scss',
})
export class DialogueAddPlayerComponent {
    name: string = '';

    onNoClick() {}
}
