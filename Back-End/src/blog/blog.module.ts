import { PostService } from './../../../Front-End/src/app/blog/services/post.service';
import { PostController } from './post.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [
        PostController
    ],
    providers: [
        PostService
    ]
})
export class BlogModule { }