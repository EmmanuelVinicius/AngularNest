import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { PostResources } from './services/post.resource';
import { PostListModule } from './list/post-list.module';

@NgModule({
    imports: [
        PostListModule
    ],
    exports: [PostListModule],
    declarations: [],
    providers: [
        PostService,
        PostResources
    ],
})
export class BlogModule { }
