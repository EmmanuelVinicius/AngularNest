import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list.component';
import { CommonMaterialModule } from './../../../common/common-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModule
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
