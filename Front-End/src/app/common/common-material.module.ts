import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTableModule, MatProgressBarModule, MatDialog, MatDialogModule, MatInputModule, MatFormFieldModule, MatIconModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    exports: [
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModule { }
