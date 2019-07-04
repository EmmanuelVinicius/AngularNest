import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatTableModule, MatProgressBarModule, MatDialog, MatDialogModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressBarModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressBarModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModule { }
