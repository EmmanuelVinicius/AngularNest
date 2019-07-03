import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: [],
})
export class PostListModule { }
