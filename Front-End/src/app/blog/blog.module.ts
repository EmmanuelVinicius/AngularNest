import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { PostResources } from './services/post.resource';
import { PostListModule } from './list/post-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        PostListModule,
        HttpClientModule
    ],
    exports: [PostListModule],
    declarations: [],
    providers: [
        PostService,
        PostResources
    ],
})
export class BlogModule { }
