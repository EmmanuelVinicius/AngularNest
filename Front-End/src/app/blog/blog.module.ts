import { PostModule } from './posts/post.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        PostModule,
        HttpClientModule
    ],
    exports: [
        PostModule
    ],
    declarations: [],

})
export class BlogModule { }
