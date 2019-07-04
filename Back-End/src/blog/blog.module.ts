import { PostEntity } from './post/post.entity';
import { PostService } from './services/post.service';
import { PostController } from './post.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
    ],
    controllers: [
        PostController
    ],
    providers: [
        PostService
    ]
})
export class BlogModule { }