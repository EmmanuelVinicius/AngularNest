import { PostResources } from './services/post.resource';
import { PostListModule } from './list/post-list.module'
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { CreatePostDialogComponent } from './dialogs/create-post-dialog.component';
import { CommonMaterialModule } from 'src/app/common/common-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        PostListModule,
        CommonMaterialModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        PostListModule
    ],
    declarations: [
        CreatePostDialogComponent
    ],
    entryComponents:[
        CreatePostDialogComponent
    ],
    providers: [
        PostService,
        PostResources
    ],
})
export class PostModule { }
